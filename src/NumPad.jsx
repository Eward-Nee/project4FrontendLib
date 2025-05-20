import "./App.css"
import { useDispatch } from "react-redux"
import { actionAdd, actionClear, actionDiv, actionDot, actionMult, actionNum, actionSub, actionEqual } from "./reducers"
import { useEffect } from "react"

function Numpad() {
    const dispatch = useDispatch()

    function KeyFn(event) {
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) {
            dispatch(actionNum(event.key))
        } else if (["/", "*", "-", "+", ".", "Enter", "Delete"].includes(event.key)) {
            switch (event.key) {
                case "/":
                    dispatch(actionDiv())
                    break;

                case "*":
                    dispatch(actionMult())
                    break;

                case "-":
                    dispatch(actionSub())
                    break;

                case "+":
                    dispatch(actionAdd())
                    break;

                case ".":
                    dispatch(actionDot())
                    break;

                case "Enter":
                    dispatch(actionEqual())
                    break;

                case "Delete":
                    dispatch(actionClear())
                    break;
            }
        }

    }

    function ClickFn(event) {

        if (event.target.tagName == "BUTTON") {
            if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.target.innerText)) {
                dispatch(actionNum(event.target.innerText))
            } else if (["/", "*", "-", "+", ".", "=", "Delete"].includes(event.target.innerText)) {
                switch (event.target.innerText) {
                    case "/":
                        dispatch(actionDiv())
                        break;

                    case "*":
                        dispatch(actionMult())
                        break;

                    case "-":
                        dispatch(actionSub())
                        break;

                    case "+":
                        dispatch(actionAdd())
                        break;

                    case ".":
                        dispatch(actionDot())
                        break;

                    case "=":
                        dispatch(actionEqual())
                        break;

                    case "Delete":
                        dispatch(actionClear())
                        break;
                }
            }
        }
    }

    useEffect(() => {
        addEventListener("keydown", KeyFn)
        addEventListener("click", ClickFn)

        return () => {
            removeEventListener("keydown", KeyFn)
            removeEventListener("click", ClickFn)
        }
    }, [])


    return (
        <div id="numPad">
            <button id="one">1</button>             <button id="two">2</button>            <button id="three">3</button>           <button id="add">+</button>
            <button id="four">4</button>            <button id="five">5</button>           <button id="six">6</button>             <button id="subtract">-</button>
            <button id="seven">7</button>           <button id="eight">8</button>          <button id="nine">9</button>            <button id="multiply">*</button>
            <button id="zero">0</button>            <button id="decimal">.</button>        <button id="equals">=</button>          <button id="divide">/</button>
        </div>

    )
}

export default Numpad