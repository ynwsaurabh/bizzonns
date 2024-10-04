"use client";
import React, { useState } from "react";

interface ComparisonRow {
  title: string;
  data: string[];
  details?: string[];
}
interface Headers {
  names: string[];
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  headers: Headers;
}

const TableComponent: React.FC<ComparisonTableProps> = ({ rows, headers }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="g-table-wraper w-[95%] mx-auto text-gray-900 dark:text-white lg:max-w-7xl shadow-md  overflow-auto">
      <table className="g-table highlight-3 overflow-x-auto" width="100%">
        <thead>
          <tr>
            <th></th>
            <th></th>
            {headers.names.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr>
                {row.details ? (
                  <td>
                    <div className="max-w-[90%] mx-auto flex items-center justify-around">
                      <span
                        className={`expandChildTable ${
                          expandedRows.includes(rowIndex) ? "selected" : ""
                        }`}
                        onClick={() => toggleRow(rowIndex)}
                      >
                        {expandedRows.includes(rowIndex) ? "-" : "+"}
                      </span>
                    </div>
                  </td>
                ) : (
                  <td></td>
                )}
                <td>{row.title}</td>
                {row.data.map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
              {expandedRows.includes(rowIndex) && row.details && (
                <tr className="childTableRow">
                  <td></td>
                  <td></td>
                  {row.details?.map((detail, index) => (
                    <td key={index}>{detail}</td>
                  ))}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .expandChildTable {
          cursor: pointer;
          background: #fc8606;
          color: #fff;
          border-radius: 100%;
          width: 15px;
          height: 15px;
          font-size: x-small;
          text-align: center;
        }
        .childTableRow {
          display: table-row;
        }
        .g-table th,
        .g-table td:nth-child(7) {
          background-color: #eff1f5;
          color: #000;
        }
        .g-table-wraper {
          //   border: 2px solid #555;
          border-collapse: collapse;
        }
        th,
        td {
          border-bottom: 1px solid #555; /* Cell borders */
          padding: 8px 15px; /* Cell padding */
        //   white-space: nowrap;
        }
        .expandChildTable {
          cursor: pointer;
          background: #fc8606;
          color: #fff;
          border-radius: 100%;
          width: 15px;
          height: 15px;
          font-size: x-small;
          text-align: center;
        }
        .childTableRow {
          display: table-row;
        }
        .g-table th,
        .g-table td:nth-child(7) {
          background-color: #eff1f5;
          color: #000;
        }
        .g-table td:nth-child(2) {
          width: 200px;
          color: #fc8606;
          font-weight: 500;
        }
        .g-table td:nth-child(1) {
          padding: 0px 0px;
        }
        @media (max-width:500px) {
          .g-table td:nth-child(2) {
            width: 129px;
          }
        }
      `}</style>
    </div>
  );
};

export default TableComponent;
