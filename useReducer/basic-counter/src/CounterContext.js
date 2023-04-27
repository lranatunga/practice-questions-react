import { createContext, useReducer } from "react";

export const CounterContext = createContext()

function CounterContextFunction ({children}){

    const reducer = (state, action) => {
        switch(action.type){
            case 'INCREASE':
                return state + 1;
            case 'DECREASE':
                return state - 1 ;
            case 'RESET':
                return state = 0;
        }
    }

    const [counter, dispatch] = useReducer(reducer , 0)
    return(
        <CounterContext.Provider value={{counter, dispatch}}>

            {children}
        </CounterContext.Provider>
    )

}

export default CounterContextFunction