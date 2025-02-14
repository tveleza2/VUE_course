import heroes, {type Owner} from "../data/heroes";

// console.log(heroes,owners);


export const getHeroById = (id:number) => {
    return heroes.find(hero => hero.id === id);
}

// export const getHeroByOwnerId = (ownerId:number) =>{
//     return heroes.filter(hero => hero.owner === owners[ownerId])
// }

export const getHeroByOwner = (owner:Owner) =>{
    return heroes.filter(hero => hero.owner === owner)
}
// console.log(getHeroByOwner("Marvel"));



