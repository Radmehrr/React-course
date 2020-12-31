
const person = {
    name: 'Radmer',
    age: 24,
    location: {
        city: 'shiraz',
        temp: 92
    }
};

const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;   
if(city && temperature) {
    // console.log(`its ${temperature} in ${city}.`)
}

const address = ['1299 S Juniper Street' , 'Philadelphia' , 'Pennsylvania' , '19147'];

const [ ,shahr , state] = address;

// console.log(`You are in ${shahr} ${state}.`);

const item = ['Cofee (hot)' , '$2.00' , '$2.50' ,'$2.75'];

const [cofee , , medium] = item;
console.log(`A medium ${cofee} costs ${medium} `)