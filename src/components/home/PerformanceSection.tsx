const LONG_TERM_ROWS = [
  {
    label: "Hedgium Strategies - (Engine 2)",
    fy24: "+12.7%",
    fy25: "+13.0%",
    fy26: "+11.9%",
    cagr: "+12.5%",
  },
  {
    label: "Liquid Funds (Engine-1) [assumed allocation]*",
    fy24: "+7.0%",
    fy25: "+7.0%",
    fy26: "+7.0%",
    cagr: "+7.0%",
  },
] as const;

const thBase =
  "p-2 md:p-3 text-center text-primary-content font-medium border border-primary-content/40";
const tdBase =
  "p-2 md:p-3 text-center border border-primary-content/40 tabular-nums";

export default function PerformanceSection() {
  return (
    <section className="bg-primary text-primary-content">
      <div className="max-w-8xl mx-auto px-4 lg:px-8 xl:px-16 py-16 lg:py-24">

        {/* Heading — recent prop performance */}
        <div className="mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug">
            Make volatility work for you,{" "}
            <span className="text-secondary-on-primary">
              rather against you
            </span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-primary-content mt-2">
            Hedgium’s prop account performance using the two-engine framework
            post market top in December 2025
          </p>
        </div>

        {/* Table — Dec’25 to Mar’26 */}
        <div className="relative rounded-xl border-2 border-primary-content/55">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="rounded-md border-2 border-primary-content/55 bg-primary px-4 py-1 text-sm">
              Dec’25 to Mar’26#
            </span>
          </div>

          <div
            className="mt-4 overflow-x-auto p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary-content focus-visible:ring-offset-2 focus-visible:ring-offset-primary lg:mt-4 lg:p-8 xl:mt-6 xl:p-10"
            role="region"
            aria-label="Hedgium performance versus benchmarks"
            tabIndex={0}
          >
            <table className="table w-full text-sm md:text-base border-separate border-spacing-0">
              <caption className="sr-only">
                Prop account performance for portfolio layer, trading layer, and total return compared to Nifty and average equity mutual funds.
              </caption>

              <thead>
                <tr>
                  <th scope="col" className="min-w-[220px] lg:min-w-[280px] xl:min-w-[300px] p-2">
                    <span className="sr-only">Portfolio layer</span>
                  </th>
                  <th scope="col" className="rounded-tl-xl border-l-2 border-t-2 border-dashed border-primary-content/60 text-center text-primary-content">
                    Hedgium
                  </th>
                  <th scope="col" className="rounded-tr-xl border-r-2 border-t-2 border-dashed border-primary-content/60 text-center text-primary-content">
                    Alpha/ Outperformance
                  </th>
                  <th scope="col" className="text-center text-primary-content">Benchmark Return (NIFTY)</th>
                  <th scope="col" className="text-center text-primary-content">Equity Mutual Funds (Avg.)*</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row" className="text-primary-content min-w-[220px] lg:min-w-[280px] xl:min-w-[300px] font-normal text-left align-top">
                    Portfolio Layer (Engine 1):-
                  </th>
                  <td className="border-l-2 border-dashed border-primary-content/60 text-center">-3.9%</td>
                  <td className="border-r-2 border-dashed border-primary-content/60 text-center font-medium">+7.8% / +5.3%</td>
                  <td className="text-center text-primary-content">-11.7%</td>
                  <td className="text-center text-primary-content">-9.2%</td>
                </tr>

                <tr>
                  <th scope="row" className="text-primary-content min-w-[200px] lg:min-w-[260px] xl:min-w-[280px] font-normal text-left align-top">
                    Trading Layer (Engine 2):-
                  </th>
                  <td className="border-l-2 border-dashed border-primary-content/60 text-center">+4.5%</td>
                  <td className="border-r-2 border-dashed border-primary-content/60 text-center font-medium">+4.5% / +4.5%</td>
                  <td
                    className="text-center text-primary-content italic"
                    title="Not applicable"
                    aria-label="Not applicable"
                  >
                    NA
                  </td>
                  <td
                    className="text-center text-primary-content italic"
                    title="Not applicable"
                    aria-label="Not applicable"
                  >
                    NA
                  </td>
                </tr>

                <tr className="font-semibold">
                  <th scope="row" className="text-primary-content min-w-[200px] lg:min-w-[260px] xl:min-w-[280px] font-semibold text-left align-top">TOTAL Return (1+2):-</th>
                  <td className="rounded-bl-xl border-b-2 border-l-2 border-dashed border-primary-content/60 text-center">+0.6%</td>
                  <td className="rounded-br-xl border-b-2 border-r-2 border-dashed border-primary-content/60 text-center font-medium">+12.3% / +9.8%</td>
                  <td className="text-center text-primary-content">-11.7%</td>
                  <td className="text-center text-primary-content">-9.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 space-y-1 text-xs text-primary-content">
          <p>* Average multi-cap equity mutual funds performance (trailing 3M). Source: valueresearchonline.com</p>
          <p>Disclaimer: Past performance is not indicative of future returns</p>
        </div>

        {/* Long-term strategy performance */}
        <div className="mt-20 lg:mt-28">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-secondary-on-primary uppercase mb-3">
            Beating volatility
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug">
            And we have been delivering for quite a while
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-primary-content italic mt-2">
            Apr 1, 2023 – 31 Mar 2026 · Strategy performance
          </p>

          <div className="relative mt-10 lg:mt-12 rounded-xl border-2 border-primary-content/55">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-md border-2 border-primary-content/55 bg-primary px-4 py-1 text-sm whitespace-nowrap">
                Apr &apos;23 – Mar &apos;26
              </span>
            </div>

            <div
              className="mt-4 overflow-x-auto p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary-content focus-visible:ring-offset-2 focus-visible:ring-offset-primary lg:p-8 xl:p-10"
              role="region"
              aria-label="Hedgium strategy performance by fiscal year"
              tabIndex={0}
            >
              <table className="w-full min-w-[640px] text-sm md:text-base border-collapse">
                <caption className="sr-only">
                  Hedgium Engine 2, Liquid Funds Engine 1, and combined total return for FY24 through FY26 with CAGR.
                </caption>

                <thead>
                  <tr>
                    <th
                      scope="col"
                      className={`${thBase} text-left bg-primary-content/15 min-w-[200px] lg:min-w-[260px]`}
                    >
                      Period Apr &apos;23 – Mar &apos;26
                    </th>
                    <th scope="col" className={`${thBase} bg-primary-content/10`}>
                      FY24
                    </th>
                    <th scope="col" className={`${thBase} bg-primary-content/10`}>
                      FY25
                    </th>
                    <th scope="col" className={`${thBase} bg-primary-content/10`}>
                      FY26
                    </th>
                    <th scope="col" className={`${thBase} bg-primary-content/20`}>
                      CAGR
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {LONG_TERM_ROWS.map((row) => (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className={`${tdBase} text-left font-normal text-primary-content`}
                      >
                        {row.label}
                      </th>
                      <td className={tdBase}>{row.fy24}</td>
                      <td className={tdBase}>{row.fy25}</td>
                      <td className={tdBase}>{row.fy26}</td>
                      <td className={`${tdBase} font-semibold text-positive-on-primary`}>
                        {row.cagr}
                      </td>
                    </tr>
                  ))}

                  <tr className="font-semibold">
                    <th
                      scope="row"
                      className={`${tdBase} text-left text-primary-content`}
                    >
                      TOTAL RETURN (1 + 2) [assuming Engine-1 100% Liquid Funds]
                    </th>
                    <td className={`${tdBase} text-secondary-on-primary`}>+19.7%</td>
                    <td className={`${tdBase} text-secondary-on-primary`}>+20.0%</td>
                    <td className={`${tdBase} text-secondary-on-primary`}>+18.9%</td>
                    <td className={`${tdBase} font-semibold text-positive-on-primary`}>+19.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-xs text-primary-content">
            <p>
              *Engine-1 or Portfolio construction is assumed here to be 100% allocated to Liquid Funds, and thus will vary in case of a different allocation
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
