// console.log("Inicio");

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07ImpExp"


// new Promise((resolve, reject)=>{
//     // console.log("Cuerpo de la promesa")
//     setTimeout(()=>{
//         // resolve("Mi amigo cumplió");
//         reject("Mi amigo no cumplió");
//     },1000)
    
// })
//  .then((message)=>console.log(message))
//  .catch(errorMessage => console.log(errorMessage))
//  .finally(() => console.log("Fin de la promesa"));
// console.log("Fin");


const getHeroByIdAsync = (id:number):Promise<Hero> => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const hero = getHeroById(id);
            hero?resolve(hero):reject(`No se encontró heroe con id ${id}`);
            return;
        },500)
    })
};

getHeroByIdAsync(200)
    .then(hero=>{console.log(`El heroe es ${hero.name}`);})
    .catch((message)=>{alert(message);})
    .finally(()=>{console.log("Fin promesa");})
