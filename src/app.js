/* eslint-disable */
import "bootstrap";
import "./style.css";
import "/workspaces/Generador-de-excusas-en-Javascript/src/app.js";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "my phone ", "the car "];
let when = [
  "before the class.",
  "when I was sleeping.",
  "while I was exercising.",
  "during my lunch.",
  "while I was praying."
];

var ExcuseParts = {
  excuses: [who, action, what, when]
};

function GenerateExcuse() {
  let newExcuse = "";
  for (let i = 0; i < ExcuseParts.excuses.length; i++) {
    newExcuse +=
      ExcuseParts.excuses[i][
        Math.floor(Math.random() * ExcuseParts.excuses[i].length)
      ];
  }
  document.getElementById("excuse").innerHTML = newExcuse;
}

window.onload = function() {
  //write your code here
  GenerateExcuse();
};
