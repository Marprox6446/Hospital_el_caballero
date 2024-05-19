// JavaScript para manejar la funcionalidad del acordeón
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      button.classList.toggle('active');
  
      if (button.classList.contains('active')) {
        content.style.display = 'block';
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.display = 'none';
        content.style.maxHeight = null;
      }
    });
  });
  