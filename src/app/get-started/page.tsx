"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MessageCircle, Loader2, ChevronLeft, Shield, Home } from "lucide-react";
import { myFetch } from "@/utils/api";
import useAlert from "@/hooks/useAlert";
import { TIME_OPTIONS_15MIN } from "@/utils/timeOptions";
import OpensInNewTabHint from "@/components/OpensInNewTabHint";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const DEFAULT_MESSAGE = "Hi, I'm interested in Hedgium. I'd like to schedule a call or learn more.";

const INVESTMENT_OPTIONS = [
  { value: "below_25l", label: "Below ₹25 Lakhs" },
  { value: "25l_75l", label: "₹25 to ₹75 Lakhs" },
  { value: "75l_2cr", label: "₹75 Lakhs to ₹2 Cr" },
  { value: "2cr_plus", label: "₹2 Cr+" },
] as const;

const BELOW_25L_VALUE = "below_25l";

const FIELD_MOBILE = "get-started-mobile";
const FIELD_NAME = "get-started-name";
const FIELD_SOURCE = "get-started-source";
const FIELD_SOURCE_LABEL = "Where did you hear about us? (optional)";
const FIELD_MEETING_DATE = "get-started-meeting-date";
const FIELD_MEETING_TIME = "get-started-meeting-time";
const FIELD_MEETING_TIME_LABEL = "Time";
const FIELD_FORM_ERROR = "get-started-form-error";
const STEP2_HEADING = "get-started-step2-heading";
const STEP3_MEET_HEADING = "get-started-step3-meet-heading";

const VALID_SOURCES = ["website", "ads", "social_media", "direct_contact", "other"] as const;
const SOURCE_OPTIONS: { value: typeof VALID_SOURCES[number]; label: string }[] = [
  { value: "website", label: "Website" },
  { value: "ads", label: "Ads" },
  { value: "social_media", label: "Social media" },
  { value: "direct_contact", label: "Direct contact" },
  { value: "other", label: "Other" },
];

/** Left-panel content per step: quotation (step 1), testimonial (step 2), guide (step 3), or after submit */
function getLeftPanelContent(step: number, submitted: boolean, investmentValue?: string): React.ReactNode {
  const wrapper = (children: React.ReactNode) => (
    <div className="flex flex-col items-center justify-center p-8 lg:p-12 text-center">
      {children}
    </div>
  );

  if (submitted) {
    const isBelow25l = investmentValue === BELOW_25L_VALUE;
    return wrapper(
      <>
        <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-2xl mb-6" aria-hidden="true">✓</div>
        <p className="text-lg font-medium text-base-content">Thank you for getting in touch.</p>
        <p className="mt-3 text-sm text-base-content/90">
          {isBelow25l
            ? "We&apos;ve noted your interest, and we&apos;ll reach out if we expand our services to your investment range."
            : "We&apos;ll confirm your meeting and reach out shortly."}
        </p>
      </>
    );
  }

  if (step === 1) {
    // Quotation
    return wrapper(
      <>
        <span className="text-4xl text-primary font-serif leading-none" aria-hidden="true">&ldquo;</span>
        <p className="text-lg lg:text-xl font-medium text-base-content leading-relaxed max-w-sm mt-2">
          The best time to start was yesterday. The next best is now.
        </p>
        <p className="mt-5 text-sm text-base-content/90">— Get started in minutes</p>
      </>
    );
  }

  if (step === 2) {
    // Testimonial
    return wrapper(
      <>
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10 flex items-center justify-center text-xl lg:text-2xl font-bold text-primary mb-6">
          RB
        </div>
        <p className="text-lg lg:text-xl font-medium text-base-content leading-relaxed max-w-sm">
          &ldquo;I did not know this opportunity existed before Hedgium.&rdquo;
        </p>
        <p className="mt-5 text-sm text-base-content/90">– Hedgium Clients</p>
      </>
    );
  }

  // Step 3: Guide (or below-25l message)
  if (investmentValue === BELOW_25L_VALUE) {
    return wrapper(
      <>
        <p className="text-lg font-medium text-base-content">We&apos;ve noted your interest, and we&apos;ll reach out if we expand our services to your investment range.</p>
      </>
    );
  }
  return wrapper(
    <>
      <p className="text-base font-semibold text-base-content mb-3">What happens next</p>
      <ul className="text-sm text-base-content/90 text-left max-w-sm space-y-2 list-disc list-inside">
        <li>We&apos;ll confirm your slot via call or WhatsApp</li>
        <li>Our advisor will reach out at the chosen time</li>
        <li>Bring your portfolio or goals — we&apos;ll tailor the discussion</li>
      </ul>
    </>
  );
}

