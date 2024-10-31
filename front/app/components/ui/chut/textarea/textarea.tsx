import React, { useState } from "react";
import './textarea.scss';

const Textarea = () => {

    return (
        <div className="textarea">
            <div className="container">
                <div className="textinput">
                    <textarea/>
                </div>
                <div className="submit">
                    <button>送信</button>
                </div>
            </div>
        </div>
    );
};

export default Textarea;
