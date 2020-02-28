import Actions from "./actions.config";

const isAdminLoad = () => {
    const storage = localStorage.getItem("IsAdmin")
    const value = storage === "false" ? false : storage != null
    const storagenotnot = !!value
    return storagenotnot
}

const isConnected = () => {
    return !!localStorage.getItem("token")
}

const initialState = {
    data: [],
    isAdmin: isAdminLoad(),
    isConnected: isConnected()
};

export default function root(state = initialState, action: any) {
    switch (action.type) {
        case Actions.GET_INITIAL_DATA: {
            return {
                ...state,
                data: action.payload,
                myFollows: action.payload.myFollows
            }
        }

        case Actions.GET_SORTED_DATA: {
            return {
                ...state,
                data: action.payload.sort((a: any, b: any) => (!a.checked && b.checked) ? 1 : ((a.checked && !b.checked) ? -1 : 0)),
                myFollows: action.payload.myFollows
            }
        }
        case  Actions.IS_ADMIN: {
            return {...state, isAdmin: action.payload}
        }
        case Actions.IS_CONNECTED: {
            return {...state, isConnected: action.payload}

        }
        default: {
            return state
        }
    }
}