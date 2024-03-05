// // Navigation Menu:
// const navItems = document.getElementById("navItems");
// const btn = document.getElementById("btn");

// // Add event listener to toggle menu on click
// btn.addEventListener("click", function () {
//   navItems.classList.toggle("show"); // Add/remove "show" class for visibility
// });

// // Smooth Scroll:
// // Assuming you have anchor links in your navigation items:
// const links = document.querySelectorAll(".nav-items a");

// links.forEach(function (link) {
//   link.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default anchor link behavior

//     const targetSection = document.getElementById(link.hash.slice(1)); // Get target section element

//     // Use smooth scrolling animation:
//     window.scrollTo({
//       top: targetSection.offsetTop,
//       behavior: "smooth",
//     });
//   });
// });

// // Animations (Replace with your desired animations):

// // Example 1: Typing animation for "role" text
// const roleElement = document.querySelector(".role");
// const roleText = "AI & ML Engineer"; // Replace with your actual role

// let index = 0;
// let speed = 100;

// function typeWriter() {
//   if (index < roleText.length) {
//     roleElement.textContent += roleText.charAt(index);
//     index++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter();

// // Example 2: Fade-in animation for hero section elements
// const heroElements = document.querySelectorAll(".hero-section-left *");

// heroElements.forEach(function (element) {
//   element.classList.add("fade-in"); // Add a CSS class for fade-in animation
// });

// // Additional Notes:
// // - Remember to link this JavaScript file to your HTML using a <script> tag.
// // - Replace placeholder text and animations with your desired content and effects.
// // - For more complex functionalities, consider using JavaScript libraries or frameworks.
// // - Test your code incrementally and iterate based on your requirements.

document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = [
    "Full Stack Developer",
    "Web Developer",
    "Devops Engineer",
    "Backend Developer",
    "Programmer",
  ];

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector(".role").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }

  function startTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        startTextAnimation(0);
      }, 20000);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function () {
        startTextAnimation(i + 1);
      });
    }
  }

  startTextAnimation(0);
});
