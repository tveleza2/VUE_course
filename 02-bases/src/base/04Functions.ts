// function greetPerson(name:string){
//     return `Hola ${name}`;
// }

// const greetPerson = (name:string) => {
//     return `Hola ${name}`;
// } 

// const greetPerson = (name:string) => `Hola ${name}`;


// const firstName = "Tomas";

// const getUser = (uid:string) => ({
//     uid: uid,
//     username: "Tony001",
// })

const heroes = [
    {
        id:1,
        name: "Batman",
    },
    {
        id:2,
        name: "Superman",
        power: "Strength",
    },
]

const hero = heroes.find((h) => h.id === 1)

console.log(hero?.power?.toUpperCase())