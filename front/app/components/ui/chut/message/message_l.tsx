import React from "react";
import './message_l.scss';
import Image from 'next/image';

import qiitanex from '@/public/qiitan.jpeg';

type Message_LProps = {
    text: string;
}

const Message_L = (props: Message_LProps) => {
    const text = props.text || "helloworld";

    return (
        <div className="message_l">
            <Image src={qiitanex} alt="logo" className="message-icon" />
            <div className="balloon2-left">
                {text}
            </div>
        </div>
    );
}

export default Message_L;