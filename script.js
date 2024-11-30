document.addEventListener('DOMContentLoaded', function() {

    // Handle navigation page redirection on menu click
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href');
            window.location.href = page;
        });
    });

    // Form submission behavior for reservation page
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const people = document.getElementById('people').value;

            // Show confirmation on reservation
            alert(`Reservation Confirmed for ${name} on ${date} at ${time} for ${people} guests.`);
            // Optionally reset the form
            reservationForm.reset();
        });
    }

    // Scroll-to-top button functionality (Optional)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '20px';
    scrollTopBtn.style.right = '20px';
    scrollTopBtn.style.padding = '10px';
    scrollTopBtn.style.backgroundColor = '#f39c12';
    scrollTopBtn.style.color = '#fff';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.borderRadius = '5px';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.display = 'none';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    fetch('data.json')
        .then(response => response.json()) // Parse JSON from the response
        .then(data => {
            // 2. Manipulate the DOM to display data
            const userInfoDiv = document.getElementById('user-info');
            userInfoDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Email:</strong> ${data.email}</p>
        `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

fetch('gallery.json')
    .then(response => response.json()) // Parse JSON from the response
    .then(data => {
        // 2. Manipulate the DOM to display data
        const userInfoDiv = document.getElementById('user-info');
        userInfoDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
            <p><strong>Email:</strong> ${data.email}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });