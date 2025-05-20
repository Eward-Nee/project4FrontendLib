import { createSlice } from "@reduxjs/toolkit"

const calculatorSlice = createSlice({
    name: "calculator",
    initialState: { equation: "0", init: true, allowDot: true },
    reducers: {
        add(state) {
            const lastChar = state.equation[state.equation.length - 1]
            const lenghtOfEq = state.equation.length
            if (["/", "*", "-", "+", "."].includes(lastChar)) {
                if (["*-", "/-", "+-"].includes(state.equation.slice(lenghtOfEq - 2, lenghtOfEq))) {
                    console.log(state.equation.slice(lenghtOfEq - 2, lenghtOfEq))
                    state.equation = state.equation.slice(0, -2) + "+"
                } else {
                    console.info("nothing goin on here bud")
                    state.equation = state.equation.slice(0, -1) + "+"
                }

            } else {
                state.equation += "+"
            }

        },

        sub(state) {
            const lastChar = state.equation[state.equation.length - 1]
            if (!["-", "."].includes(lastChar)) {
                state.equation += "-"
            }
        },

        mult(state) {
            const lastChar = state.equation[state.equation.length - 1]
            const lenghtOfEq = state.equation.length
            if (["/", "*", "-", "+", "."].includes(lastChar)) {
                if (["*-", "/-", "+-"].includes(state.equation.slice(lenghtOfEq - 2, lenghtOfEq))) {
                    console.log(state.equation.slice(lenghtOfEq - 2, lenghtOfEq))
                    state.equation = state.equation.slice(0, -2) + "*"
                } else {
                    console.info("nothing goin on here bud")
                    state.equation = state.equation.slice(0, -1) + "*"
                }

            } else {
                state.equation += "*"
            }

        },

        div(state) {
            const lastChar = state.equation[state.equation.length - 1]
            const lenghtOfEq = state.equation.length
            if (["/", "*", "-", "+", "."].includes(lastChar)) {
                if (["*-", "/-", "+-"].includes(state.equation.slice(lenghtOfEq - 2, lenghtOfEq))) {
                    console.log(state.equation.slice(lenghtOfEq - 2, lenghtOfEq))
                    state.equation = state.equation.slice(0, -2) + "/"
                } else {
                    console.info("nothing goin on here bud")
                    state.equation = state.equation.slice(0, -1) + "/"
                }

            } else {
                state.equation += "/"
            }

        },

        dot(state) {

            if (state.allowDot) {
                const lastChar = state.equation[state.equation.length - 1]
                if (["/", "*", "-", "+", "."].includes(lastChar)) {
                    state.equation = state.equation.slice(0, -1) + "."
                } else {
                    state.equation += "."
                }
                state.allowDot = false
            }

        },

        num(state, action) {
            const lastChar = state.equation[state.equation.length - 1]
            if (state.init == true) {
                state.equation = ""
                state.init = false
            }

            if (["/", "*", "-", "+"].includes(lastChar)) {
                state.allowDot = true
            }

            if (state.equation != "0" || action.payload != "0") {
                state.equation += action.payload
            }
        },

        clear(state) {
            state.equation = "0"
            state.init = true
            state.allowDot = true
        },

        equal(state) {

            if (state.equation != "0") {
                if (state.equation.charAt(0) == "0") {
                    state.equation = state.equation.slice(1)
                }

                state.equation = `${eval(state.equation)}`
            }

        }

    }
})

export const actionAdd = calculatorSlice.actions.add
export const actionDiv = calculatorSlice.actions.div
export const actionDot = calculatorSlice.actions.dot
export const actionMult = calculatorSlice.actions.mult
export const actionSub = calculatorSlice.actions.sub
export const actionNum = calculatorSlice.actions.num
export const actionClear = calculatorSlice.actions.clear
export const actionEqual = calculatorSlice.actions.equal

export default {
    calculator: calculatorSlice.reducer
}