export default function PerformanceSection() {
  return (
    <section className="bg-primary text-primary-content">
      <div className="max-w-8xl mx-auto px-4 lg:px-8 xl:px-16 py-16 lg:py-24">

        {/* Heading */}
        <div className="mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug">
            Make volatility work for you,{" "}
            <span className="text-secondary">
              rather against you
            </span>
          </h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-primary-content mt-2">
              Hedgium’s prop account performance using the two-engine framework
              post market top in December 2025
          </p>
        </div>

        {/* Table Wrapper */}
        <div className="relative rounded-xl border-2 border-primary-content/55">

          {/* ✅ Centered Badge on Border */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="rounded-md border-2 border-primary-content/55 bg-primary px-4 py-1 text-sm">
              Dec’25 to Mar’26#
            </span>
          </div>

          {/* Table */}
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
                  <td className="text-center text-error">NA</td>
                  <td className="text-center text-error">NA</td>
                </tr>

                {/* Divider
                <tr>
                  <td colSpan={5} className="p-0">
                    <div className="border-t border border-primary-content/20 my-2"></div>
                  </td>
                </tr> */}

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

        {/* Footnotes */}
        <div className="mt-6 space-y-1 text-xs text-primary-content">
          <p>* Average multi-cap equity mutual funds performance (trailing 3M). Source: valueresearchonline.com</p>
          <p>Disclaimer: Past performance is not indicative of future returns</p>
        </div>

      </div>
    </section>
  );
}