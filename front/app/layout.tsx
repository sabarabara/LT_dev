// app/layout.tsx
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <title>My App</title>
            </head>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;
