// TODO: write your code here!
let sportBoxesElement = document.querySelectorAll('.clickable');
const sportBoxesArray = Array.from(sportBoxesElement)

const activateBox = (event) => {
  event.currentTarget.classList.toggle('active')
};

const bindBoxToClick = (box) => {
  box.addEventListener('click', activateBox);
};

sportBoxesArray.forEach(bindBoxToClick);
