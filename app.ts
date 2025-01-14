console.log('Well done!');

function add(n1: number, n2: number) {
    return n1 + n2
}

const number1: number = 5;
const number2: number = 2.8;

const result = add(number1, number2);
console.log(result);

// * Object
const person: {
    name: string;
    age: number;
    hobbies: string[]
} = {
    name: "Max",
    age: 30,
    hobbies: ['Sport', 'Cooking']
}
console.log(person.name);

// * Array
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

