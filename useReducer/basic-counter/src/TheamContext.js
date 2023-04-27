import { createContext, useReducer } from "react";

export const TheamContext = createContext()

function TheamContextFunction ({children}) {

    const reducer = (state, action) => {

        switch (action.type){
            case 'TOGGLE_THEAM':
                return state === 'light' ? 'dark' : 'light';
            default:
                return state
        }
       

    }

    const [theam, dispatch] = useReducer(reducer, 'light')
    return(
        <TheamContext.Provider value={{
            dispatch,
            theam
        }}>
            {children}
        </TheamContext.Provider>
    )
}

export default TheamContextFunction