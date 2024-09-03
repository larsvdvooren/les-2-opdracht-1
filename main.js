import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const viteLogoImg = document.querySelector('.logo')
const jsLogoImg = document.querySelector('.logo.vanilla')
let rotationAngle = 0; //heb er maar 1, moet ze koppelen aan ieder logo

viteLogoImg.addEventListener('click', function () {
  rotate(viteLogoImg);
  console.log("viteRotate");
});

jsLogoImg.addEventListener('click', function () {
  rotate(jsLogoImg);
  console.log("jsRotate");
}
);


function rotate(object) {
  //object.setAttribute("style", "transform rotate(90deg)");
  rotationAngle = (rotationAngle + 90) % 360;
  object.style.transform = `rotate(${rotationAngle}deg)`;;
  //document.getElementById(object).style.transform = "rotate(90deg)";
}



//document.getElementById("jsLogoImg").style.transform =  "rotate(-90deg)";

// viteLogo.onclick = document.getElementById("viteLogo").style.transform = "rotate(90deg)";
// jsLogo.onclick = document.getElementById("jsLogo").style.transform = "rotate(-90deg)";
