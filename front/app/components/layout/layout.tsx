import React from 'react';
import Header from '@/app/components/layout/header/page';
import Box from '@/app/components/layout/box/box';
import './layout.scss';

const Layout = () => {
    const member = [
        "fndasklfda",
        "fas;mkl:a:a",
        "npiupihbo;n",
        "fndasklfda",
        "fas;mkl:a:a",
        "npiupihbo;n",
        "fndasklfda",
        "fas;mkl:a:a",
        "npiupihbo;n",
        "fndasklfda",
        "fas;mkl:a:a",
        "npiupihbo;n",
        "fndasklfda",
        "fas;mkl:a:a",
        "npiupihbo;n",
    ];

    return (
        <div className="Layout">
            <Header name="My Application" />
            <div className="content">
                <Box name="Member" member={member} />
            </div>
        </div>
    );
};

export default Layout;
