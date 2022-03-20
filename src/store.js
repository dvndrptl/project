import { combineReducers, createStore } from "redux";
import { countRed, cartRed, fortab       } from "./reducer";
import { tableredu } from "./reducer";

const combinedRed = combineReducers({count:countRed, cart:cartRed, fortab:fortab})
const storectreated = createStore(combinedRed)

export default storectreated