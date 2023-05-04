import { useState} from "react";

export default function useCounter (initialvalue = 0) {

    const [counter, setCounter] = useState(initialvalue)

    const onIncrecement = () => {setCounter (counter +1 )}
    const onDecrecement = () =>{ setCounter(counter - 1)}
    return {
        counter, onIncrecement, onDecrecement
    }
}