// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// document.querySelector('html').onclick = function () {
//   alert('Ouch! Stop poking me!');
// }


// Changes Corvette image onClick.
let myCorvette = document.querySelector('img');

myCorvette.onclick = function () {
  let mySrc = myCorvette.getAttribute('src');
  if (mySrc === 'images/corvette-*.jpg') {
    myCorvette.setAttribute('src', 'images/corvette-*');
  } else {
    myCorvette.setAttribute('src', 'images/corvette-americanflag.jpg');
  }
}


//  Personalized Welcome Message.
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your Name: ');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are cool ' + myName + '!';
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are cool ' + storedName + '!';
}

myButton.onclick = function () { setUserName(); }