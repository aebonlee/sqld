import { useState } from 'react';

export default function SqlBlock({ title, sql, columns, rows, description }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sql);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="sql-block">
      <div className="sql-block-header">
        <span className="sql-block-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
          {title || 'SQL'}
        </span>
        <button className={`sql-block-copy${copied ? ' copied' : ''}`} onClick={handleCopy}>
          {copied ? '복사 완료!' : '복사'}
        </button>
      </div>

      <pre className="sql-block-code"><code>{sql}</code></pre>

      {description && (
        <div className="sql-block-desc">{description}</div>
      )}

      {columns && rows && (
        <>
          <div className="sql-block-result-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            실행 결과 ({rows.length}건)
          </div>
          <div className="sql-block-table-wrap">
            <table className="sql-block-table">
              <thead>
                <tr>
                  {columns.map((col, i) => <th key={i}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>
                    {columns.map((col, ci) => (
                      <td key={ci}>
                        {row[col] === null || row[col] === undefined
                          ? <em className="sql-null">(NULL)</em>
                          : String(row[col])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
