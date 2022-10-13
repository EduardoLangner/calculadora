import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './components/molecules/calculadoraFormat'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
)