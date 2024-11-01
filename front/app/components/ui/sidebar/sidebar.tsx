// components/ui/sidebar/Sidebar.tsx
import React from 'react';
import './sidebar.scss';

type SidebarProps = {
    name: string;
    date: {
        month: number;
        day: number;
    }[];
    isVisible: boolean;
};

const Stringchange=(month:number)=>{
    const Month:string[]=["Jan","Feb","Mer","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    for(let i:number=0; i<12; i++){
        if(i===month-1)return Month[i];
    }

}

const Sidebar: React.FC<SidebarProps> = ({ name = 'qiita', date, isVisible }) => {
    return (
        <div className={`Sidebar ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                <h1>{name}</h1>
                <div className="date">
                    {date.map(({ month, day }, index) => (
                        <div key={index} className="date-item">
                            {day === 1 ? `${Stringchange(month)}.${day}` : day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
