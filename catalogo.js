document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(product, price);
      });
    });
  
    function addToCart(product, price) {
      cart.push({ product, price });
      saveCart();
    }
  
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });
  
  