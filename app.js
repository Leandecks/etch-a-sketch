"use strict";
console.log("JS Started")

// Create the grid

const container = document.querySelector("#container");

for (let j = 0; j < 16; j++) {
  let gridLine = document.createElement("div");
  gridLine.classList.add("line");
  for (let i = 0; i < 16; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add("element");
    gridLine.appendChild(gridDiv);
  }
  container.appendChild(gridLine);
}

// Sketching function

let element = document.querySelectorAll(".element");
let line = document.querySelectorAll(".line");

element.forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black";
  });
});

// Change grid size

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let cellsInput = prompt("How many cells do you want per side?");
  if (cellsInput > 100) {
    alert("Number to high!");
  } else {
    
    line.forEach(ln => {
      ln.remove();
    });
    element.forEach(el => {
      el.remove();
    });
    
    for (let j = 0; j < cellsInput; j++) {
      let gridLine = document.createElement("div");
      gridLine.style.height = `${32 / cellsInput}rem`;
      gridLine.classList.add("line");
      for (let i = 0; i < cellsInput; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("element");
        gridLine.appendChild(gridDiv);
      }
      container.appendChild(gridLine);
    }
  
    element = document.querySelectorAll(".element");
    line = document.querySelectorAll(".line");
    element.forEach(element => {
      element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "black";
      });
    });
  }
});

// RGB button

const rgbButton = document.querySelector("#rgb");
let ran1 = Math.round(Math.random() * 255);
let ran2 = Math.round(Math.random() * 255);
let ran3 = Math.round(Math.random() * 255);
let ranRgb = `rgb(${ran1}, ${ran2}, ${ran3})`

rgbButton.addEventListener("click", () => {
  element.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = ranRgb;
      
      ran1 = Math.round(Math.random() * 255);
      ran2 = Math.round(Math.random() * 255);
      ran3 = Math.round(Math.random() * 255);
      ranRgb = `rgb(${ran1}, ${ran2}, ${ran3})`
    });
  });
});

// Eraser button

const eraser = document.querySelector("#delete");

eraser.addEventListener("click", () => {
  element.forEach(element => {
    element.style.backgroundColor = "white";
  });
});

// Color picker

const colorPicker = document.querySelector("#colorpicker");

function changeColor(event) {
  element.forEach(element => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = event.target.value;
    });
  });
}

colorPicker.addEventListener("input", changeColor, false);
colorPicker.addEventListener("change", changeColor, false);