import { useContext } from "react";
import { TheamContext } from "./TheamContext";
import CounterContextFunction from "./CounterContext";
import Counters from "./Counters";

function Main () {
    const {theam, dispatch} =useContext(TheamContext)

    return (
        <div className={theam === 'light' ? 'light-mode': 'dark-mode'}>
            <CounterContextFunction>
                <Counters />
             </CounterContextFunction>
             <button onClick={()=>dispatch({type:'TOGGLE_THEAM'})}>Toggle Theam</button>
        </div>
    )
}
export default Main