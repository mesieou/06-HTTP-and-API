const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  const button = document.querySelector('.btn');
  button.addEventListener('click', (event) => {
    alert('Thank you!')
  });
  // TODO: Bind the `click` event to the button
  // TODO: On click, display `Thank you!` in a JavaScript alert!
};

displayAlertOnButtonClick(); // Do not remove!
