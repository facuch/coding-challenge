import constants from "../../constants/constants";

const addData = data =>({
    type: constants.ADD_DATA,
    data
});



export const removeCrypto = crypto =>({
    type: constants.REMOVE_CRYPTO,
    crypto
})

export const fetchData = () => async (dispatch) => {
    try {
        const data = await fetch('https://data.messari.io/api/v2/assets')
        const dataJSON = await data.json()
        dispatch(addData(dataJSON.data))
    } catch (error) {
        throw error
    }
}