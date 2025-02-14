import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import './base/01ConstLet';
// import './base/02Obj'
// import './base/03Arrays'
// import './base/04Functions'
// import './base/05DesestructObj'
// import './base/06DesestArrays'
// import './base/07ImpExp'
// import './base/08Promises'
// import './base/09FetchApi'
// import './base/10-axios'
import './base/11-async-await'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
  </div>
`

// console.log("Holiwis world")