import React,{useState} from "react";
const Cntr=()=>{
    const [cntr,setCntr]=useState(0);
    return(
        <>
            <h1>useState Hooks example Counter Application</h1>
            <b>Number of times you clicked button is : {cntr}</b><br></br>
            <button onClick={()=>{
                setCntr(cntr+1)
            }}>Click me!</button>
        </>
    ) 
};
export default Cntr;