"use client";
import React from "react";

// Define the types for the data
interface FAQ {
  form: string;
  dueDate: string;
  particulars: string;
}

interface ComparisonTableProps {
  data: FAQ[]; // Data passed from the parent component
}

const ComplianceTable: React.FC<ComparisonTableProps> = ({ data }) => {
  return (
    <div className="w-full mx-auto text-gray-900 dark:text-white lg:max-w-7xl shadow-lg rounded-md overflow-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">Form</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Due Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Particulars</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="px-6 py-3 text-sm">{item.form}</td>
              <td className="px-6 py-3 text-sm">{item.dueDate}</td>
              <td className="px-6 py-3 text-sm">{item.particulars}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplianceTable;
