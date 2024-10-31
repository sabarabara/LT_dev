import React from "react";
import Image from 'next/image';
import './person.scss';
import qiitaex from '@/public/qiitan.jpeg';

type PersonProps = {
    name: string;
    img?: string;
    attribute: string;
    comment: string;
};

const Person = (props: PersonProps) => {
    const name = props.name || "qiitan";
    const attribute = props.attribute || "programming";
    const comment = props.comment || "hello";

    return (
        <div className="person">
            <div className="name">{name}</div>
            <div className="middle">
                <div className="img">
                    <Image
                        src={qiitaex} // 画像が指定されていない場合はデフォルト画像を使用
                        alt={name}
                        layout="fixed" // サイズを固定
                        width={50} // 固定幅
                        height={50} // 固定高さ
                    />
                </div>
                <div className="attribute">{attribute}</div>
            </div>
            <div className="comment">{comment}</div>
        </div>
    );
};

export default Person;
