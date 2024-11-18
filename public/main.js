// Wait for the DOM content to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading for 1.8 seconds
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1800); // Simulating loading
  });
  



  // carousel.js
export function initCarousel() {
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const serviceCards = document.querySelectorAll('.service-card');
  let currentIndex = 0;

  function changeCard() {
    // Remove the active class from the current card
    serviceCards[currentIndex].classList.remove('active');

    // Calculate the next index
    currentIndex = (currentIndex + 1) % serviceCards.length;

    // Add the active class to the new card
    serviceCards[currentIndex].classList.add('active');
  }

  function previousCard() {
    // Remove the active class from the current card
    serviceCards[currentIndex].classList.remove('active');

    // Calculate the previous index
    currentIndex = (currentIndex - 1 + serviceCards.length) % serviceCards.length;

    // Add the active class to the new card
    serviceCards[currentIndex].classList.add('active');
  }

  nextButton.addEventListener('click', changeCard);
  prevButton.addEventListener('click', previousCard);
}
