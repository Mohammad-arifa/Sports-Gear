/* Rotating Text for Sports Equipment */
const words = ["Cricket Kit", "Football Kit", "Tennis Kit", "Basketball Kit", "Hockey Kit"];
let index = 0;


function changeText() {
  // Update the text
  document.querySelector(".changing-text").textContent = words[index];
  // Increment the index, reset if it reaches the end
  index = (index + 1) % words.length;
}
// Show the first word immediately
changeText();
setInterval(changeText, 2000);

// dropdown list for product
document.querySelector('.arif').addEventListener('click', function () {
  const dropdown = this.querySelector('.dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

/* Hamburger Button Toggle for Navbar */
const menuIcon = document.querySelector('.menu-icon');
const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navIcon.classList.toggle('hidden');
  navLinks.classList.toggle('hidden');
  menuIcon.classList.toggle('toggle');
});

//home slider swipper start here 

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
var product_swiper = new Swiper(".product-swiper", {
  effect: "coverflow",
  loop: true,
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

// product slider 2
var product_slider_2_swiper = new Swiper(".product_slider_2", {
  // slidesPerView: 5,
  // spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5, 
      spaceBetween: 30,
    },
  }
});

//find by category slider's javascript
var categories_swiper = new Swiper(".categories", {
  // slidesPerView: 4,
  // slidesPerGroup: 4,
  // spaceBetween: 30,
  // grid: {
  //   rows: 2,
  // },
  // spaceBetween: 30,     
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 8000,   
    disableOnInteraction: false,   
   },
  keyboard: {
    enabled: true,
  },

  // Add breakpoints for responsiveness
  breakpoints: {
    320: {               // Small mobile devices
      slidesPerView: 1.5,
      slidesPerGroup: 1.5,
      spaceBetween: 4,
      grid: {
        rows: 4,
      },
    },
    450: {               // Mobile devices
      slidesPerView: 2.8,
      slidesPerGroup: 2.8,
      spaceBetween: 6,
      grid: {
        rows: 3,
      },
    },
    768: {               // Tablets
      slidesPerView: 2.5,
      slidesPerGroup: 2.5,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1024: {               // laptop
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },

  },
});






// AOS javascript initialize  for  Scroll Animation with AOS
AOS.init({
  duration: 1000,  // Duration of the animation
  easing: 'ease-out', // Easing function
  once: false, // Animation happens every time while scrolling down and up
});



