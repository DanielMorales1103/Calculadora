import React from 'react'
import './CalculatorButton.css'

// eslint-disable-next-line react/prop-types
export default function CalculatorButton({ label, onClick }) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="calculator-button" onClick={onClick}>
      {label}
    </div>
  )
}
