import React from "react";
import './message_r.scss';
import Image from 'next/image';

import qiitanex from '@/public/qiitan.jpeg'

type Message_RProps = {
    text: string;
}

const Message_R = (props: Message_RProps) => {
    const text = props.text || "hello";

    return (
        <div className="message_r">
            <Image src={qiitanex} alt="logo" className="message-icon" />
            <div className="balloon2-right">
                {text}
            </div>
        </div>
    );
}

export default Message_R;
