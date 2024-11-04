// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Contact Popup Form Functionality
  const contactBtn = document.querySelector('.contact-btn');
  const contactForm = document.getElementById('contactForm');
  const closeBtn = document.querySelector('.close-btn');
  
  contactBtn.addEventListener('click', () => {
    contactForm.style.display = 'flex';
  });
  
  closeBtn.addEventListener('click', () => {
    contactForm.style.display = 'none';
  });
  
  function closeForm() {
    contactForm.style.display = 'none';
  }
  
  // Close form when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === contactForm) {
      contactForm.style.display = 'none';
    }
  });
  