export default function GetStartedPage() {
  const searchParams = useSearchParams();
  const alert = useAlert();
  const sourceFromUrl = useMemo(() => {
    const s = (searchParams.get("source") || "").toLowerCase().replace(/-/g, "_");
    return VALID_SOURCES.includes(s as typeof VALID_SOURCES[number]) ? s : "website";
  }, [searchParams]);

  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [source, setSource] = useState<string>(sourceFromUrl);
  useEffect(() => setSource(sourceFromUrl), [sourceFromUrl]);
  const [investmentValue, setInvestmentValue] = useState<string>("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const whatsappUrl = useMemo(() => {
    if (!WHATSAPP_NUMBER) return null;
    const num = `+91${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
    return `https://wa.me/${num}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  }, []);

  const canProceedStep1 = useMemo(() => {
    const digits = mobile.replace(/\D/g, "");
    return digits.length === 10;
  }, [mobile]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setMobile(value);
  };

  const handleBack = () => {
    setError("");
    if (step > 1) setStep(step - 1);
  };

  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!canProceedStep1) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setStep(2);
  };

  const handleStep2Continue = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!investmentValue) {
      setError("Please select an option.");
      return;
    }
    setStep(3);
  };

  const todayStr = useMemo(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }, []);
  const timeOptionsForSelectedDate = useMemo(() => {
    if (!meetingDate) return TIME_OPTIONS_15MIN;
    const minAheadMs = 60_000;
    const now = Date.now();
    return TIME_OPTIONS_15MIN.filter((t) => {
      const slot = new Date(`${meetingDate}T${t}`).getTime();
      return !Number.isNaN(slot) && slot >= now + minAheadMs;
    });
  }, [meetingDate]);

  useEffect(() => {
    if (!meetingDate || !meetingTime) return;
    if (!timeOptionsForSelectedDate.includes(meetingTime)) {
      setMeetingTime("");
    }
  }, [meetingDate, meetingTime, timeOptionsForSelectedDate]);

  const submitLead = async (scheduledAt?: string) => {
    setSubmitting(true);
    try {
      const digits = mobile.replace(/\D/g, "").slice(0, 10);
      const payload: Record<string, unknown> = {
        mobile: digits,
        name: name.trim() || undefined,
        source,
        investment_value: investmentValue,
      };
      if (scheduledAt) payload.scheduled_at = scheduledAt;
      const res = await myFetch("leads/", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setSubmitted(true);
        alert.success(data.message || "Thank you. We'll be in touch shortly.");
      } else {
        setError(data.detail || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const date = meetingDate.trim();
    const time = meetingTime.trim();
    if (!date || !time) {
      setError("Please select both date and time for the meeting.");
      return;
    }
    const slotMs = new Date(`${date}T${time}`).getTime();
    if (Number.isNaN(slotMs)) {
      setError("Please enter a valid date and time.");
      return;
    }
    if (slotMs < Date.now() + 60_000) {
      setError("That time has already passed. Please pick a future date and time.");
      return;
    }
    const scheduledAt = new Date(slotMs).toISOString();
    await submitLead(scheduledAt);
  };

  const hasAutoSubmittedBelow25l = useRef(false);
  const skipInitialFocus = useRef(true);

  useEffect(() => {
    if (skipInitialFocus.current) {
      skipInitialFocus.current = false;
      return;
    }
    if (submitted) {
      document.getElementById("get-started-success-heading")?.focus();
      return;
    }
    const headingId =
      step === 1
        ? "get-started-main-heading"
        : step === 2
          ? STEP2_HEADING
          : investmentValue === BELOW_25L_VALUE
            ? "get-started-below25-heading"
            : STEP3_MEET_HEADING;
    document.getElementById(headingId)?.focus();
  }, [step, submitted, investmentValue]);

  useEffect(() => {
    if (
      step === 3 &&
      investmentValue === BELOW_25L_VALUE &&
      !submitted &&
      !submitting &&
      !hasAutoSubmittedBelow25l.current
    ) {
      hasAutoSubmittedBelow25l.current = true;
      submitLead();
    }
  }, [step, investmentValue, submitted, submitting]);

  const leftContent = getLeftPanelContent(step, submitted, investmentValue);

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="md:w-10/12 lg:w-8/12 mx-auto bg-base-100 my-8 rounded-xl border border-base-300 shadow-sm flex flex-col">
        {/* Top: Back to home */}
        <div className="px-4 pt-4 pb-2 border-b border-base-300">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-base-content/90 hover:text-base-content transition"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            Back to home
          </Link>
        </div>

        <div className="flex flex-1 w-full items-center justify-center">
        {/* Left: Quotation / Testimonial / Guide (varies by step or submitted) */}
        <div className="hidden lg:flex lg:w-2/5 xl:w-1/2 flex-col">
          {leftContent}
        </div>

        {/* Right: Form or success message */}
        <div className="flex-1 flex items-center justify-center p-4 py-4">
          <div className="w-full max-w-md overflow-hidden">
            <div className="p-4">
            {!submitted && (
              <h1 id="get-started-main-heading" tabIndex={-1} className="text-xl font-bold text-base-content mb-3 outline-none">Get started with Hedgium</h1>
            )}
            {/* Header: Back + Step (when form) or just WhatsApp (when submitted) */}
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center gap-2">
                {!submitted && step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn btn-outline btn-sm"
                    aria-label="Go back to previous step"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden />
                  </button>
                )}
                {!submitted && (
                  <span className="text-sm text-base-content/90" aria-current="step">
                    Step {step} of 3
                  </span>
                )}
              </span>
              {(whatsappUrl && !submitted) && (
                <div>
                  
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm btn btn-primary btn-sm normal-case"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                  <OpensInNewTabHint />
                </a>
                </div>
              )}
            </div>

            {submitted ? (
              <div className="text-center" role="status" aria-live="polite">
                <h1 id="get-started-success-heading" tabIndex={-1} className="text-xl font-bold text-base-content mb-2 outline-none">We&apos;ll be in touch shortly</h1>
                <p className="text-base-content/90 text-sm mb-6">
                  {investmentValue === BELOW_25L_VALUE
                    ? "We&apos;ve noted your interest, and if we expand our services to your investment range, we&apos;ll reach out."
                    : "We&apos;ve received your details, and will confirm your meeting time. Prefer to chat now?"}
                </p>
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn btn-primary btn-sm normal-case"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Chat on WhatsApp
                    <OpensInNewTabHint />
                  </a>
                )}
              </div>
            ) : null}

            {!submitted && step === 1 && (
            <form onSubmit={handleStep1Continue} className="space-y-1" noValidate>
              <p className="text-base-content/90 text-sm">
                Share your number and we&apos;ll get in touch.
              </p>
              <div className="space-y-3 pt-4">
                <div>
                  <label className="label cursor-default py-0.5 text-base-content" htmlFor={FIELD_MOBILE}>
                    Mobile number <span className="text-error" aria-hidden>*</span>
                  </label>
                  <input
                    id={FIELD_MOBILE}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    name="mobile"
                    maxLength={10}
                    value={mobile}
                    onChange={handleMobileChange}
                    placeholder="10-digit mobile number"
                    className="input input-bordered input-sm w-full text-base-content bg-base-100"
                    required
                    aria-required="true"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? FIELD_FORM_ERROR : undefined}
                  />
                </div>
                <div>
                  <label className="label cursor-default py-0.5 text-base-content" htmlFor={FIELD_NAME}>
                    Name
                  </label>
                  <input
                    id={FIELD_NAME}
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="input input-bordered input-sm w-full text-base-content bg-base-100"
                  />
                </div>
                <label className="block cursor-default">
                  <span className="label cursor-default py-0.5 block text-base-content">{FIELD_SOURCE_LABEL}</span>
                  <select
                    id={FIELD_SOURCE}
                    name="source"
                    aria-label={FIELD_SOURCE_LABEL}
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="select select-bordered select-sm w-full text-base-content bg-base-100"
                  >
                    {SOURCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="text-base-content bg-base-100">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {error ? (
                <p id={FIELD_FORM_ERROR} className="text-sm text-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={!canProceedStep1}
                className="btn btn-primary w-full btn-sm normal-case mt-4 disabled:cursor-not-allowed disabled:opacity-90 disabled:!bg-primary disabled:!text-primary-content"
              >
                Continue →
              </button>
            </form>
          )}

          {!submitted && step === 2 && (
            <form onSubmit={handleStep2Continue} className="space-y-4" noValidate>
              <h2 id={STEP2_HEADING} tabIndex={-1} className="text-lg font-bold text-base-content outline-none">
                What&apos;s the total value of your investments?
              </h2>
              <p className="text-base-content/90 text-sm">
                Include Stocks, MFs, FDs, and cash. This will help us personalise your experience.
              </p>
              <div className="space-y-2" role="radiogroup" aria-labelledby={STEP2_HEADING} aria-required="true">
                {INVESTMENT_OPTIONS.map((opt) => {
                  const investmentInputId = `get-started-investment-${opt.value}`;
                  return (
                  <label
                    key={opt.value}
                    htmlFor={investmentInputId}
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors ${
                      investmentValue === opt.value
                        ? "border-primary bg-primary/5"
                        : "border-base-300 bg-base-200/50 hover:bg-base-200"
                    }`}
                  >
                    <span className="text-sm text-base-content">{opt.label}</span>
                    <input
                      id={investmentInputId}
                      type="radio"
                      name="investment_value"
                      value={opt.value}
                      checked={investmentValue === opt.value}
                      onChange={() => setInvestmentValue(opt.value)}
                      className="radio radio-primary radio-sm"
                    />
                  </label>
                  );
                })}
              </div>
              {error ? (
                <p id={FIELD_FORM_ERROR} className="text-sm text-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={!investmentValue}
                className="btn btn-primary w-full btn-sm normal-case mt-4 disabled:cursor-not-allowed disabled:opacity-90 disabled:!bg-primary disabled:!text-primary-content"
              >
                Continue →
              </button>
            </form>
          )}

          {!submitted && step === 3 && investmentValue === BELOW_25L_VALUE && (
            <div className="space-y-4">
              <h2 id="get-started-below25-heading" tabIndex={-1} className="text-lg font-bold text-base-content outline-none">Thank you for your interest</h2>
              <p className="text-base-content/90 text-sm">
                We don&apos;t provide services for below ₹25 lakhs for now. If we provide it in the future we may contact you.
              </p>
              {submitting && (
                <div
                  className="flex items-center gap-2 text-sm text-base-content/90"
                  role="status"
                  aria-live="polite"
                >
                  <Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
                  Submitting...
                </div>
              )}
              {error ? (
                <p id={FIELD_FORM_ERROR} className="text-sm text-error" role="alert">
                  {error}
                </p>
              ) : null}
            </div>
          )}

          {!submitted && step === 3 && investmentValue !== BELOW_25L_VALUE && (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h2 id={STEP3_MEET_HEADING} tabIndex={-1} className="text-lg font-bold text-base-content outline-none">
                When would you like to meet?
              </h2>
              <p className="text-base-content/90 text-sm">
                Pick a date and time. We&apos;ll confirm via call or WhatsApp.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="label cursor-default py-0.5 text-base-content" htmlFor={FIELD_MEETING_DATE}>
                    Date <span className="text-error" aria-hidden>*</span>
                  </label>
                  <input
                    id={FIELD_MEETING_DATE}
                    type="date"
                    name="meeting-date"
                    value={meetingDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                    min={todayStr}
                    className="input input-bordered input-sm w-full text-base-content bg-base-100"
                    required
                    aria-required="true"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? FIELD_FORM_ERROR : undefined}
                  />
                </div>
                <label className="block cursor-default">
                  <span className="label cursor-default py-0.5 block text-base-content">
                    {FIELD_MEETING_TIME_LABEL} <span className="text-error" aria-hidden>*</span>
                  </span>
                  <select
                    id={FIELD_MEETING_TIME}
                    name="meeting-time"
                    aria-label={FIELD_MEETING_TIME_LABEL}
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                    className="select select-bordered select-sm w-full text-base-content bg-base-100"
                    required
                    aria-required="true"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? FIELD_FORM_ERROR : undefined}
                  >
                    <option value="" className="text-base-content bg-base-100">Select time</option>
                    {timeOptionsForSelectedDate.length === 0 && meetingDate === todayStr ? (
                      <option value="" disabled>
                        No slots left today — pick tomorrow
                      </option>
                    ) : null}
                    {timeOptionsForSelectedDate.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {error ? (
                <p id={FIELD_FORM_ERROR} className="text-sm text-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={
                  submitting ||
                  !meetingDate ||
                  !meetingTime ||
                  timeOptionsForSelectedDate.length === 0
                }
                className="btn btn-primary w-full btn-sm normal-case mt-4 gap-2 disabled:cursor-not-allowed disabled:opacity-90 disabled:!bg-primary disabled:!text-primary-content"
                aria-busy={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}

          <p className="mt-5 pt-4 border-t border-base-300 flex items-center justify-center gap-2 text-xs text-base-content/90">
            <Shield className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            Your data is 100% protected
          </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
