export default function GroceryList({groceries}){
  return(
    <ul>
      { groceries.map((item, index)=>(
    <li key={index}>{item}</li>)) }
        
    </ul>
  )
}











/**
 * 03 List Rendering Using Props
 * 
 * Create a component called GroceryList that accepts a prop called groceries. 
 * The component should receive an array of grocery items (as the one below) and display them as an unordered list. 
 * In the parent component, pass an array of grocery items to the GroceryList 
 * component and render it.
 * 
 */

// const groceryItems = ["Milk", "Eggs", "Bread", "Butter"];