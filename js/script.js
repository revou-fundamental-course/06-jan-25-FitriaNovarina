
// JavaScript to show the popup card with animation when the page loads
window.onload = function () {
    document.getElementById('popup-card').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Add 'show' class to trigger the animation
    setTimeout(function () {
        document.getElementById('popup-card').classList.add('show');
    }, 100); // Adding slight delay for smoother effect
};

// Close the popup when the close button is clicked
document.getElementById('close-popup').onclick = function () {
    document.getElementById('popup-card').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

// Close the popup if the user clicks on the overlay
document.getElementById('overlay').onclick = function () {
    document.getElementById('popup-card').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    const offset = -index * 100; // Move the carousel left by 100% of the current slide width
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        showSlide(currentIndex);
    } else {
        currentIndex = 0; // Loop back to the first slide
        showSlide(currentIndex);
    }
}

// Automatically move to the next slide every 3 seconds
let slideInterval = setInterval(nextSlide, 3000);

// Pause carousel on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    clearInterval(slideInterval); // Stop the slide transition on hover
});
carousel.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000); // Restart the slide transition after hover
});

// Make the carousel move on click
carousel.addEventListener('click', nextSlide);

// Initial setup to show the first slide
showSlide(currentIndex);

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3'); // Select the question header
        const answer = item.querySelector('p');   // Select the answer content

        // Hide all answers initially
        answer.style.display = 'none';

        // Add click event to toggle the visibility of the answer
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other open items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('p').style.display = 'none';
            });

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const groups = document.querySelectorAll('.testimonial-group');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    // Function to update the slider position
    function updateSlider(index) {
        const offset = -index * 100; // Geser sesuai indeks grup
        slider.style.transform = `translateX(${offset}%)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Add event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % groups.length; // Loop kembali ke grup pertama
        updateSlider(currentIndex);
    }, 5000);
});

// Select all elements to animate
const elementsToAnimate = document.querySelectorAll('.about-us, .image-container img, .split-text .text-container, .split-text .split img');

// Initially set elements to hidden
elementsToAnimate.forEach(element => element.classList.add('hidden'));

// Observer options
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger when 20% of the element is visible
};

// Callback for intersection observer
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the visible class
            entry.target.classList.remove('hidden'); // Remove the hidden class
        } else {
            entry.target.classList.remove('visible'); // Remove the visible class (optional)
            entry.target.classList.add('hidden'); // Reapply the hidden class (optional)
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each element
elementsToAnimate.forEach(element => observer.observe(element));

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
    );
}

// Function to handle adding and removing animation class
function animateProductsOnScroll() {
    const products = document.querySelectorAll('.featured-products .product');
    products.forEach(product => {
        if (isElementInViewport(product)) {
            product.classList.add('active'); // Add 'active' when in viewport
        } else {
            product.classList.remove('active'); // Remove 'active' when out of viewport
        }
    });
}

// Run the function on scroll and on page load
window.addEventListener('scroll', animateProductsOnScroll);
window.addEventListener('load', animateProductsOnScroll);

document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.05)';
        product.style.zIndex = '10';
    });

    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)';
        product.style.zIndex = '1';
    });
});



