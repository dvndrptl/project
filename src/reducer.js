import { firstType, sndType, thrdType , tabledata } from './actionType';
const tab = tabledata
export const countRed = (state = 0, action) => {
    switch (action.type) {
        case firstType:
            return state + 1
        case sndType:
            return state - 1
        default:
            return state

    }
}

export const cartRed = (state = [], action) => {
    switch (action.type) {
        case thrdType:
            return [...state, { ...action.payload }]
        default:
            return state
    }
}

export const fortab = (state = [], action) => {
    switch (action.type) {
        case tab:
            return [...state, { ...action.payload }]
        default:
            return state
    }
}   




// export const tableredu = (state = [], action)=>{
//     switch(action.type){
//         case tab :
//             return [...state, {...action.payload}]
//     }
// }
// console.log(tabledata)
// export const tablered = "hello"
