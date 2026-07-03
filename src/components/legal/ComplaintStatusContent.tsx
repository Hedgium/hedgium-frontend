"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocIdPrefix, LegalDocVariant } from "@/components/legal/types";
import OpensInNewTabHint from "@/components/OpensInNewTabHint";

const MONTH_ENDING = "March 2026";

const SUMMARY_ROWS = [
  { sr: 1, source: "Directly from Investors", pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 },
  { sr: 2, source: "SEBI (SCORES)", pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 },
  { sr: 3, source: "Other Sources (if any)", pendingLast: 0, received: 0, resolved: 0, totalPending: 0, pendingOver3Months: 0, avgResolutionDays: 0 },
];

const MONTHLY_TREND = [
  { sr: 1, month: "March 2026", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
];

const ANNUAL_TREND = [
  { sr: 1, year: "2025-26", carriedForward: 0, received: 0, resolved: 0, pending: 0 },
];

export default function ComplaintStatusPage({
  variant = "standalone",
  idPrefix = "",
}: {
  variant?: LegalDocVariant;
  idPrefix?: LegalDocIdPrefix;
}) {
  const embedded = variant === "embedded";

  const mainBlock = (
      <div className="max-w-4xl mx-auto">
        <div className="bg-base-100">
          <div className="card-body gap-4">
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                {React.createElement(
                  embedded ? "h2" : "h1",
                  { className: "text-2xl md:text-3xl font-bold" },
                  "Complaint Status"
                )}
                <p className="text-sm text-base-content/90 mt-1">
                  SEBI Registered Research Analyst – INH000025258
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-ghost btn-sm"
                  aria-label="Print complaint status"
                >
                  Print
                </button>
              </div>
            </header>

            <div className="divider my-0" />

            <article id={`${idPrefix}printable`} className="prose prose-sm md:prose-md max-w-none">
              <p className="text-base-content/90 mb-6">
                Data for the month ending – {MONTH_ENDING}
              </p>

              {/* Summary Table */}
              <div
                className="mb-8 overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                role="region"
                aria-label="Complaint status summary data"
                tabIndex={0}
              >
                <table className="table table-zebra w-full text-sm">
                  <thead>
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">Received from</th>
                      <th scope="col">Pending at the end of last month</th>
                      <th scope="col">Received</th>
                      <th scope="col">Resolved*</th>
                      <th scope="col">Total Pending#</th>
                      <th scope="col">Pending complaints &gt; 3 months</th>
                      <th scope="col">Average Resolution time^ (in days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SUMMARY_ROWS.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.source}</td>
                        <td>{row.pendingLast}</td>
                        <td>{row.received}</td>
                        <td>{row.resolved}</td>
                        <td>{row.totalPending}</td>
                        <td>{row.pendingOver3Months}</td>
                        <td>{row.avgResolutionDays}</td>
                      </tr>
                    ))}
                    <tr className="font-semibold bg-base-200">
                      <td aria-hidden="true"></td>
                      <td>Grand Total</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-base-content mb-6">
                ^ Average Resolution time is the sum total of time taken to
                resolve each complaint in days, in the current month divided by
                total number of complaints resolved in the current month.
              </p>

              {/* Monthly Trend */}
              <h2 id="complaint-status-monthly-trend-heading" className="text-lg font-semibold mt-8 mb-4">
                Trend of monthly disposal of complaints
              </h2>
              <div
                className="mb-6 overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <table className="table table-zebra w-full text-sm">
                  <thead>
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">Month</th>
                      <th scope="col">Carried forward from previous month</th>
                      <th scope="col">Received</th>
                      <th scope="col">Resolved*</th>
                      <th scope="col">Pending#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MONTHLY_TREND.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.month}</td>
                        <td>{row.carriedForward}</td>
                        <td>{row.received}</td>
                        <td>{row.resolved}</td>
                        <td>{row.pending}</td>
                      </tr>
                    ))}
                    <tr className="font-semibold bg-base-200">
                      <td aria-hidden="true"></td>
                      <td>Grand Total</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-base-content mb-6">
                * Inclusive of complaints of previous months resolved in the
                current month.
                <br />
                # Inclusive of complaints pending as on the last day of the
                month.
              </p>

              {/* Annual Trend */}
              <h2 id="complaint-status-annual-trend-heading" className="text-lg font-semibold mt-8 mb-4">
                Trend of annual disposal of complaints
              </h2>
              <div
                className="mb-6 overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                
              >
                <table className="table table-zebra w-full text-sm">
                  <thead>
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">Year</th>
                      <th scope="col">Carried forward from previous year</th>
                      <th scope="col">Received</th>
                      <th scope="col">Resolved*</th>
                      <th scope="col">Pending#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ANNUAL_TREND.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>
                        <td>{row.year}</td>
                        <td>{row.carriedForward}</td>
                        <td>{row.received}</td>
                        <td>{row.resolved}</td>
                        <td>{row.pending}</td>
                      </tr>
                    ))}
                    <tr className="font-semibold bg-base-200">
                      <td aria-hidden="true"></td>
                      <td>Grand Total</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-base-content">
                * Inclusive of complaints of previous years resolved in the
                current year.
                <br />
                # Inclusive of complaints pending as on the last day of the year.
              </p>

              <section className="mt-10 pt-6 border-t border-base-300">
                <h2 className="text-lg font-semibold mb-3">Contact</h2>
                <p className="text-sm text-base-content/90">
                  For any complaints or grievances, please contact:
                  <br />
                  <a
                    href="mailto:compliance@hedgium.in"
                    className="link link-primary"
                  >
                    compliance@hedgium.in
                  </a>
                </p>
                <p className="text-sm text-base-content/90 mt-2">
                  SEBI SCORES:{" "}
                  <a
                    href="https://scores.sebi.gov.in/scores-home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    scores.sebi.gov.in
                    <OpensInNewTabHint />
                  </a>
                  {" | "}
                  SMARTODR:{" "}
                  <a
                    href="https://smartodr.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    smartodr.in
                    <OpensInNewTabHint />
                  </a>
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
  );

  if (embedded) return mainBlock;

  return (
    <>
      <Navbar />
      {mainBlock}
      <Footer />
    </>
  );
}
