'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const UNLOCK_STEPS = [
  { label: 'The Gap', id: 'gap' },
  { label: 'The Opportunity', id: 'opportunity' },
  { label: 'The How', id: 'how' },
] as const;

function StepContent({ stepIndex }: { stepIndex: number }) {
  if (stepIndex === 0) {
    return (
      <div className="space-y-3 rounded-xl">
        <h3 className="text-primary text-lg lg:text-xl text-base-content">
          Most Portfolios are -
        </h3>
        <ul className="space-y-2 text-base lg:text-lg">
          {[
            'Long Only (buy and hold)',
            'Directionally exposed',
            'Correlated with broader markets',
            'Have nil/ underutilization of hedged derivatives',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary shrink-0" aria-hidden />
              <span className="font-medium text-base-content">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base font-medium lg:text-lg text-base-content">
          <strong>Forgone opportunity:</strong> Non-directional options led returns
          which could generate additional income at the portfolio level
        </p>
      </div>
    );
  }
  if (stepIndex === 1) {
    return (
      <div className="space-y-3">
        <h3 className="text-primary text-lg lg:text-xl text-base-content">
          Markets sometimes exhibit inefficiencies for a very short period, due to
          variety of factors -
        </h3>
        <ul className="space-y-2 text-base lg:text-lg">
          {[
            'Overreaction to news/ Behavioural inefficiencies',
            'Volatility mispricing/ Volatility clustering',
            'Forced expiry positioning',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-3 h-3 rotate-45 bg-secondary shrink-0" aria-hidden />
              <span className="font-medium text-base-content">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base lg:text-lg font-semibold text-base-content">
          Thus, presenting the opportunity to take advantage of these in real-time
          to generate non-correlated additional returns
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <h3 className="text-primary text-lg lg:text-xl text-base-content">
        By deploying quantitative, high-frequency, non-directional statistical
        arbitrage strategies that -
      </h3>
      <ul className="space-y-2 text-base lg:text-lg">
        {[
          'Capture and adapt to opportunities in real-time using our advanced algorithms',
          'Are self-adjusting to evolving price levels',
          'Are hedged to protect downside in case of any unanticipated wild movements',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-secondary mt-0.5" aria-hidden />
            <span className="text-base-content">{item}</span>
          </li>
        ))}
      </ul>
        <p className="text-base lg:text-lg font-semibold text-base-content">
          With the goal to boost portfolio risk-adjusted returns and outperform
          market benchmarks in a variety of conditions, irrespective of market
          direction
        </p>
    </div>
  );
}

export default function UnlockPotentialSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="unlock-potential">
      <div className="bg-primary text-primary-content py-6 ">
        <div className="max-w-8xl mx-auto px-4 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-duration="650"
            data-aos-once="true"
          >
            <h2 className="text-2xl md:w-3/4 md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold leading-snug text-primary-content">
              Unlock incremental Alpha,{' '}
              by exploiting market inefficiencies, using Hedgium&apos;s platform
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-12 md:py-24">
        <div className="max-w-8xl mx-auto  px-4 lg:px-8">
          {/* Mobile: stacked layout – each step as a block */}
          <div
            className="flex flex-col gap-6 lg:hidden"
            data-aos="fade-up"
            data-aos-duration="650"
            data-aos-once="true"
          >
            {UNLOCK_STEPS.map((step, i) => (
              <div
                key={step.id}
                className="border border-dashed border-2 border-primary/50 rounded-lg p-5 bg-base-100"
              >
                <h3 className="font-bold text-xl text-primary mb-4 pb-2 border-b border-base-300">
                  {step.label}
                </h3>
                <StepContent stepIndex={i} />
              </div>
            ))}
          </div>

          {/* Desktop: tabs + content */}
<div className="hidden lg:flex flex-row items-center">
  
  {/* Left column – step buttons */}
  <div
    className="lg:w-[40%] flex flex-col justify-center"
    role="tablist"
    aria-label="Steps to unlock potential"
    aria-orientation="vertical"
  >
    {UNLOCK_STEPS.map((step, i) => {
      const isActive = activeStep === i;
      const tabId = `unlock-tab-${step.id}`;
      const focusSiblingTab = (next: number) => {
        const clamped = Math.max(0, Math.min(UNLOCK_STEPS.length - 1, next));
        setActiveStep(clamped);
        const el = document.getElementById(`unlock-tab-${UNLOCK_STEPS[clamped].id}`);
        window.requestAnimationFrame(() => el?.focus());
      };
      return (
        <div key={step.id} className="flex flex-col" role="presentation">
          <div className="flex items-center w-full" role="presentation">
            <button
              type="button"
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={`unlock-panel-${step.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveStep(i)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                  e.preventDefault();
                  if (i < UNLOCK_STEPS.length - 1) focusSiblingTab(i + 1);
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                  e.preventDefault();
                  if (i > 0) focusSiblingTab(i - 1);
                } else if (e.key === 'Home') {
                  e.preventDefault();
                  focusSiblingTab(0);
                } else if (e.key === 'End') {
                  e.preventDefault();
                  focusSiblingTab(UNLOCK_STEPS.length - 1);
                }
              }}
              className={`flex-1 min-w-0 cursor-pointer text-left px-5 py-4 font-bold text-lg flex items-center justify-between transition-all shadow-sm active:scale-[0.98] ${
                isActive
                  ? 'bg-primary text-primary-content'
                  : 'bg-neutral/50 hover:bg-neutral/70 hover:text-primary text-base-content'
              }`}
            >
              <span className="text-2xl">{step.label}</span>
              <span className="font-bold text-xl" aria-hidden>&gt;</span>
            </button>

            <div
              className={`border-t-2 border-dashed border-primary/50 w-16 xl:w-24 shrink-0 transition-opacity ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {i < UNLOCK_STEPS.length - 1 && (
            <div
              className="w-3/4 -translate-x-6 lg:-translate-x-8 xl:-translate-x-12 mx-auto mt-0.5 h-10"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backgroundColor: isActive
                  ? 'oklch(0.72 0.15 264 / 0.55)'
                  : 'oklch(0.72 0.05 264 / 0.40)',
              }}
            />
          )}
        </div>
      );
    })}
  </div>

  {/* Right column – fixed height + centered content */}
  <div className="lg:w-[60%] w-full">
    <div
      id={`unlock-panel-${UNLOCK_STEPS[activeStep].id}`}
      role="tabpanel"
      aria-labelledby={`unlock-tab-${UNLOCK_STEPS[activeStep].id}`}
      tabIndex={0}
      className="border border-dashed border-2 border-primary/50 rounded-xl bg-base-200 p-6 
                    min-h-[360px] lg:min-h-[420px] 
                    flex items-center justify-center outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >

      {/* Inner wrapper keeps content nicely centered */}
      <div className="w-full max-w-2xl">
        <StepContent stepIndex={activeStep} />
      </div>

    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}