import { ReactNode } from 'react';
import { Navbar } from '@/components/ui/navbar';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-black text-white antialiased ${className}`}>
      <Navbar />
      <main className="pt-20 md:pt-24">{children}</main>
    </div>
  );
};

