import Footer from '@/components/public/footer';
import HomeHeader from '@/components/public/header';
import React from 'react';

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <HomeHeader />
      <main className="container mx-auto p-4 text-primary">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
