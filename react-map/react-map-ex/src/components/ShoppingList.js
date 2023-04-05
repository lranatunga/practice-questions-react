const ShoppingList = () => {
    const shopplingItems = ["Milk", "Eggs", "Bread"]
    return (
        <ul>{
        shopplingItems.map((shopplingItems, index) =>(
            <li key={index}>{shopplingItems}</li>
        ))
        }
            
            
        
        </ul>
    )
}

export default ShoppingList;








/**
 * 01 Displaying a Static List of Items
 * 
 * Create a new functional component called "ShoppingList" in a file named "ShoppingList.js".
 * Inside the component, create a static array of shopping items (e.g., "Milk", "Eggs", "Bread").
 * Use the "map" function to iterate over the array, rendering a list item (<li>) for each shopping item.
 * Import and use the ShoppingList component in your "App.js" file.
 * 
 */