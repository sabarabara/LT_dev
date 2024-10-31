import React, { useState } from "react";
import './message.scss'
import Textarea from "./textarea/textarea";

const message=()=>{

    
    return(
        <div className="message">
            <div className="container">
                <Textarea/>
            </div>
        </div>
    );
}

export default message;