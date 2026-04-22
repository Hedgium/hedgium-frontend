import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Charter',
  description:
    'Investor Charter for Hedgium Services LLP, SEBI Registered Research Analyst INH000025258 — vision, services, grievance redressal, investor rights, and responsibilities.',
};

export default function InvestorCharterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
