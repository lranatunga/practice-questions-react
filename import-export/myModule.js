export function greet (name){

    return `Hello ${name}!`
};



 class Person {
    constructor(name, age){
        this.name=name;
        this.age= age;
    }
}
const person2 = new Person ('Kate', 30)
export default Person;


/**
 * 01
 * 
 * Create a module in a file called myModule.js that exports a function called greet that takes
 * a name parameter and returns a greeting message. Import the module in another file called
 * main.js and use the greet function to greet a user with their name.
 * 
 */


/**
 * 05
 * 
 * Create a module in a file called myModule.js that exports a class called Person with two
 * properties: name and age. Import the module in another file called main.js and use the
 * Person class to create some instances of a person with different names and ages.
 * 
 */