'use client';

import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';
import AlertsContainer from '@/components/AlertsContainer';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader color="#2440ff" showSpinner height={2} />
      <ThemeProvider defaultTheme="light">
        {children}
      </ThemeProvider>
      <AlertsContainer />
    </>
  );
}
