// Client-side JavaScript
// Include Stripe.js library

var stripe = Stripe('your_stripe_publishable_key');

var elements = stripe.elements();

var card = elements.create('card');

card.mount('#card-element');

card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

var form = document.getElementById('payment-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  stripe.createToken(card).then(function(result) {
    if (result.error) {
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  // Send the token to your server for processing
  fetch('/charge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: token.id })
  })
  .then(response => {
    if (response.ok) {
      // Payment successful, open congratulations page
      window.location.href = './congratilations.html';
      
    } else {
      // Payment failed, handle accordingly
    }
  });
}
