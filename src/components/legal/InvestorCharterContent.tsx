"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocIdPrefix, LegalDocVariant } from "@/components/legal/types";

const SEBI_PHYSICAL_ADDRESS = `Office of Investor Assistance and Education,
Securities and Exchange Board of India,
SEBI Bhavan, Plot No. C4-A, 'G' Block,
Bandra-Kurla Complex, Bandra (E),
Mumbai - 400 051`;

export default function InvestorCharterPage({
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
                  "Investor Charter"
                )}
                <p className="text-sm text-base-content/90 mt-1">
                  SEBI Registered Research Analyst – INH000025258
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={`#${idPrefix}printable`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                  className="btn btn-ghost btn-sm"
                  title="Print investor charter"
                  aria-label="Print investor charter"
                >
                  Print
                </a>
              </div>
            </header>

            <div className="divider my-0" />

            <article
              id={`${idPrefix}printable`}
              className="prose prose-sm md:prose-md max-w-none"
            >
            

              <h2 className="text-lg font-bold underline decoration-2 underline-offset-2">
                A. Vision and Mission Statements for investors
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Vision:</strong> Invest with knowledge &amp; safety.
                </li>
                <li>
                  <strong>Mission:</strong> Every investor should be able to
                  invest in right investment products based on their needs,
                  manage and monitor them to meet their goals, access reports
                  and enjoy financial wellness.
                </li>
              </ul>

              <h2 className="text-lg font-bold underline decoration-2 underline-offset-2 mt-8">
                B. Details of business transacted by the Research Analyst with
                respect to the investors
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  To publish research report based on the research activities of
                  the RA
                </li>
                <li>To provide an independent unbiased view on securities.</li>
                <li>
                  To offer unbiased recommendation, disclosing the financial
                  interests in recommended securities.
                </li>
                <li>
                  To provide research recommendation, based on analysis of
                  publicly available information and known observations.
                </li>
                <li>To conduct audit annually</li>
                <li>
                  To ensure that all advertisements are in adherence to the
                  provisions of the Advertisement Code for Research Analysts.
                </li>
                <li>
                  To maintain records of interactions, with all clients
                  including prospective clients (prior to onboarding), where
                  any conversation related to the research services has taken
                  place.
                </li>
              </ul>

              <h2 className="text-lg font-bold underline decoration-2 underline-offset-2 mt-8">
                C. Details of services provided to investors (No Indicative
                Timelines)
              </h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Onboarding of Clients</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li>Sharing of terms and conditions of research services</li>
                    <li>Completing KYC of fee paying clients</li>
                  </ul>
                </li>
                <li>
                  <strong>Disclosure to Clients:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li>
                      To disclose, information that is material for the client
                      to make an informed decision, including details of its
                      business activity, disciplinary history, the terms and
                      conditions of research services, details of associates,
                      risks and conflicts of interest, if any
                    </li>
                    <li>
                      To disclose the extent of use of Artificial Intelligence
                      tools in providing research services
                    </li>
                    <li>
                      To disclose, while distributing a third party research
                      report, any material conflict of interest of such third
                      party research provider or provide web address that
                      directs a recipient to the relevant disclosures
                    </li>
                    <li>
                      To disclose any conflict of interest of the activities of
                      providing research services with other activities of the
                      research analyst.
                    </li>
                  </ul>
                </li>
                <li>
                  To distribute research reports and recommendations to the
                  clients without discrimination.
                </li>
                <li>
                  To maintain confidentiality w.r.t publication of the research
                  report until made available in the public domain.
                </li>
                <li>
                  To respect data privacy rights of clients and take measures to
                  protect unauthorized use of their confidential information
                </li>
                <li>
                  To disclose the timelines for the services provided by the
                  research analyst to clients and ensure adherence to the said
                  timelines
                </li>
                <li>
                  To provide clear guidance and adequate caution notice to
                  clients when providing recommendations for dealing in complex
                  and high-risk financial products/services
                </li>
                <li>To treat all clients with honesty and integrity</li>
                <li>
                  To ensure confidentiality of information shared by clients
                  unless such information is required to be provided in
                  furtherance of discharging legal obligations or a client has
                  provided specific consent to share such information.
                </li>
              </ul>


              <h2 className="text-lg font-bold underline decoration-2 underline-offset-2">
                D. Details of grievance redressal mechanism and how to access it
              </h2>

              <p className="font-semibold">
                1. Investor can lodge complaint/grievance against Research
                Analyst in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <strong>Mode of filing the complaint with research analyst:</strong>{" "}
                  In case of any grievance / complaint, an investor may approach
                  the concerned Research Analyst who shall strive to redress the
                  grievance immediately, but not later than 21 days of the
                  receipt of the grievance.
                </li>
                <li>
                  <strong>
                    Mode of filing the complaint on SCORES or with Research
                    Analyst Administration and Supervisory Body (RAASB):
                  </strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                    <li>
                      <strong>i. SCORES 2.0</strong> (a web based centralized
                      grievance redressal system of SEBI for facilitating
                      effective grievance redressal in time-bound manner) (
                      <a
                        href="https://scores.sebi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary"
                      >
                        https://scores.sebi.gov.in
                      </a>
                      )
                    </li>
                    <li>
                      <strong>
                        Two level review for complaint/grievance against
                        Research Analyst:
                      </strong>
                      <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                        <li>First review done by designated body (RAASB)</li>
                        <li>Second review done by SEBI</li>
                      </ul>
                    </li>
                    <li>
                      <strong>ii. Email to designated email ID of RAASB</strong>
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                <strong>2.</strong> If the Investor is not satisfied with the
                resolution provided by the Market Participants, then the Investor
                has the option to file the complaint/ grievance on SMARTODR
                platform for its resolution through online conciliation or
                arbitration.
              </p>

              <p className="font-semibold mt-6">Physical complaint address:</p>
              <p className="whitespace-pre-line text-base-content/90">
                With regard to physical complaints, investors may send their
                complaints to:
                <br />
                <br />
                {SEBI_PHYSICAL_ADDRESS}
              </p>

              <h2 className="text-lg font-bold underline decoration-2 underline-offset-2 mt-10">
                E. Rights of investors
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Right to Privacy and Confidentiality</li>
                <li>Right to Transparent Practices</li>
                <li>Right to fair and Equitable Treatment</li>
                <li>Right to Adequate Information</li>
                <li>
                  Right to Initial and Continuing Disclosure - Right to receive
                  information about all the statutory and regulatory disclosures
                </li>
                <li>Right to Fair &amp; True Advertisement</li>
                <li>
                  Right to Awareness about Service Parameters and Turnaround
                  Times
                </li>
                <li>Right to be informed of the timelines for each service</li>
                <li>
                  Right to be Heard and Satisfactory Grievance Redressal
                </li>
                <li>Right to have timely redressal</li>
                <li>
                  Right to Exit from Financial product or service in accordance
                  with the terms and conditions agreed with the research analyst
                </li>
                <li>
                  Right to receive clear guidance and caution notice when
                  dealing in Complex and High-Risk Financial Products and Services
                </li>
                <li>
                  Additional Rights to vulnerable consumers - Right to get
                  access to services in a suitable manner even if differently
                  abled
                </li>
                <li>
                  Right to provide feedback on the financial products and
                  services used
                </li>
                <li>
                  Right against coercive, unfair, and one-sided clauses in
                  financial agreements
                </li>
              </ul>

              <h2 className="text-lg font-bold underline decoration-2 underline-offset-2">
                F. Expectations from the investors (Responsibilities of
                investors)
              </h2>

              <h3 className="text-base font-bold underline decoration-1 underline-offset-2 mt-6 not-prose">
                Do&apos;s
              </h3>
              <ol className="[list-style-type:lower-roman] list-inside space-y-4 mt-3">
                <li>
                  Always deal with SEBI registered Research Analyst.
                </li>
                <li>
                  Ensure that the Research Analyst has a valid registration
                  certificate.
                </li>
                <li>
                  Check for SEBI registration number.
                  <p className="mt-2 text-base-content/90 pl-0 md:pl-6">
                    Please refer to the list of all SEBI registered Research
                    Analyst which is available on SEBI website in the following
                    link:{" "}
                    <a
                      href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary break-all"
                    >
                      https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
                    </a>
                  </p>
                </li>
                <li>
                  Always pay attention towards disclosures made in the research
                  reports before investing.
                </li>
                <li>
                  Pay your Research Analyst through banking channels only and
                  maintain duly signed receipts mentioning the details of your
                  payments.
                  <p className="mt-2 text-sm text-base-content/90 pl-0 md:pl-6">
                    <strong>Note:</strong> You may make payment of fees through
                    Centralized Fee Collection Mechanism (CeFCoM) of RAASB if
                    research analyst has opted for the mechanism. (Applicable for
                    fee paying clients only)
                  </p>
                </li>
                <li>
                  Before buying/ selling securities or applying in public offer,
                  check for the research recommendation provided by your Research
                  Analyst.
                </li>
                <li>
                  Ask all relevant questions and clear your doubts with your
                  Research Analyst before acting on recommendation.
                </li>
                <li>
                  Seek clarifications and guidance on research recommendations
                  from your Research Analyst, especially if it involves complex
                  and high risk financial products and services.
                </li>
                <li>
                  Always be aware that you have the right to stop availing the
                  service of a Research Analyst as per the terms of service agreed
                  between you and your Research Analyst.
                </li>
                <li>
                  Always be aware that you have the right to provide feedback to
                  your Research Analyst in respect of the services received.
                </li>
                <li>
                  Always be aware that you will not be bound by any clause,
                  prescribed by the research analyst, which is contravening any
                  regulatory provisions.
                </li>
                <li>
                  Inform SEBI about Research Analyst offering assured or
                  guaranteed returns.
                </li>
              </ol>

              <h3 className="text-base font-bold underline decoration-1 underline-offset-2 mt-10 not-prose">
                Don&apos;ts
              </h3>
              <ol className="[list-style-type:lower-roman] list-inside space-y-4 mt-3">
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>
                  Don&apos;t fall prey to luring advertisements or market rumors.
                </li>
                <li>
                  Do not get attracted to limited period discount or other
                  incentive, gifts, etc. offered by Research Analyst.
                </li>
                <li>
                  Do not share login credential and password of your trading,
                  demat or bank accounts with the Research Analyst.
                </li>
              </ol>
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
