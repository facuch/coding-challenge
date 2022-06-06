import constants from "../../constants/constants"

const initialState = {
    chosen:[],
    data:[]
}

export default (state = initialState, action) => {
    switch (action.type){
        case constants.ADD_CRYPTO:
            return {
                chosen: [...state.chosen,action.crypto],
                data: state.data
            }
        case constants.REMOVE_CRYPTO:
            return {
                chosen: [...state.chosen.filter(crypto => crypto !== action.crypto)],
                data: state.data
            }
        case constants.ADD_DATA:
            return {
                chosen: state.chosen,
                data: [...action.data]
            }
        default:
            return state
    }
}