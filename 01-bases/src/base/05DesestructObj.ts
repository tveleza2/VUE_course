interface Hero{
    name:string;
    age:number;
    codeName:string;
    power?:string;
}

interface CreateHeroArgs{
    name:string;
    age:number;
    codeName:string;
    power?:string;
}


export const person:Hero = {
    name: "Tony",
    age: 45,
    codeName: "Ironman",
    // power: "money",
}
// const {age,name,power= 'No Tiene'} = person;
// console.log({age,name,power})


const createHero = ({name,age,codeName,power}:CreateHeroArgs) => ({
    name: name,
    age:age,
    codeName: codeName,
    power: power??"No tiene",
})



console.log(createHero(person))