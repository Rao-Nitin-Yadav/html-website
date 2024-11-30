// Array of testimonials (simulating a database or API response)
const testimonials = [
    { quote: "Amazing food and great service!", author: "John Doe" },
    { quote: "The best restaurant I've ever been to.", author: "Jane Smith" },
    { quote: "An unforgettable dining experience. Highly recommend!", author: "Emily Johnson" },
    { quote: "The staff was incredibly friendly, and the food was delicious.", author: "David Brown" },
    { quote: "I can’t wait to come back. 5 stars all the way!", author: "Sara Lee" },
    { quote: "A delightful experience with great ambiance.", author: "Tom Harris" },
    { quote: "The dessert was to die for. Totally worth the visit.", author: "Chloe Green" },
    { quote: "Great atmosphere, wonderful service, and the food was superb.", author: "James Williams" }
];

let testimonialIndex = 0;
const testimonialsPerLoad = 3; // Number of testimonials to load at a time

// Function to load the testimonials
function loadMoreTestimonials() {
    const testimonialList = document.getElementById("testimonial-list");

    // Load the next set of testimonials
    for (let i = 0; i < testimonialsPerLoad; i++) {
        if (testimonialIndex < testimonials.length) {
            const testimonial = testimonials[testimonialIndex];
            const testimonialElement = document.createElement("div");
            testimonialElement.classList.add("testimonial");

            // Create testimonial content
            testimonialElement.innerHTML = `
                <p>"${testimonial.quote}"</p>
                <span>- ${testimonial.author}</span>
            `;
            testimonialList.appendChild(testimonialElement);

            testimonialIndex++;
        }
    }

    // If there are no more testimonials to load, hide the "Load More" button
    if (testimonialIndex >= testimonials.length) {
        document.getElementById("load-more").style.display = "none";
    }
}

// Initial load of testimonials when the page loads
window.onload = function() {
    loadMoreTestimonials();
};