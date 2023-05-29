import React, { useState, useEffect } from 'react';
import CalculatorButton from "./CalculatorButton/CalculatorButton";
import './app.css'


export default function CreateApp(){
    const [displayValue, setDisplayValue] = useState("0");
    const [operation, setOperation] = useState("");
    const [firstNum, setFirstNum] = useState(null);
    const [secondNum, setSecondNum] = useState(null);
    const [result, setResult] = useState(0);

    const handleButtonClick = (value) => {
        if (displayValue.length < 9) {
            if (displayValue === "0") {
                setDisplayValue(value);
            } else {
                setDisplayValue(displayValue + value);
            }
        }
    };

    const handleClearClick = () => {
        setDisplayValue("0");
        setFirstNum(null);
        setSecondNum(null);
        setOperation("");
        setResult(0);
    };

    const handleEqualClick = () => {
        if (firstNum == null) {
            setFirstNum(displayValue);
            setOperation(op);
            setDisplayValue("0");
          } else {
            setSecondNum(displayValue);
          }
    }

    const ChangeValue = () =>{
        setResult(result*(-1))
    }

    const handleOperation = (op) => { 
        if (firstNum == null) {
          setFirstNum(displayValue);   
          setOperation(op);
            setDisplayValue("0");       
        } else {
            setSecondNum(displayValue);
        }
      }

    useEffect(() => {
        console.log(firstNum)
        console.log(operation)
        console.log(secondNum)
        let num1 = parseFloat(firstNum);
        let num2 = parseFloat(secondNum)
        if (operation === "+"){
            setResult(num1 + num2)
        }else if (operation === "-"){
            setResult(num1 - num2)
        } else if (operation === "*"){
            setResult(num1 * num2)
        }else if (operation === "/"){
            setResult(num1 / num2)
        }
            
    }, [secondNum]);

    useEffect(() =>{
        console.log(result) 
        let resultado = String(result)
        setDisplayValue(resultado)
        setFirstNum(result)
        setOperation("")
    }, [result])
   
    

    return(
        <div className='calculadora'>
           <div className="calculator-display">{displayValue}</div>
            <div className="calculator-buttons">
                <div className='column'>
                    <CalculatorButton label="C" onClick={handleClearClick} />
                    <CalculatorButton label="/" onClick={() => handleOperation("/")} />
                </div>
                <div className='column'>
                    <CalculatorButton label="7" onClick={() => handleButtonClick("7")} />
                    <CalculatorButton label="8" onClick={() => handleButtonClick("8")} />
                    <CalculatorButton label="9" onClick={() => handleButtonClick("9")} />
                    <CalculatorButton label="x" onClick={() => handleOperation("*")} />
                </div>
                <div className='column'>
                    <CalculatorButton label="4" onClick={() => handleButtonClick("4")} />
                    <CalculatorButton label="5" onClick={() => handleButtonClick("5")} />
                    <CalculatorButton label="6" onClick={() => handleButtonClick("6")} />
                    <CalculatorButton label="-" onClick={() => handleOperation("-")} />
                </div>
                <div className='column'>
                    <CalculatorButton label="1" onClick={() => handleButtonClick("1")} />
                    <CalculatorButton label="2" onClick={() => handleButtonClick("2")} />
                    <CalculatorButton label="3" onClick={() => handleButtonClick("3")} />
                    <CalculatorButton label="+" onClick={() => handleOperation("+")} />
                </div>
                <div className='column'>
                    <CalculatorButton label="0" onClick={() => handleButtonClick("0")} />
                    <CalculatorButton label="=" onClick={handleEqualClick} />
                    <CalculatorButton label="+/-" onClick={ChangeValue} />
                </div>         
            </div>
        </div>
    )    
}