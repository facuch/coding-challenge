import constants from "../../constants/constants"
import moment from "moment"

const initialState = {
    chosen:[],
    data:[],
    last_update:""
}

export default (state = initialState, action) => {
    switch (action.type){
        case constants.ADD_CRYPTO:
            return {
                chosen: [...state.chosen,action.crypto],
                data: state.data,
                last_update:state.last_update
            }
        case constants.REMOVE_CRYPTO:
            return {
                chosen: [...state.chosen.filter(crypto => crypto !== action.crypto)],
                data: state.data,
                last_update:state.last_update
            }
        case constants.ADD_DATA:
            let newChosen = []
            if (state.chosen.length >= 1){
                state.chosen.forEach((value)=>{
                    const index = action.data.findIndex((newValue)=>newValue.name === value.name)
                    newChosen.push(action.data[index])
                })
            }
            return {
                chosen: state.chosen.length >= 1 ? state.chosen : newChosen,
                data: [...action.data],
                last_update:state.last_update
            }
        case constants.UPDATE_DATE:
            return{
                chosen: state.chosen,
                data: state.data,
                last_update: moment(action.date).format("MMM Do YYYY, h:mm a")
            }
        default:
            return state
    }
}