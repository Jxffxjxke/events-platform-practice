let myName: string = 'Bob';
let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address: {
        street: string,
        city: string,
        country: string
    }
}

let person: Person = {
    name: 'Joe', 
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: 'Joe', 
    age: 42,
    isStudent: true
}