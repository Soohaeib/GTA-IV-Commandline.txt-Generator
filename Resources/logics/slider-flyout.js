// Add an event listener for input changes on range inputs
const rangeInputs = document.querySelectorAll('input[type="range"]');
rangeInputs.forEach((rangeInput) => {
  const button = rangeInput.parentElement.querySelector('.showValue');
  
  rangeInput.addEventListener('input', (event) => {
    const value = event.target.value;
    updateButtonValue(button, value);
  });

  // Set the initial button text when the page loads
  const initialValue = rangeInput.value;
  updateButtonValue(button, initialValue);
});

function updateButtonValue(button, value) {
  button.textContent = `${value}`;
}