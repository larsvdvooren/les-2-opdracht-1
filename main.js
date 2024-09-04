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

// fetch(
//   "https://raw.githubusercontent.com/larsvdvooren/les-2-opdracht-1/master/style.css"
// )
// .then(response => response.text())
// .then(text => {
//   console.log(text)
// });

// fetch(
//   "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
// )
// .catch(err => {
//   console.error(err.message);
// })

// .then (function(response) {
//   return response.text();
// })
// .then( language =>

//   language.forEach(
//   //console.log(html)
//   `<h2>A few programming languages</h2>
// <ul id='languageList'>
// <th
// </ul>`
//   ));
// // .then(response => response.text())
// .then(html => {
//   return response.text();
  // const parser = new DOMParser()

  // const doc = parser.parseFromString(html, "text/html")

  // console.log(doc)
// }

//   )







//document.getElementById("jsLogoImg").style.transform =  "rotate(-90deg)";

// viteLogo.onclick = document.getElementById("viteLogo").style.transform = "rotate(90deg)";
// jsLogo.onclick = document.getElementById("jsLogo").style.transform = "rotate(-90deg)";
