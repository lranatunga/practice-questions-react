import useCounter from "../CustomHooks/useCounter";

export default function Counter ({children}){

    const {counter, onIncrecement, onDecrecement} = useCounter()
    

    return(
        <div>
            <p>Count: {counter}</p>
            <button onClick={onIncrecement}>Increase</button>
            <button onClick={onDecrecement}>Decrease</button>
        </div>
    )
}