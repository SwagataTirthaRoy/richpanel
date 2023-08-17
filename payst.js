document.addEventListener("DOMContentLoaded", () => {
  const stripe = Stripe('pk_test_51NflDrSIIufrXUJY7U6TslCrREUakAqrmh27bk0I83qcEFZSzYJYlFmNoPEIAi4Kex5wEzNK4dBAQ7J46m7jna5u00paV4gkBo');
  const elements = stripe.elements();
  const cardElement = elements.create('card');
  
  cardElement.mount('#card-element');
  
  const form = document.getElementById('payment-form');
  const errorContainer = document.getElementById('error-message');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const { token, error } = await stripe.createToken(cardElement);
    
    if (error) {
      errorContainer.textContent = error.message;
    } else {
      console.log(token);
    }
  });
});
