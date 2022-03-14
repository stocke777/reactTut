import { useState } from "react";
import "./calc.css";
import React  from "react";

export default function Calculator(props){
 
    const [numbers, setnumbers] = useState({
        first: "",
        second: "",
        result: "",
        turn: 0,
        operator: ""
    })

    const digits = []
    const createDigits = () => {
        for(let i = 0; i <10; i++){
            digits.push(i)
        }
    }
    const digitHandler = (digit) => {
        if(numbers.turn === 0){
            setnumbers({...numbers, first: numbers.first + digit});
        }else if(numbers.turn === 1){
            setnumbers({...numbers, second: numbers.second + digit});
        }else{
            resultHandler();
            setnumbers({...numbers, first: numbers.result, turn: numbers.turn - 1, second: "", result: ""});
        }

    }

    const operatorHandler = (type) => {
        console.log(numbers)
        console.log(typeof(numbers.first), typeof(numbers.turn), numbers.turn)
        setnumbers({...numbers, turn: numbers.turn + 1, operator: type})
    }

    const resultHandler = () => {
        console.log(numbers)
        let res = 0;
        if(numbers.operator==="+"){
            res = Number(numbers.first) + Number(numbers.second);
        }else if(numbers.operator==="-"){
            res = Number(numbers.first) - Number(numbers.second);
        }else if(numbers.operator==="*"){
            res = Number(numbers.first) * Number(numbers.second);
        }else {
            res = Number(numbers.first) / Number(numbers.second);
        }
        setnumbers({...numbers, result: res});
        console.log(res)
    }

    return (
        <div className="calcBody">

            {numbers.result}
            <div className="inputText">{numbers.result}</div>

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
            <button onClick={()=>resultHandler()} className="submit">=</button>
            
        </div>
    )
}