import Actions from "./actions.config";
import {deleteCard, getInitialData, updateCard} from "./services"


export const invokeGetSortedData = () => {
    return async (dispatch: any) => {
        const data = await getInitialData()
        dispatch({
            type: Actions.GET_SORTED_DATA,
            payload: data
        })
    }
}


export const invokeDeleteCard = (payload: any) => {
    return async (dispatch: any) => {
        await deleteCard(payload)
        dispatch(invokeGetSortedData())
    }
}

export const invokeUpdateCard = (payload: any) => {
    return async (dispatch: any) => {
       await updateCard(payload)
        dispatch(invokeGetSortedData())
    }
}

export const setIsAdmin = (payload: boolean) => {
    return async (dispatch: any) => {
        dispatch({
            type: Actions.IS_ADMIN,
            payload: payload
        })
    }
}


export const setIsConnected = (payload: boolean) => {
    return async (dispatch: any) => {
        dispatch({
            type: Actions.IS_CONNECTED,
            payload: payload
        })
    }
}