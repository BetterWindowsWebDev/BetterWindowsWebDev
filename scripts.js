// JavaScript for the Image Gallery

const carousel = document.getElementById('carousel');
const slides = document.getElementById('slides');
const images = slides.getElementsByTagName('img');
const totalImages = images.length;
let currentIndex = 0;

// Event listener for the Next button
document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

// Event listener for the Prev button
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

// Function to update the position of the carousel based on the current index
function updateCarousel() {
    const offset = -carousel.clientWidth * currentIndex;
    slides.style.transform = `translateX(${offset}px)`;
}

// JavaScript to update the business hours based on the day of the week
document.addEventListener('DOMContentLoaded', function () {
    const hoursElement = document.getElementById('hours');
    const today = new Date().getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

    // Define the business hours
    const openHours = "Open Today 08:00 am – 05:00 pm";
    const closedHours = "Closed Sunday! Back Again Monday 08:00 am - 05:00 pm!";

    // Update the hours based on the day
    if (today === 0) { // Sunday
        hoursElement.textContent = closedHours;
    } else {
        hoursElement.textContent = openHours;
    }
});

// JavaScript for the Fading Header
document.addEventListener('scroll', function() {
    const header = document.getElementById('fading-header');
    const scrollY = window.scrollY;
    const fadeStart = 50; // The scroll position where the fade starts
    const fadeEnd = 300;  // The scroll position where the header becomes invisible

    if (scrollY >= fadeStart) {
        const opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        header.style.opacity = Math.max(opacity, 0);
        header.style.transform = `translateY(-${Math.min((scrollY - fadeStart) / 10, 10)}px)`;
    } else {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }
});

// Add more JavaScript functionality here as needed
