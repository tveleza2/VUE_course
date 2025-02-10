import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import './base/01ConstLet';

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