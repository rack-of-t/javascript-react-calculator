import './App.css';
import { useReducer } from 'react';
import ACTIONS from './Components/actions';
import buttonArray from './Components/buttonArray';

function reducer(state, {type, payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }
      if (state.currentOperand === "0") {
        return {
          ...state,
          currentOperand: payload.digit

        }
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CLEAR:
      return {
        currentOperand: "0",
      }
    case ACTIONS.CHOOSE_OPERATION:
      // If both operands are empty do nothing
      if (state.currentOperand == null && state.previousOperand == null) {
        console.log("CHOOSE_OPERATION_1")
        return state
      }
      // If operation is not empty, "-" is pressed and current display is empty
      if (state.operation != null && payload.digit ==="-" && state.currentOperand == null) {
        console.log("NEW")
        // add - to the end of the operator for "+-", "*-","/-" and "--"
        return {
          ...state,
          operation: state.operation + payload.digit,
        }
      }
      // When opreation button is pressed and display is empty
      if (state.currentOperand == null) {
        // add operation sign to sum display
        return {
          ...state,
          operation: payload.digit
        }
      }
      
      // if current display is not empty but sum display is empty
      if (state.previousOperand == null) {
        // add pressed operation and current digit in main display to sum display, make main display null
        return {
          ...state,
          operation: payload.digit,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      return {
        ...state,
        previousOperand: doMath(state),
        operation: payload.digit,
        currentOperand: null
      }
    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
        return state
      }
      return {
        ...state,
        previousOperand:null,
        operation: null,
        currentOperand: doMath(state)
      }
  }
}

function doMath({currentOperand, previousOperand, operation}) {
  const sumDisplayValue = parseFloat(previousOperand)
  const mainDisplayValue = parseFloat(currentOperand)
  if (isNaN(sumDisplayValue) || isNaN(mainDisplayValue)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = sumDisplayValue + mainDisplayValue
      break
    case "-":
      computation = sumDisplayValue - mainDisplayValue
      break
    case "/": 
      computation = sumDisplayValue / mainDisplayValue
      break
    case "*":
      computation = sumDisplayValue * mainDisplayValue
      break
    case "+-":
      computation = (sumDisplayValue + mainDisplayValue)*-1
      break
    case "/-":
      computation = (sumDisplayValue / mainDisplayValue)*-1
      break
    case "*-":
      computation = (sumDisplayValue * mainDisplayValue)*-1
      break
    case "--":
      computation = sumDisplayValue + mainDisplayValue
      break
  }

  return computation.toString()
}

function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer,{})

  return (
    <div className="App">
      <body className="App-Body">
        <h1 className="header-text">JavaScript Calculator</h1>
        <div id="calculator">
          <div className="output" style={{gridArea: "display"}}>
            <div id="sum">{previousOperand} {operation}</div>
            <div id="display">{currentOperand}</div>
          </div> 
          {buttonArray.map((selection) => (
            <button key={selection.name}
            style={{gridArea: selection.name}}
            className='number-buttons'
            id={selection.name}
            onClick={() => dispatch({type: selection.action, payload: { digit: selection.digit } } )}
            >
              {selection.digit}
            </button>
          ))}
        </div>

      </body>
    </div>
  );
}

export default App;
