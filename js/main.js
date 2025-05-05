// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 1000);
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mainNav.classList.contains('active')) {
          menuToggle.classList.remove('active');
          mainNav.classList.remove('active');
          document.body.classList.remove('no-scroll');
        }
      }
    });
  });
  
  // Theme switcher
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  
  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
      this.reset();
    });
  }
  
  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .about-content, .about-image');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const animationPoint = windowHeight - 100;
      
      if (elementPosition < animationPoint) {
        element.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initialize
  
  // Counter animation
  const stats = document.querySelectorAll('.stat-number');
  if (stats.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stats.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCount = () => {
              current += step;
              if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
              } else {
                stat.textContent = target;
              }
            };
            
            updateCount();
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stats-grid'));
  }