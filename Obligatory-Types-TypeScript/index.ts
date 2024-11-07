let myName: string = 'Bob';
let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Address = {
        street: string,
        city: string,
        country: string
    }

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
}

let person: Person = {
    name: 'Joe', 
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: 'Joe', 
    age: 42,
    isStudent: true,
        address: {
        street: '123 Main',
        city: 'Anytown',
        country: 'UK'
    }
}

const displayInfo = (person: Person) => {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person)