"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocIdPrefix, LegalDocVariant } from "@/components/legal/types";

export default function CodeOfConductPage({
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
                "Code of Conduct for Research Analyst"
              )}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="btn btn-ghost btn-sm"
                aria-label="Print Code of Conduct"
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
                Hedgium Services LLP (&ldquo;Hedgium&rdquo; / &ldquo;the
                Company&rdquo;) is a SEBI Registered Research Analyst,
                Registration Number INH000025258.
              </p>

              <p className="text-base-content/90 leading-relaxed">
                In accordance with Regulation 24(2) of the SEBI (Research
                Analysts) Regulations, 2014, Hedgium shall adhere to the
                following Code of Conduct:
              </p>

              <ol className="list-decimal list-inside space-y-3 text-base-content/90 leading-relaxed">
                <li>
                  <strong>Honesty and Good Faith</strong>
                  <p className="mt-1 ml-5">
                    We shall act honestly and in good faith in all our dealings.
                  </p>
                </li>
                <li>
                  <strong>Diligence</strong>
                  <p className="mt-1 ml-5">
                    We shall act with due skill, care and diligence and ensure
                    that research reports are prepared after thorough analysis.
                  </p>
                </li>
                <li>
                  <strong>Conflict of Interest</strong>
                  <p className="mt-1 ml-5">
                    We shall identify, manage and appropriately disclose
                    conflicts of interest that may affect the objectivity of our
                    research or recommendations.
                  </p>
                </li>
                <li>
                  <strong>Insider Trading and Front Running</strong>
                  <p className="mt-1 ml-5">
                    We shall not engage in insider trading, front running or any
                    other activity that may compromise the integrity of our
                    research or the securities market.
                  </p>
                </li>
                <li>
                  <strong>Confidentiality</strong>
                  <p className="mt-1 ml-5">
                    We shall maintain the confidentiality of unpublished
                    research reports, recommendations and other confidential
                    information, except where disclosure is required by law or
                    regulation.
                  </p>
                </li>
                <li>
                  <strong>Professional Standards</strong>
                  <p className="mt-1 ml-5">
                    We and our employees engaged in research activities shall
                    observe high professional standards while preparing research
                    reports and providing research services.
                  </p>
                </li>
                <li>
                  <strong>Regulatory Compliance</strong>
                  <p className="mt-1 ml-5">
                    We shall comply with all regulatory requirements applicable
                    to the conduct of our business activities.
                  </p>
                </li>
                <li>
                  <strong>Senior Management Responsibility</strong>
                  <p className="mt-1 ml-5">
                    The senior management shall bear primary responsibility for
                    ensuring adherence to appropriate standards of conduct and
                    procedures.
                  </p>
                </li>
              </ol>
            </section>

            <section className="mb-6 space-y-3">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <ul className="list-none space-y-1 text-base-content/90 leading-relaxed">
                <li>
                  <strong>Name:</strong> Hedgium Services LLP
                </li>
                <li>
                  <strong>SEBI Registration No.:</strong> INH000025258
                </li>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:clients@hedgium.ai">clients@hedgium.ai</a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://hedgium.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hedgium.ai
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> 101, Plot No. 20, Sector 42-A,
                  Seawoods, Nerul, Navi Mumbai - 400706
                </li>
              </ul>
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
