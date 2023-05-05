import useMousePosition from "../CustomHooks/useMousePosition";

export default function MousePosition () {
    const {x, y} = useMousePosition ();

    return (
        <div>Mouse position: ({x}, {y})</div>
    )
}

// import { useMousePosition } from '../CustomHooks/useMousePosition';

// const MousePositionComponent = () => {
//   const { x, y } = useMousePosition();

//   return (
//     <div>
//       Mouse Position: ({x}, {y})
//     </div>
//   );
// };

// export default MousePositionComponent;