import React, { useState } from 'react'
import CalculatorButton from './CalculatorButton/CalculatorButton'
import './app.css'

export default function CreateApp() {
  const [displayValue, setDisplayValue] = useState('0')
  const [firstNum, setFirstNum] = useState(null)
  const [operation, setOperation] = useState(null)
  const [shouldClearDisplay, setShouldClearDisplay] = useState(false)

  const handleButtonClick = (value) => {
    if (value === '.' && displayValue.includes('.')) {
      return
    }
    if (displayValue === '0' && value === '.') {
      setDisplayValue('0.')
      setShouldClearDisplay(false)
    } else if (displayValue === '0' || shouldClearDisplay) {
      setDisplayValue(value)
      setShouldClearDisplay(false)
    } else {
      setDisplayValue(displayValue + value.substring(0, 9 - displayValue.length))
    }
  }

  const handleClearClick = () => {
    setDisplayValue('0')
    setFirstNum(null)
    setOperation(null)
  }

  const handleEqualClick = () => {
    if (firstNum && operation) {
      const num1 = parseFloat(firstNum)
      const num2 = parseFloat(displayValue)
      let result

      switch (operation) {
        case '+':
          result = num1 + num2
          break
        case '-':
          result = num1 - num2
          break
        case '*':
          result = num1 * num2
          break
        case '/':
          if (num2 === 0) {
            result = 'ERROR'
          } else {
            result = num1 / num2
          }
          break
        case '%':
          result = num1 % num2
          break
        default:
          return
      }

      if (result > 999999999) {
        result = 'ERROR'
      }
      setDisplayValue(result.toString().substring(0, 9))
      setFirstNum(result.toString())
      setShouldClearDisplay(true)
      setOperation(null)
    }
  }

  const handleOperation = (op) => {
    if (firstNum && operation) {
      handleEqualClick() // Calcular el resultado antes de cambiar la operación
    } else {
      setFirstNum(displayValue)
      setShouldClearDisplay(true)
    }

    setOperation(op)
  }

  const ChangeValue = () => {
    const result = parseFloat(displayValue)
    setDisplayValue(String(result * (-1)).substring(0, 9))
  }

  return (
    <div className="calculadora">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-buttons">
        <div className="column">
          <CalculatorButton label="C" onClick={handleClearClick} />
          <CalculatorButton label="%" onClick={() => handleOperation('%')} />
          <CalculatorButton label="/" onClick={() => handleOperation('/')} />
        </div>
        <div className="column">
          <CalculatorButton label="7" onClick={() => handleButtonClick('7')} />
          <CalculatorButton label="8" onClick={() => handleButtonClick('8')} />
          <CalculatorButton label="9" onClick={() => handleButtonClick('9')} />
          <CalculatorButton label="x" onClick={() => handleOperation('*')} />
        </div>
        <div className="column">
          <CalculatorButton label="4" onClick={() => handleButtonClick('4')} />
          <CalculatorButton label="5" onClick={() => handleButtonClick('5')} />
          <CalculatorButton label="6" onClick={() => handleButtonClick('6')} />
          <CalculatorButton label="-" onClick={() => handleOperation('-')} />
        </div>
        <div className="column">
          <CalculatorButton label="1" onClick={() => handleButtonClick('1')} />
          <CalculatorButton label="2" onClick={() => handleButtonClick('2')} />
          <CalculatorButton label="3" onClick={() => handleButtonClick('3')} />
          <CalculatorButton label="+" onClick={() => handleOperation('+')} />
        </div>
        <div className="column">
          <CalculatorButton label="0" onClick={() => handleButtonClick('0')} />
          <CalculatorButton label="." onClick={() => handleButtonClick('.')} />
          <CalculatorButton label="=" onClick={handleEqualClick} />
          <CalculatorButton label="+/-" onClick={ChangeValue} />
        </div>
      </div>
    </div>
  )
}
