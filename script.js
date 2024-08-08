document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
    });
    
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        
        if(name === '' || email === '' || message === '') {
            alert('All fields are required.');
        } else {
            alert('Form submitted successfully!');
            
        }
    });
    
});
