// components/ui/sidebar/Sidebar.tsx
import React from 'react';
import './sidebar.scss';

type SidebarProps = {
    name: string;
    date: {
        month: string;
        day: number;
    }[];
    isVisible: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ name = 'qiita', date, isVisible }) => {
    return (
        <div className={`Sidebar ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h1>{name}</h1>
                <div className="date">
                    {date.map(({ month, day }, index) => (
                        <div key={index} className="date-item">
                            {day === 1 ? `${month}.${day}` : day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
