"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsOfUsePage from "@/components/legal/TermsOfUseContent";
import PrivacyPolicyPage from "@/components/legal/PrivacyPolicyContent";
import RefundPolicyPage from "@/components/legal/RefundPolicyContent";
import ComplaintStatusPage from "@/components/legal/ComplaintStatusContent";
import GrievanceRedressalPage from "@/components/legal/GrievanceRedressalContent";
import MitcRaPage from "@/components/legal/MitcRaContent";
import InvestorCharterPage from "@/components/legal/InvestorCharterContent";

export default function LegalComplaintsInvestorCharterPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body gap-6">
            <header>
              <h1 className="text-2xl md:text-3xl font-bold">
                Legal, Complaints & Investor Charter
              </h1>
              <p className="text-sm text-base-content/90 mt-2">
                Consolidated static disclosures and investor documents.
              </p>
            </header>

            <div className="divider my-0" />

            <nav className="flex flex-wrap gap-2" aria-label="Document sections">
              <a href="#terms-of-use" className="btn btn-sm btn-outline">Terms of Use</a>
              <a href="#privacy-policy" className="btn btn-sm btn-outline">Privacy Policy</a>
              <a href="#refund-policy" className="btn btn-sm btn-outline">Refund Policy</a>
              <a href="#complaint-status" className="btn btn-sm btn-outline">Complaint Status</a>
              <a href="#grievance-redressal" className="btn btn-sm btn-outline">Grievance Redressal</a>
              <a href="#mitc-ra" className="btn btn-sm btn-outline">MITC-RA</a>
              <a href="#investor-charter" className="btn btn-sm btn-outline">Investor Charter</a>
            </nav>

            <article className="space-y-6">
              <section id="terms-of-use" className="scroll-mt-24 border border-base-300 rounded-xl">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <TermsOfUsePage variant="embedded" />
                </div>
              </section>

              <section id="privacy-policy" className="scroll-mt-24 border border-base-300 rounded-xl">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <PrivacyPolicyPage variant="embedded" />
                </div>
              </section>

              <section id="refund-policy" className="scroll-mt-24 border border-base-300 rounded-xl">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <RefundPolicyPage variant="embedded" />
                </div>
              </section>

              <section id="complaint-status" className="scroll-mt-24 border border-base-300 rounded-xl">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <ComplaintStatusPage variant="embedded" />
                </div>
              </section>

              <section id="grievance-redressal" className="scroll-mt-24 border border-base-300 rounded-xl">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <GrievanceRedressalPage variant="embedded" />
                </div>
              </section>

              <section id="mitc-ra" className="scroll-mt-24 border border-base-300 rounded-xl p-4 md:p-5">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <MitcRaPage variant="embedded" />
                </div>
              </section>

              <section id="investor-charter" className="scroll-mt-24 border border-base-300 rounded-xl">
                <div className="mt-3 [&>nav]:hidden [&>footer]:hidden">
                  <InvestorCharterPage variant="embedded" />
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
