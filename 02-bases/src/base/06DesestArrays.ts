// const sayayinsArray = ['Goku','Vegetta','Trunks','Goten'];
// const[g,v,t,g2,g3="Pam"] = sayayinsArray;
// console.log({g,v,t,g2,g3});

const returnArray = () => {
    return[123,"abc"] as const;
}

const[numbers,letters] = returnArray();
console.log(numbers*2,letters.toLowerCase());