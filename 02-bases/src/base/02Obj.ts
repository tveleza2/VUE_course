export const person = {
    lastName: "Stark",
    age:45,
    address:{
        city:"New York",
        zip: 54040,
        lat: 14.23332,
        lng: 34.566667
    }
};
person.age = 55;

const person2 = structuredClone(person);
person2.address.city = "LA"

console.log(person);
console.log(person2);


