import { useState, useRef, useEffect, useCallback } from 'react';

export default function SqlPlayground({ datasets }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sql, setSql] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [elapsed, setElapsed] = useState(null);
  const [history, setHistory] = useState([]);
  const [showExamples, setShowExamples] = useState(false);
  const [showSchema, setShowSchema] = useState(false);
  const [loading, setLoading] = useState(true);
  const dbRef = useRef(null);
  const sqlJsRef = useRef(null);
  const textareaRef = useRef(null);

  const dataset = datasets[activeIdx];

  // Initialize sql.js
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const initSqlJs = (await import('sql.js')).default;
        const SQL = await initSqlJs({
          locateFile: () => '/sql-wasm.wasm',
        });
        if (!cancelled) {
          sqlJsRef.current = SQL;
          initDb(SQL, datasets[activeIdx]);
        }
      } catch (e) {
        if (!cancelled) setError('sql.js 초기화 실패: ' + e.message);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initDb = useCallback((SQL, ds) => {
    setLoading(true);
    setResult(null);
    setError('');
    setElapsed(null);
    try {
      if (dbRef.current) dbRef.current.close();
      const db = new SQL.Database();
      db.run(ds.createSQL);
      ds.insertSQL.split(';').filter(s => s.trim()).forEach(s => db.run(s + ';'));
      dbRef.current = db;
    } catch (e) {
      setError('DB 초기화 실패: ' + e.message);
    }
    setLoading(false);
  }, []);

  // Switch dataset
  const handleTab = (idx) => {
    setActiveIdx(idx);
    setSql('');
    setResult(null);
    setError('');
    setElapsed(null);
    setShowExamples(false);
    setShowSchema(false);
    if (sqlJsRef.current) initDb(sqlJsRef.current, datasets[idx]);
  };

  // Execute SQL
  const runSql = useCallback(() => {
    if (!dbRef.current || !sql.trim()) return;
    setError('');
    setResult(null);
    const t0 = performance.now();
    try {
      const res = dbRef.current.exec(sql);
      const t1 = performance.now();
      setElapsed(t1 - t0);
      if (res.length > 0) {
        setResult(res[0]);
      } else {
        setResult({ columns: [], values: [] });
      }
      setHistory(prev => {
        const next = [{ sql: sql.trim(), time: new Date().toLocaleTimeString() }, ...prev];
        return next.slice(0, 5);
      });
    } catch (e) {
      const t1 = performance.now();
      setElapsed(t1 - t0);
      setError(e.message);
    }
  }, [sql]);

  // Reset DB
  const handleReset = () => {
    if (sqlJsRef.current) initDb(sqlJsRef.current, dataset);
    setSql('');
    setResult(null);
    setError('');
    setElapsed(null);
  };

  // Keyboard shortcut
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runSql();
    }
  };

  // Load example
  const loadExample = (exSql) => {
    setSql(exSql);
    setShowExamples(false);
    textareaRef.current?.focus();
  };

  // Load schema data for the active dataset
  const loadSchemaData = () => {
    if (!dbRef.current || !dataset) return null;
    const tables = [];
    for (const t of dataset.tables) {
      try {
        const res = dbRef.current.exec(`SELECT * FROM ${t.name};`);
        tables.push({ name: t.name, columns: t.columns, rows: res[0]?.values || [] });
      } catch {
        tables.push({ name: t.name, columns: t.columns, rows: [] });
      }
    }
    return tables;
  };

  return (
    <div className="playground-wrap">
      {/* Dataset Tabs */}
      <div className="playground-tabs">
        {datasets.map((ds, i) => (
          <button
            key={ds.id}
            className={`playground-tab${i === activeIdx ? ' active' : ''}`}
            onClick={() => handleTab(i)}
          >
            {ds.name}
          </button>
        ))}
      </div>

      {/* Dataset Description */}
      <p className="playground-desc">{dataset.description}</p>

      {/* Schema Toggle */}
      <div className="playground-schema-section">
        <button className="playground-schema-toggle" onClick={() => setShowSchema(!showSchema)}>
          <span className={`playground-arrow${showSchema ? ' open' : ''}`}>&#9654;</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
          현재 데이터셋 테이블 보기
        </button>
        {showSchema && !loading && (
          <div className="playground-schema-content">
            {(loadSchemaData() || []).map(t => (
              <div key={t.name} className="playground-schema-table">
                <h4>{t.name} ({t.rows.length}행)</h4>
                <div className="playground-table-wrap">
                  <table className="playground-table">
                    <thead>
                      <tr>{t.columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
                    </thead>
                    <tbody>
                      {t.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((val, ci) => (
                            <td key={ci}>
                              {val === null || val === undefined
                                ? <em className="sql-null">(NULL)</em>
                                : String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SQL Editor */}
      <div className="playground-editor-section">
        <div className="playground-editor-header">
          <span>SQL 입력</span>
          <span className="playground-shortcut">Ctrl + Enter로 실행</span>
        </div>
        <textarea
          ref={textareaRef}
          className="playground-editor"
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="SELECT * FROM 부서;"
          rows={6}
          spellCheck={false}
        />
      </div>

      {/* Toolbar */}
      <div className="playground-toolbar">
        <div className="playground-toolbar-left">
          <button className="playground-btn playground-btn-run" onClick={runSql} disabled={loading || !sql.trim()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            실행
          </button>
          <button className="playground-btn playground-btn-reset" onClick={handleReset}>
            초기화
          </button>
        </div>
        <div className="playground-toolbar-right">
          <div className="playground-examples-wrap">
            <button className="playground-btn playground-btn-examples" onClick={() => setShowExamples(!showExamples)}>
              예제 SQL ▾
            </button>
            {showExamples && (
              <div className="playground-examples-dropdown">
                {dataset.examples.map((ex, i) => (
                  <button key={i} onClick={() => loadExample(ex.sql)}>
                    {ex.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="playground-loading">
          <div className="loading-spinner" /> 데이터베이스 초기화 중...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="playground-error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Result */}
      {result && !error && (
        <div className="playground-result">
          <div className="playground-result-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            실행 결과
            {result.values ? ` (${result.values.length}건)` : ' (0건)'}
            {elapsed !== null && <span className="playground-elapsed"> — {elapsed.toFixed(1)}ms</span>}
          </div>
          {result.columns && result.columns.length > 0 ? (
            <div className="playground-table-wrap">
              <table className="playground-table playground-result-table">
                <thead>
                  <tr>{result.columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {result.values.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((val, ci) => (
                        <td key={ci}>
                          {val === null || val === undefined
                            ? <em className="sql-null">(NULL)</em>
                            : String(val)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="playground-no-result">쿼리가 성공적으로 실행되었습니다 (반환된 행 없음).</div>
          )}
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="playground-history">
          <div className="playground-history-title">실행 히스토리 (최근 {history.length}개)</div>
          <ul>
            {history.map((h, i) => (
              <li key={i}>
                <button className="playground-history-item" onClick={() => { setSql(h.sql); textareaRef.current?.focus(); }}>
                  <code>{h.sql.length > 80 ? h.sql.slice(0, 80) + '...' : h.sql}</code>
                  <span className="playground-history-time">{h.time}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
