import React from "react";
import "./Grid.css";

interface Column {
  header: string;
  field: string;
}

interface GridProps {
  columns: Column[];
  rowData: Record<string, any>[];
}

const Grid: React.FC<GridProps> = ({ columns, rowData }) => {
  return (
    <div className="grid-container">
      <div className="grid-header">
        {columns.map((col) => (
          <div key={col.field} className="grid-cell header">
            {col.header}
          </div>
        ))}
      </div>
      <div className="grid-body">
        {rowData.map((row) => (
          <div key={row.itemId} className="grid-row">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="grid-cell">
                {row[col.field]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
