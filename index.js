// Write your code here!
// Remove the 'main' element from the DOM
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Edrick Muthamia is the champion';

// Append the new <h1> to the document body
document.body.append(newHeader);