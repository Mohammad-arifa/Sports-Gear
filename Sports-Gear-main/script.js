 /* nav bar start here */
//animated text 
// Array of words for rotating sports equipment names
const words = ["Cricket Kit", "Football Kit", "Tennis Kit", "Basketball Kit", "Hockey Kit"];
let index = 0;

// Function to change the text every 2 seconds
function changeText() {
  const textElement = document.querySelector(".changing-text");

  // Reset animation to allow for smooth transition
  textElement.style.animation = 'none';
  void textElement.offsetWidth;  // Trigger reflow
  textElement.textContent = words[index];

  // Re-enable the animation
  textElement.style.animation = '';

  // Cycle through the words
  index = (index + 1) % words.length;
}

// Call the changeText function every 2 seconds
setInterval(changeText, 2000);

//ham button for hiding nav bar in element

// Get the menu icon that will trigger the toggle
const menuIcon = document.querySelector('.menu-icon');
// Get the elements to hide (nav-icon and nav-links)
const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');

// Add event listener to the menu icon for the click event
menuIcon.addEventListener('click', function() {
  // Toggle visibility by adding or removing the 'hidden' class
  navIcon.classList.toggle('hidden');
  navLinks.classList.toggle('hidden');
  this.classList.toggle('toggle');
});
 /* nav bar endded here */

 


