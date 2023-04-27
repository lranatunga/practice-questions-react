import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter ({children}) {
    const {counter, dispatch} = useContext(CounterContext)

    return (
        <div>
            <h3>Counter:{counter}</h3>
            <br/>
            <button onClick={()=>dispatch({type:'INCREASE'})}>Increase</button>
            <br/>
            <button onClick={() => dispatch({type:'DECREASE'})}>Decrease</button>
            <br/>
            <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
        </div>
    )

}
export default Counter