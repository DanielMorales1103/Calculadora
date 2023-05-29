import React from "react"
import './CalculatorButton.css'

export default function CalculatorButton({ label, onClick }) {
    return (
      <div className="calculator-button" onClick={onClick}>
        {label}
      </div>
    );
  }