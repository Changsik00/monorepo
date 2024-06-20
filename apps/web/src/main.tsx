import { Header } from '@repo/ui/header'
import './style.css'
import typescriptLogo from '/typescript.svg'
import { Counter } from '@repo/ui/counter'
import { setupCounter } from '@repo/ui/setup-counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <button
    bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
    text="sm white"
    font="mono light"
    p="y-2 x-4"
    border="2 rounded blue-200"
  >
    Button
  </button>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: 'Web' })} 
    <div class="card">
      ${Counter()}
    </div>
    <div class="m-1">Hello</div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
