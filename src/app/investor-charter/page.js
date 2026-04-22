"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SEBI_PHYSICAL_ADDRESS = `Office of Investor Assistance and Education,
Securities and Exchange Board of India,
SEBI Bhavan, Plot No. C4-A, 'G' Block,
Bandra-Kurla Complex, Bandra (E),
Mumbai - 400 051`;

export default function InvestorCharterPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body gap-4">
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Investor Charter
                </h1>
                <p className="text-sm text-base-content/60 mt-1">
                  SEBI Registered Research Analyst – INH000025258
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href="#printable"
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                  className="btn btn-ghost btn-sm"
                  title="Print investor charter"
                >
                  Print
                </a>
              </div>
            </header>

            <div className="divider my-0" />

            <article
              id="printable"
              className="prose prose-sm md:prose-md max-w-none"
            >
              <div className="bg-primary text-primary-content text-center font-semibold py-3 px-4 rounded-lg mb-6 not-prose">
                Investor Charter - 1
              </div>

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

              <div className="bg-primary text-primary-content text-center font-semibold py-3 px-4 rounded-lg my-10 not-prose">
                Investor Charter - 2
              </div>

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
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
