document.addEventListener('DOMContentLoaded', function() {
    // Get all "Read More" buttons
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the display of the content
            const content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = 'Read Less'; // Change button text
            } else {
                content.style.display = 'none';
                this.textContent = 'Read More'; // Change button text back
            }
        });
    });
});