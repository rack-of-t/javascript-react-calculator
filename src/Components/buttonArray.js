import ACTIONS from "./actions";

const buttonArray = [
    {
        name: "nine",
        digit: "9",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "eight",
        digit: "8",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "seven",
        digit: "7",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "six",
        digit: "6",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "five",
        digit: "5",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "four",
        digit: "4",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "three",
        digit: "3",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "two",
        digit: "2",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "one",
        digit: "1",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "zero",
        digit: "0",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "equals",
        digit: "=",
        action: ACTIONS.EVALUATE
    },
    {
        name: "add",
        digit: "+",
        action: ACTIONS.CHOOSE_OPERATION
    },
    {
        name: "subtract",
        digit: "-",
        action: ACTIONS.CHOOSE_OPERATION
    },
    {
        name: "multiply",
        digit: "*",
        action: ACTIONS.CHOOSE_OPERATION
    },
    {
        name: "divide",
        digit: "/",
        action: ACTIONS.CHOOSE_OPERATION
    },
    {
        name: "decimal",
        digit: ".",
        action: ACTIONS.ADD_DIGIT
    },
    {
        name: "clear",
        digit: "AC",
        action: ACTIONS.CLEAR
    },

]

export default buttonArray;