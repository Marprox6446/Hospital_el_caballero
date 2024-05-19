document.querySelector('.toggle-menu').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('open');
  });
  
  const galleryImages = document.querySelectorAll('.gallery-images img');

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      image.classList.add('zoomIn');
      setTimeout(() => {
        image.classList.remove('zoomIn');
      }, 1000);
    });
  });

  const testimonials = document.querySelectorAll('.testimonial');

testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseenter', () => {
    testimonial.classList.add('rotate');
  });

  testimonial.addEventListener('mouseleave', () => {
    testimonial.classList.remove('rotate');
  });
});

fetch('url-del-blog')
  .then(response => response.json())
  .then(data => {
    const blogPosts = document.querySelector('.blog-posts');
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
      blogPosts.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error:', error));


  const form = document.querySelector('.contact-form form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos.');
  } else {
    alert('¡Mensaje enviado con éxito!');
    form.reset();
  }
});


const testimonialContainer = document.querySelector('.testimonial-container');
const contactForm = document.getElementById('contactForm');

function addTestimonial(name, message) {
  const testimonial = document.createElement('div');
  testimonial.classList.add('testimonial');
  testimonial.innerHTML = `<p><strong>${name}:</strong> ${message}</p>`;
  testimonialContainer.appendChild(testimonial);
}

function showThankYouMessage() {
  alert('¡Gracias por valorarnos! Tu testimonio ha sido registrado.');
}

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  addTestimonial(name, message);
  showThankYouMessage();

  contactForm.reset();
});

// Función para ajustar la posición de los botones al desplazar la página
window.onscroll = function() {
  const buttonsContainer = document.querySelector('.top-right-buttons');
  const content = document.querySelector('.content');
  const distanceFromTop = content.offsetTop;

  if (window.pageYOffset > distanceFromTop) {
    buttonsContainer.style.top = window.pageYOffset - distanceFromTop + 20 + 'px';
  } else {
    buttonsContainer.style.top = '20px';
  }
};
