"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocIdPrefix, LegalDocVariant } from "@/components/legal/types";

export default function RefundPolicyPage({
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
                  "Refund / Cancellation Policy"
                )}
                <p className="text-sm text-base-content/90 mt-1">
                  Last updated:{" "}
                  <time dateTime="2025-03-17">March 17, 2025</time>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-ghost btn-sm"
                  aria-label="Print refund policy"
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
              <section className="mb-6">
                <p className="text-base-content/90 leading-relaxed">
                  We value transparency and fairness in all our client
                  relationships. If a client decides to discontinue their
                  services before the completion of the current billing cycle,
                  they will be eligible for a pro-rata refund, apart from the
                  quarters used and the ongoing quarter. In other words, the
                  refund will be calculated based on the unused quarters of the
                  service period.
                </p>
                <p className="text-base-content/90 leading-relaxed mt-4">
                  Please note that any applicable taxes or statutory fees will be
                  deducted from the refundable amount. Once approved, the
                  eligible refund amount will be processed within 7–10 working
                  days in accordance with our standard procedures. Our goal is
                  to ensure a smooth and equitable process for all service
                  terminations initiated by clients or us.
                </p>
              </section>

              <section className="pt-6 border-t border-base-300">
                <h2 className="text-lg font-semibold mb-3">Contact</h2>
                <p className="text-sm text-base-content/90">
                  For any queries regarding refunds or cancellations, please
                  contact us at{" "}
                  <a
                    href="mailto:clients@hedgium.ai"
                    className="link link-primary"
                  >
                    clients@hedgium.ai
                  </a>
                  .
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
