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
  const handleSkipToContent = () => {
    const main = document.getElementById('main-content');
    if (!main) return;
    main.focus();
  };

  return (
    <>
      <NextTopLoader color="#2440ff" showSpinner height={2} />
      <ThemeProvider defaultTheme="light">
        <a
          href="#main-content"
          onClick={handleSkipToContent}
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-black text-white px-4 py-2 rounded"
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
