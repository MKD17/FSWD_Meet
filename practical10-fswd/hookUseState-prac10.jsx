import React from "react";
import { useState } from "react";
const DemoUseState=()=>{
    const [color,setColor]=useState('');
    return(
        <div style={{padding:'10rem'}}>
            <div style={{height:"10rem",width:'20rem',border:'solid black 0.1rem' ,background:color}}>
                {color}
            </div>
            <input type="text" onChange={(e)=>{
                setColor(e.target.value);
            }} />
        </div>
    )
}
export default DemoUseState;