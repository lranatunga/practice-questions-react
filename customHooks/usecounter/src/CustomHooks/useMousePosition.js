import { useState, useEffect } from "react";

export default function useMousePosition () {

    const [position, setPosition] = useState ({x: 0 , y:0})

    useEffect (() => {
        const handleMouseMoves = (event) => {
            setPosition ({
                x :event.clientX,
                y:event.clientY
            })
        }; window.addEventListener('mousemove', handleMouseMoves );
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMoves,
              )
        }

    },[])

    return position;
    
}

