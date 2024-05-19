document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
  
    renderCart();
  
    function renderCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
      });
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    document.getElementById('checkout-button').addEventListener('click', () => {
      alert('Gracias por su compra!');
      localStorage.removeItem('cart');
      cart.length = 0;
      renderCart();
    });
  });
  