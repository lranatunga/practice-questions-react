const RandomNumbers = () => {
    const numberArray = []
   for(let i = 0; i <10; i++){ 
    let randomNumber = Math.floor(Math.random()*100) + 1;
    numberArray.push(randomNumber)
}
return (
    <ul>
        {numberArray.map((number,index) => {
           return <li key={index}>{number}</li>
        }
        )}
        
    </ul>
)
}

export default RandomNumbers;












/**
 * 03 Generating a List of Random Numbers
 * 
 * Create a new functional component called "RandomNumbers" in a file named "RandomNumbers.js".
 * Inside the component, create an array of 10 random numbers between 1 and 100.
 * Use the "map" function to iterate over the array, rendering a list item (<li>) for each
 * random number.
 * Import and use the RandomNumbers component in your "App.js" file.
 * 
 */