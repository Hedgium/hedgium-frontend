import Link from "next/link";
import OpensInNewTabHint from "@/components/OpensInNewTabHint";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-8xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <img
              src="/images/logos_darkmode/Hedgium stacked darkmode.png"
              alt="Hedgium"
              className="w-24"
            />

            <p className="max-w-md text-sm leading-relaxed text-white">
              Quant-driven research house focused on generating market-neutral
              alpha using the Twin Engine Investing framework.
            </p>

            <div className="space-y-1 text-xs text-white">
              <p>Registered Entity Name: Hedgium Services LLP</p>
              <p>LLP Identification Number: ACQ-3740 </p>
            </div>
          </div>

          {/* Navigate */}
          {/* <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-content/50">
              Navigate
            </span>

            {[
              { label: "What We Do", href: "/#what-we-do" },
              { label: "Unlock Potential", href: "/#unlock-potential" },
              { label: "Why Hedgium", href: "/#why-hedgium" },
              { label: "Fees", href: "/#pricing" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-white transition hover:underline"
              >
                {label}
              </Link>
            ))}
          </div> */}

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">
              Legal
            </h2>

            <Link
              href="/legal-complaints-investor-charter#terms-of-use"
              className="text-sm text-white transition hover:underline"
            >
              Terms of Use
            </Link>

            <Link
              href="/legal-complaints-investor-charter#privacy-policy"
              className="text-sm text-white transition hover:underline"
            >
              Privacy Policy
            </Link>

            <Link
              href="/legal-complaints-investor-charter#complaint-status"
              className="text-sm text-white transition hover:underline"
            >
              Complaint Status
            </Link>


            <Link
              href="/legal-complaints-investor-charter#grievance-redressal"
              className="text-sm text-white transition hover:underline"
            >
              Grievance Redressal
            </Link>
            

            <Link
              href="/legal-complaints-investor-charter#refund-policy"
              className="text-sm text-white transition hover:underline"
            >
              Refund Policy
            </Link>

            <Link
              href="/legal-complaints-investor-charter#mitc-ra"
              className="text-sm text-white transition hover:underline"
            >
              MITC-RA
            </Link>

            <Link
              href="/legal-complaints-investor-charter#investor-charter"
              className="text-sm text-white transition hover:underline"
            >
              Investor Charter
            </Link>

          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white">
              Contact
            </h2>

            <a
              href="mailto:clients@hedgium.ai"
              className="text-sm text-white transition hover:underline"
            >
              clients@hedgium.ai
            </a>

            <a
              href={`tel:+91${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              className="text-sm text-white transition hover:underline"
            >
              +91 {process.env.NEXT_PUBLIC_PHONE_NUMBER}
            </a>

            <a
              href="https://www.hedgium.ai"
              className="text-sm text-white transition hover:underline"
            >
              www.hedgium.ai
            </a>
          </div>
        </div>


        {/* Divider */}
        <div className="border-t border-neutral-content/20 my-12"></div>


        {/* RA Info */}
        <div className="grid gap-10 text-sm text-white md:grid-cols-2">

          <div className="space-y-4">
            <h3 className="font-semibold text-white">
              Research Analyst (RA)
            </h3>

            <p>SEBI Registration No: INH000025258</p>

            <div>
              <p className="font-medium text-white">
                Principal Officer
              </p>
              <p>Kamlesh Ramchandani</p>
              <p>
                <a
                  href="mailto:kamlesh.ramchandani@hedgium.in"
                  className="underline hover:text-neutral-content"
                >
                  kamlesh.ramchandani@hedgium.in
                </a>
              </p>
              <p>8454838304</p>
            </div>

            <div>
              <p className="font-medium text-white">
                Compliance Officer
              </p>
              <p>Aerik Wadhwani</p>
              <p>
                <a
                  href="mailto:compliance@hedgium.in"
                  className="underline hover:text-neutral-content"
                >
                  compliance@hedgium.in
                </a>
              </p>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="font-semibold text-white">
              SEBI Correspondence Office
            </h3>

            <p>
              Securities and Exchange Board of India  
              SEBI Bhavan II, Plot No: C7, “G” Block,  
              Bandra Kurla Complex, Bandra (East),  
              Mumbai – 400051
            </p>

            <div className="flex gap-4">
              <a
                href="https://scores.sebi.gov.in/scores-home"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-content"
              >
                SEBI SCORES
                <OpensInNewTabHint />
              </a>

              <a
                href="https://smartodr.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-content"
              >
                SMARTODR
                <OpensInNewTabHint />
              </a>
            </div>
          </div>

        </div>


        {/* Disclaimers */}
        <div className="mt-10 space-y-3 text-xs text-white">
          <h3 className="font-semibold text-white">
            Disclaimers
          </h3>

          <ul className="space-y-2 list-disc list-inside">
            <li>
              Registration granted by SEBI and certification from NISM does not
              guarantee performance or assure returns.
            </li>

            <li>
              Investments in securities markets are subject to market risks.
              Read all related documents carefully before investing.
            </li>

            <li>
              Past performance may or may not be sustained in the future.
            </li>

            <li>
              All payments must be made only to the Company’s designated bank
              account. The Company is not responsible for payments made to
              individuals.
            </li>
          </ul>
        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-content/20 pt-6 text-xs text-white md:flex-row">

          <p>© {new Date().getFullYear()} Hedgium. All rights reserved.</p>


        </div>
      </div>
    </footer>
  );
}