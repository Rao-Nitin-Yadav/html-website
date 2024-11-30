document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const loadMoreButton = document.getElementById('load-more');
    let additionalPostsLoaded = false;

    // Toggle the visibility of the full content in each blog post
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fullContent = this.nextElementSibling;
            if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                fullContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });

    // Load more blog posts when the "Load More" button is clicked
    loadMoreButton.addEventListener('click', function() {
        if (!additionalPostsLoaded) {
            // Create and append new blog posts
            const newPosts = `
                <div class="blog-post">
                    <h2>Exploring New Culinary Trends</h2>
                    <p>Stay ahead of the curve by exploring the latest trends in the culinary world...</p>
                    <button class="read-more">Read More</button>
                    <div class="full-content">
                        <p>From plant-based innovations to the rise of global fusion, the food industry is evolving at an unprecedented rate. In this post, we dive into some of the most exciting trends making waves in kitchens worldwide...</p>
                    </div>
                </div>
                <div class="blog-post">
                    <h2>How We Celebrate Local Producers</h2>
                    <p>Our community is at the heart of what we do...</p>
                    <button class="read-more">Read More</button>
                    <div class="full-content">
                        <p>We’re proud to work with some of the best local farmers, ranchers, and artisans, and in this post, we share more about the people who supply our kitchen with fresh, sustainable ingredients...</p>
                    </div>
                </div>
            `;
            // Add new posts to the main content
            document.querySelector('main').insertAdjacentHTML('beforeend', newPosts);

            // Reattach click events to the new "Read More" buttons
            const newReadMoreButtons = document.querySelectorAll('.read-more');
            newReadMoreButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const fullContent = this.nextElementSibling;
                    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
                        fullContent.style.display = 'block';
                        this.textContent = 'Read Less';
                    } else {
                        fullContent.style.display = 'none';
                        this.textContent = 'Read More';
                    }
                });
            });

            additionalPostsLoaded = true;
            loadMoreButton.textContent = 'No More Posts';
            loadMoreButton.disabled = true;
        }
    });
});