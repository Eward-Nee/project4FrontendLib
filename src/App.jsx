import Display from "./Display"
import Numpad from "./NumPad"
import "./App.css"

function App() {

  return (
    <>
      <button id="clear">Delete</button>
      <div id="calc">
        <Display />
        <div className="d-flex justify-content-between align-items-center">
          <Numpad />
        </div>
      </div>
    </>

  )
}

export default App
