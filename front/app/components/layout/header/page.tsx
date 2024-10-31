import React from 'react';
import './header.scss';

import Bell from '@/public/header/bell/bell';
import Bell_push from '@/public/header/bell/bell_push';
import Profile from '@/public/header/profile';
import Setup from '@/public/header/setup';

type HeaderProps={
    name:string
}

const Header = (props:HeaderProps) => {
    const name=props.name || "TOP";

    return (
        <div className='Header'>
            <div className='container'>
                <div className='name'>
                    <p>{name}</p>
                </div>
                <div>
                    <div className='icon'>
                        <div className='setup'><Setup /></div>
                        <div className='push'><Bell /></div>
                        <div className='profile'><Profile /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;