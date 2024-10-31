import React from "react";
import './box.scss'

type BoxProps = {
    name: string;
    member:string[];
};



const Box = (props: BoxProps) => {
    const name = props.name || 'qiita';
    const member = props.member;

    return (
        <div className="Box">
            <div className="container">
                <h1>{name}</h1>
                <div className="member">
                    {
                        member.map((member, index) => {
                            return(
                                <div key={index} className="member-item">
                                        {member}
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Box;
