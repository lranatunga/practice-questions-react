export default function Box (props){

    return(
        <div style={{backgroundColor:props.color, width:props.size, height:props.size}}>{props.color}</div>
    )
}







/**
 * 02 Styling with Props
 * 
 * Create a functional component called Box that accepts two props, color and size. 
 * The component should display a square div element with the given background color 
 * and size (width and height). 
 * In the parent component, use the Box component to create a set of differently colored 
 * and sized boxes.
 * 
 */