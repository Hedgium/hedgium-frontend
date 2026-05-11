'use client';

import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import AlertsContainer from '@/components/AlertsContainer';
import AxeDevTools from '@/components/dev/AxeDevTools';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader color="#2440ff" showSpinner height={2} />
      <ThemeProvider defaultTheme="light">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-base-100 focus:px-4 focus:py-3 focus:text-base-content focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          Skip to main content
        </a>
        <main id="main-content" tabIndex={-1} className="flex min-h-0 w-full flex-1 flex-col outline-none">
          {children}
        </main>
      </ThemeProvider>
      <AlertsContainer />
      {process.env.NODE_ENV !== 'production' ? <AxeDevTools /> : null}
    </>
  );
}
