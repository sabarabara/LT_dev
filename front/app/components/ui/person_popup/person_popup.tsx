import React from "react";
import Image from "next/image";
import qiitaex from '@/public/qiitan.jpeg';
import './person_popup.scss';


type Person_popupProps={
    name:string,
    comment:string,
}


const Person_popup=(props:Person_popupProps)=>{

    const name = props.name || "qiitan";
    const comment = props.comment || "hello";

    return(
        <div className="person_popup">
            <div className="name">{name}</div>
            <div className="img"><Image
                        src={qiitaex} // 画像が指定されていない場合はデフォルト画像を使用
                        alt={name}
                        layout="fixed" // サイズを固定
                        width={50} // 固定幅
                        height={50} // 固定高さ
                    />
            </div>
            <div className="comment">{comment}</div>
        </div>
    );
}

export default Person_popup;