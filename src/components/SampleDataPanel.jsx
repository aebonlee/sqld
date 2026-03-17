import { useState } from 'react';
import { 부서, 사원, 부서columns, 사원columns } from '../data/sampleData';

export default function SampleDataPanel() {
  const [open, setOpen] = useState(false);

  const renderTable = (columns, data) => (
    <div className="sample-data-table-wrap">
      <table className="sample-data-table">
        <thead>
          <tr>{columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri}>
              {columns.map((c, ci) => (
                <td key={ci}>
                  {row[c] === null || row[c] === undefined
                    ? <em className="sql-null">(NULL)</em>
                    : String(row[c])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="sample-data-panel">
      <button className="sample-data-toggle" onClick={() => setOpen(!open)}>
        <span className={`sample-data-arrow${open ? ' open' : ''}`}>&#9654;</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
        샘플 데이터 (부서·사원 테이블)
      </button>

      {open && (
        <div className="sample-data-content">
          <h4>부서 테이블 ({부서.length}행)</h4>
          {renderTable(부서columns, 부서)}

          <h4>사원 테이블 ({사원.length}행)</h4>
          {renderTable(사원columns, 사원)}
        </div>
      )}
    </div>
  );
}
