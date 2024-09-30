// Smooth Scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1000,  // Duration of the animation in milliseconds
  });
  
  // Dark Mode Toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Contact Form Validation
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Validate the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || subject === '' || message === '') {
      formMessage.textContent = 'Please fill out all fields.';
      formMessage.style.display = 'block';
      formMessage.classList.remove('success');
      return;
    }
  
    if (!validateEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.display = 'block';
      formMessage.classList.remove('success');
      return;
    }
  
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.display = 'block';
    formMessage.classList.add('success');
    contactForm.reset();
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  