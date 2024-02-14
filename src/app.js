/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  domainGenerator();
};

function domainGenerator() {
  let pronoun = ["the", "our", "my"];
  let adj = ["great", "amazing", "magnificent", "superb"];
  let noun = ["ostrich", "ferrari", "kangaroo", "turtle"];
  let domain = [".com", ".net", ".io", ".us", ".gov"];
  var count = 0;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let o = 0; o < domain.length; o++) {
          count += 1;
          document.getElementById(
            "insertDomain"
          ).innerHTML += `<div>${count}. ${pronoun[i]}${adj[j]}${noun[k]}${domain[o]}</div>`;
        }
      }
    }
  }
  return;
}
