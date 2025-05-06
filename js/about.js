// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll Animation for About Section
  window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
  
    if (sectionPosition < window.innerHeight - 150) {
      aboutSection.classList.add('fade-in');
    }
  });
  
  // Add class to fade in when scrolled into view
  document.querySelector('.about').classList.add('fade-in');
  
  