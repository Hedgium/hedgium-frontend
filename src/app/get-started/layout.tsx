import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started',
  description:
    'Start your investment journey with Hedgium. Share your details and we\'ll get in touch to personalise your experience.',
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen bg-base-200 flex items-center justify-center"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <div className="loading loading-spinner loading-lg text-primary motion-reduce:animate-none" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
