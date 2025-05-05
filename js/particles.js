// Configure particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 60, // Зменшена кількість для кращої видимості фону
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#00f0ff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.3, // Зменшена непрозорість
            "random": false
          },
          "size": {
            "value": 2, // Зменшений розмір
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00f0ff",
            "opacity": 0.1, // Зменшена непрозорість ліній
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.5, // Зменшена швидкість
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            }
          }
        }
      });
      
      // Додаємо z-index для коректного відображення
      const particles = document.getElementById('particles-js');
      if (particles) {
        particles.style.position = 'absolute';
        particles.style.zIndex = '0'; // Нижче контенту hero
        particles.style.top = '0';
        particles.style.left = '0';
        particles.style.width = '100%';
        particles.style.height = '100%';
      }
    }
  });