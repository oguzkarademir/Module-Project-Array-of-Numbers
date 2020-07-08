'use strict';
console.log('--- loading: add number');

const addNumberHandler = () => {
  console.log('\n--- calling: add number handler');

  const userInput = prompt('enter a number to add:');
  const userNumber = Number(userInput);
  console.log('userInput:', typeof userInput, '\n', userInput);
  console.log('userNumber:', typeof userNumber, '\n', userNumber);

  if (typeof userNumber !== 'number') {
    alert(`${userInput} is not a valid number`);
    return;
  }

  console.log('numbers (before):', typeof numbers, '\n', numbers);
  // add the user's number to the main shared array of numbers
  numbers.push(userNumber);
  console.log('numbers (after):', typeof numbers, '\n', numbers);

  displayArrayHandler();
};
