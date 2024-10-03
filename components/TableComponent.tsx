"use client";
import React, { useState } from "react";

interface ComparisonRow {
  title: string;
  data: string[];
  details: string[];
}

const rows: ComparisonRow[] = [
  {
    title: "Governed by",
    data: [
      "Not Governed by any specific act",
      "Indian Partnership Act",
      "LLP Act, 2008",
      "Companies Act, 2013",
      "Companies Act, 2013",
    ],
    details: ["", "", "", "", ""],
  },
  {
    title: "Recommended",
    data: [
      "Sole Promoter",
      "Small Business",
      "Small Business",
      "Start-ups and growing business",
      "Sole Promoter",
    ],
    details: ["", "", "", "", ""],
  },
  {
    title: "Registration",
    data: ["NA", "Optional", "Mandatory", "Mandatory", "Mandatory"],
    details: [
      "Registration under MSME or GST act are considered valid for Proprietor Firms",
      "No registration required. Registration under MSME or GST act are considered valid for Proprietor Firms",
      "Partnerships can be registered or Unregistered, there are obvious benefits to register with the State ROF",
      "LLP must be registered with MCA under the LLP Act",
      "Same as Private Limited Company",
    ],
  },
  {
    title: "Members Liability",
    data: ["Unlimited", "Unlimited", "Limited", "Limited", "Limited"],
    details: [
      "Paying off the liabilities of the firm is the proprietor’s responsibility",
      "Partners are jointly and severally liable to pay the debts of the Partnership Firm",
      "Limited to the capital contribution agreed by the partner in the LLP Agreement",
      "Same as Private Limited Company",
      "Same as Private Limited Company",
    ],
  },
  {
    title: "Separate Legal Entity",
    data: ["No", "No", "Yes", "Yes", "Yes"],
    details: [
      "Proprietor and business are the same, and hold same PAN number",
      "Partnership firm does not have any separate identity from its partners",
      "Same as Private Limited Company",
      "Same as Private Limited Company",
      "PLC is a separate legal entity, and can enter into contracts or own assets in its own name",
    ],
  },
  {
    title: "Number of Members",
    data: ["Only 1", "2 – 50", "2 – Unlimited", "2 – 200", "Only 1"],
    details: [
      "The proprietor can be the only owner of the firm",
      "Minimum 2 partners, and maximum 50 partners",
      "Minimum 2 Designated Partners are required. No limit on the number of maximum partners",
      "Minimum of 2 to maximum of 200 shareholders excluding present or former employees who are members",
      "Only one shareholder",
    ],
  },
  {
    title: "Transferability",
    data: [
      "Non-Transferable",
      "Non-Transferable",
      "Transferable, if ROF registered",
      "Transferable",
      "Transferable",
    ],
    details: [
      "Ownership of the proprietorship is not transferable",
      "Ownership is not easily transferable. Partnership deed outlines the restriction for transfer of ownership",
      "Ownership can be changed with consent of other partners, by drafting a supplementary agreement",
      "There is only one owner in OPC. 100% shares need to be transferred to change ownership",
      "Shares are easily transferable, so it makes it a most preferred option for raising capital through external investors",
    ],
  },
  {
    title: "Compliance",
    data: ["Low", "Low", "Moderate", "High", "High"],
    details: [
      "No requirement to file a separate ITR. Very less to no compliance hassle",
      "ITR of partnership needs to be filed annually, no major compliance requirements otherwise",
      "Annual filing and few event-based filings are necessary, but lesser compliance requirements as compared to company structure",
      "OPC compliance requirements are similar to PLC, except conducting an Annual General Meeting (AGM)",
      "Private company has the highest compliance requirements, both annual and event based",
    ],
  },
  {
    title: "Statutory Audit",
    data: ["No", "No", "Based on Turnover", "Applicable", "Applicable"],
    details: [
      "Same as Partnership Firm",
      "No statutory audit required. Tax audit applicable on basis of total turnover",
      "Statutory audit required when turnover exceeds INR 40 Lac or contribution exceeds INR 25 Lac",
      "Required to appoint a statutory auditor within 30 days of company incorporation",
      "Same as Private Limited Company",
    ],
  },
  {
    title: "Taxability",
    data: ["Low", "High", "High", "Moderate", "Moderate"],
    details: [
      "Tax rates for individuals apply to Proprietorship Firm, as per the Income Tax slab",
      "Same as LLP",
      "Same as Private Limited Company",
      "Tax rate of 30% on business profits, tax benefits to partners on profit distribution is high",
      "Lower rate of 25% for companies with gross turnover of INR 400 Crore. Additional dividend distribution tax may apply",
    ],
  },
];

const ComparisonTable: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="g-table-wraper mx-auto max-w-7xl overflow-x-scroll">
      <table className="g-table highlight-3" width="100%">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Proprietorship Firm</th>
            <th>Partnership Firm</th>
            <th>Limited Liability Partnership</th>
            <th>Private Limited Company</th>
            <th>One Person Company</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr>
                <td>
                  <span
                    className={`expandChildTable ${
                      expandedRows.includes(rowIndex) ? "selected" : ""
                    }`}
                    onClick={() => toggleRow(rowIndex)}
                  >
                    {expandedRows.includes(rowIndex) ? "-" : "+"}
                  </span>
                </td>
                <td>{row.title}</td>
                {row.data.map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
              {expandedRows.includes(rowIndex) && (
                <tr className="childTableRow">
                  <td></td>
                  <td></td>
                  {row.details.map((detail, index) => (
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
          text-align: center;
          line-height: 15px;
        }
        .childTableRow {
          display: table-row;
        }
        .g-table th:nth-child(7),
        .g-table td:nth-child(7) {
          background-color: #eff1f5;
          color: #000;
        }
        .g-table-wraper {
          border: 2px solid #555;
          border-collapse: collapse; 
          
        }
        .g-table {
          width: 100%;
        }
        th,
        td {
          border: 1px solid #555; /* Cell borders */
          padding: 10px; /* Cell padding */
        }
        .expandChildTable {
          cursor: pointer;
          background: #fc8606;
          color: #fff;
          border-radius: 100%;
          width: 15px;
          height: 15px;
          text-align: center;
          line-height: 15px;
        }
        .childTableRow {
          display: table-row;
        }
        .g-table th:nth-child(7),
        .g-table td:nth-child(7) {
          background-color: #eff1f5;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default ComparisonTable;
