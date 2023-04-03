 const person = {
    name: 'Jhon',
    age:15,
}

export function getName (person){
    console.log(person.name)
}

export function getAge(person){
    console.log(person.age)
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