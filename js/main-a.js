'use strict';

// Select buttons
const addButton = document.querySelector('#add');
const changeButton = document.querySelector('#change');
const toggleButton = document.querySelector('#toggle');

// Selector elements
const firstP = document.querySelector('p:first-child');
const secondP = document.querySelector('p:nth-child(2)');
const thirdP = document.querySelector('p:last-child');

// Create eventListeners
addButton.addEventListener('click', (evt) => {
  firstP.classList.add('red');
});

changeButton.addEventListener('click', (evt) => {
  if(secondP.classList.contains('red')){
    secondP.classList.replace('red' , 'blue');
  } else {
    secondP.classList.replace('blue', 'red');
  }
});

toggleButton.addEventListener('click', (evt) => {
    thirdP.classList.toggle('green');
});
