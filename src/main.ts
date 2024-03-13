// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

import { BackgroundImageRegsiterFactory, imageRegisterFactory } from './util/backgroundSelector.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img id="background-image" imageId="menu">
  </div>
  <button id="previous">
    點擊我後退
  </button>
  <button id="next">
    點擊我前進
  </button>
`;

window.onload = () => {
  const backgroundImageElement = document.querySelector<HTMLImageElement>('#background-image')!;
  backgroundImageElement.src = BackgroundImageRegsiterFactory.getImageArray()[0].imagePath;

  document.querySelector<HTMLButtonElement>('#previous')!.addEventListener('click', _e => {
    imageRegisterFactory.switchToPreviousImage();
    console.log('previous')
  });

  document.querySelector<HTMLButtonElement>('#next')!.addEventListener('click', _e => {
    imageRegisterFactory.switchToNextImage();
    console.log('next')
  });
};