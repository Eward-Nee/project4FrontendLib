import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers"

const store = configureStore(
    {
        reducer: {
            calculator: reducers.calculator
        }
    }
)

export default store