import { useState } from "react";
import "./calc.css";
import React  from "react";

export default function Calculator(props){

    const [output, setoutput] = useState("")

    const digits = []
    const createDigits = () => {
        for(let i = 0; i <10; i++){
            digits.push(i)
        }
    }
    const digitHandler = (digit) => {
        console.log("dosiaj")
        setoutput(output + digit)
    }

    const opertorHandler = (type) => {

    }

    return (
        <div className="calcBody">

            
            <div className="inputText">{output}</div>

            {createDigits()}
            <div className="digits">
                {digits.map((d) => {
                    return <button onClick={()=>digitHandler(d)} key={d}>{d}</button>
                })}
            </div>

            <button onClick={()=>operatorHandler("+")}>+</button>
            <button onClick={()=>operatorHandler("-")}>-</button>
            <button onClick={()=>operatorHandler("*")}>*</button>
            <button onClick={()=>operatorHandler("/")}>/</button>
            <button className="submit">=</button>
            
        </div>
    )
}