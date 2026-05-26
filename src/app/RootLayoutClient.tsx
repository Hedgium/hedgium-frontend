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
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="light"
        forcedTheme="light"
        enableSystem={false}
      >
        <main id="main-content" tabIndex={-1} className="flex min-h-0 w-full flex-1 flex-col outline-none">
          {children}
        </main>
      </ThemeProvider>
      <AlertsContainer />
      {process.env.NODE_ENV !== 'production' ? <AxeDevTools /> : null}
    </>
  );
}
