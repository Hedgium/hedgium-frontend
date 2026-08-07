"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocIdPrefix, LegalDocVariant } from "@/components/legal/types";

export default function AiUsageDisclosurePage({
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
                  "Artificial Intelligence (AI) Usage Disclosure"
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-ghost btn-sm"
                  aria-label="Print AI Usage Disclosure"
                >
                  Print
                </button>
              </div>
            </header>

            <div className="divider my-0" />

            <article
              id={`${idPrefix}printable`}
              className="prose prose-sm md:prose-md max-w-none"
            >
              <section className="mb-6 space-y-4">
                <p className="text-base-content/90 leading-relaxed">
                  As part of its research and investment advisory process, the
                  Research Analyst may use Artificial Intelligence
                  (&ldquo;AI&rdquo;)-based tools and technologies to assist in
                  the analysis of financial markets and securities. These tools
                  may be used for purposes including, but not limited to:
                </p>

                <ul className="list-disc list-inside space-y-2 text-base-content/90 leading-relaxed">
                  <li>
                    Monitoring and scanning publicly available news, corporate
                    announcements, regulatory filings, macroeconomic
                    developments, and other market events that may impact
                    securities or trading strategies.
                  </li>
                  <li>
                    Performing technical analysis by identifying chart patterns,
                    price trends, momentum indicators, support and resistance
                    levels, volatility measures, and other quantitative signals.
                  </li>
                  <li>
                    Screening securities based on predefined investment,
                    quantitative, or technical criteria.
                  </li>
                  <li>
                    Improving research efficiency by organizing, summarizing,
                    and processing large volumes of publicly available
                    information.
                  </li>
                </ul>

                <p className="text-base-content/90 leading-relaxed">
                  The use of AI is intended solely to enhance the efficiency and
                  consistency of the research process. AI-generated outputs are
                  not relied upon as standalone investment recommendations or
                  trading advice.
                </p>

                <p className="text-base-content/90 leading-relaxed">
                  All research reports, trading strategies, investment
                  recommendations, and communications provided to clients are
                  subject to review, validation, and approval by the Research
                  Analyst or authorized personnel before being communicated to
                  clients. Human judgment, experience, risk management
                  considerations, and regulatory obligations remain the primary
                  basis for all recommendations.
                </p>

                <p className="text-base-content/90 leading-relaxed">
                  While reasonable care is taken to verify information generated
                  or processed through AI tools, such tools may occasionally
                  produce incomplete, inaccurate, delayed, or misleading
                  outputs. Accordingly, the Research Analyst does not warrant
                  the accuracy, completeness, or reliability of any AI-generated
                  analysis and shall not be liable for any loss arising solely
                  from limitations or errors inherent in such technologies.
                </p>

                <p className="text-base-content/90 leading-relaxed">
                  The use of AI does not alter the fiduciary and regulatory
                  responsibilities of the Research Analyst under the Securities
                  and Exchange Board of India (Research Analysts) Regulations,
                  2014 (as amended), or any other applicable laws, regulations,
                  circulars, or guidelines issued by SEBI.
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
