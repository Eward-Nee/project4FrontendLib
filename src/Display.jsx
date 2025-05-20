import { useSelector } from "react-redux"
import "./App.css"

function Display() {
    const text = useSelector((state) => state.calculator.equation)

    return (
        <div id="display">
            {text}
        </div>
    )
}

export default Display