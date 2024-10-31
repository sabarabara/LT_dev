import React from 'react';
import { Allura, Delicious_Handrawn } from 'next/font/google';

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
});


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Test</title>
      </head>
      <body className={`${allura.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
