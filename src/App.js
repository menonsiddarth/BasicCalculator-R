import React, { Fragment, useEffect, useState } from "react";
import './App.css';

var disableButton = true;

const App = () => {

  const [Answer, setAnswer] = useState('');
  const [Symbol, setSymbol] = useState();
  const symbols = ["+", "-", "/", "*"]

  const runBtn = (btn) => {
    setAnswer(Answer + btn);
    if (btn=='+' || btn=='-' || btn=='/' || btn=='*') setSymbol(btn);
  }

  useEffect(()=> {
    if(symbols.includes(Symbol)) {
      disableButton = false
    } else {
      disableButton = true
    }
  })

  const allClear = () => {
    setAnswer("");
    setSymbol('');
  }

  const clearOne = () => {
    let tempString = Answer;
    tempString = tempString.substring(0, tempString.length - 1);
    setAnswer(tempString);
    let check_symbol = symbols.includes(Answer.slice(-1));
    if (check_symbol) setSymbol();
  }

  const solve = () => {
    let operation = Answer.split(Symbol);
    let num1 = parseInt(operation[0]);
    let num2 = parseInt(operation[1]);

    if (Symbol === '+') {
      setAnswer(num1 + num2) 
    } else if (Symbol === '-') {
      setAnswer(num1 - num2)
    } else if (Symbol === '*') {
      setAnswer(num1 * num2) 
    } else if (Symbol === '/') {
      setAnswer(num1 / num2)
    }
    setSymbol();
    return Answer;
  }

  return (
    <div className="calculatorContainer">
      <div className="calculatorDisplayRow">
        <h1>{Answer}</h1>
        <span>{Symbol}</span>
      </div>

      <div className="calculatorBtnRow">
        <div className="button" onClick={() => runBtn('1')}><h3>1</h3></div>
        <div className="button" onClick={()=> runBtn('2')}><h3>2</h3></div>
        <div className="button" onClick={()=> runBtn('3')}><h3>3</h3></div>
        <div className="button" style={{backgroundColor:'darkgray'}} onClick={ ()=> disableButton ? runBtn('+') : null}><h3>+</h3></div>
      </div>
      <div className="calculatorBtnRow">
        <div className="button" onClick={() => runBtn('4')}><h3>4</h3></div>
        <div className="button" onClick={()=> runBtn('5')}><h3>5</h3></div>
        <div className="button" onClick={()=> runBtn('6')}><h3>6</h3></div>
        <div className="button" style={{backgroundColor:'darkgray'}} onClick={ ()=> disableButton ? runBtn('-') : null}><h3>-</h3></div>
      </div>
      <div className="calculatorBtnRow">
        <div className="button" onClick={() => runBtn('7')}><h3>7</h3></div>
        <div className="button" onClick={()=> runBtn('8')}><h3>8</h3></div>
        <div className="button" onClick={()=> runBtn('9')}><h3>9</h3></div>
        <div className="button" style={{backgroundColor:'darkgray'}} onClick={ ()=> disableButton ? runBtn('*') : null}><h3>*</h3></div>
      </div>
      <div className="calculatorBtnRow">
        <div className="button" onClick={() => runBtn('0')}><h3>0</h3></div>
        <div className="button" style={{backgroundColor:'red'}} onClick={allClear}><h3>AC</h3></div>
        <div className="button" style={{backgroundColor:'orange'}} onClick={clearOne}><h3>C</h3></div>
        <div className="button" style={{backgroundColor:'darkgray'}} onClick={ ()=> disableButton ? runBtn('/') : null}><h3>/</h3></div>
      </div>
      <div className="calculatorBtnRow">
      <div className="button" style={{backgroundColor:'green'}} onClick={solve}><h3>Enter</h3></div>
      </div>
    </div>
  )
}

export default App;