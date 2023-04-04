const user = {
    name: 'Kate',
    age: 18,
}

export function getName (user){
   return (user.name);
}

export function getAge(user){
    return (user.age);
}


export  function numberArrayOne (number){
    let sum = 0
    const numbers1 = [1,2,3,4,5];
    for(let i = 0 ; i<numbers1.length; i++){
       sum += numbers1[i]  
    }
    return sum
}


const numbers = [1,2,3,4,5]
export default function (sum, number){
    return numbers.reduce((sum, number) => sum + number, 0)
}



/**
 * 03
 * 
 * Create a module in a file called utils.js that exports an object with two properties called
 * getName and getAge. 
 * getName should be a function that takes a user object as a parameter and returns their name,
 * while getAge should be a function that takes a user object as a parameter and returns their
 * age. 
 * Import the module in another file called main.js and use the getName and getAge functions to
 * get the name and age of a user.
 * 
 */


/**
 * 07
 * 
 * Create a module in a file called utils.js that exports a default function that takes an
 * array of numbers as a parameter and returns the sum of all the numbers. 
 * Import the module in another file called main.js and use the function to calculate the sum
 * of some numbers.
 * 
 */