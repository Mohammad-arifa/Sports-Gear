 /* nav bar start here */
 //scroll effect
//  const nav = document.querySelector('nav');
//  window.addEventListener('scroll', function () {
//   const nav = document.querySelector('nav');
//   if (window.scrollY > 50) {
//       nav.classList.add('scrolled');
//   } else {
//       nav.classList.remove('scrolled');
//   }
// });

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

//home slider swipper start here 
// let homeswiper;
// window.onload = function () {
 const homeswiper = new Swiper('.homeswiper', {
  direction: 'horizontal',
  loop: true,
  effect: "cube",
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3000,   
    disableOnInteraction: false,   
   },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// document.getElementById('know-us-link').addEventListener('click', function () {
//   if (homeswiper) {
//     homeswiper.slideTo(1); // Navigates to slide 2 (index starts from 0, so 1 is the second slide)
//   }
// });
// };

const slidestop = document.querySelector('.homeswiper');

const stopAutoplay = () => {
  homeswiper.autoplay.stop();
};

const startAutoplay = () => {
  homeswiper.autoplay.start();
};

slidestop.addEventListener('mouseenter', stopAutoplay);
slidestop.addEventListener('mouseleave', startAutoplay);

slidestop.addEventListener('touchstart', stopAutoplay);
slidestop.addEventListener('touchend', startAutoplay);

 
 //product slider's javascript
var swiper = new Swiper(".product-swiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2000,   
    disableOnInteraction: false,   
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
 
// AOS javascript initialize  for  Scroll Animation with AOS
AOS.init({
  duration: 1000,  // Duration of the animation
  easing: 'ease-out', // Easing function
  once: false, // Animation happens every time while scrolling down and up
});

 

 