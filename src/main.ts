import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.ts'
import html from './div_element.html?raw'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html
    .replaceAll('${heroImg}', heroImg)
    .replaceAll('${typescriptLogo}', typescriptLogo)
    .replaceAll('${viteLogo}', viteLogo);

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
