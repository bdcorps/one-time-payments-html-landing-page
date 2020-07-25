// Adapted from https://github.com/stripe-samples/checkout-one-time-payments/tree/master/client-only/client/html

var PUBLISHABLE_KEY =
  "pk_test_51H8rt4JZydwyZEHEJVKNfKacIDRxR0i7YgprjgpREhVNUKr8v2a9yz8S9ZAiWdGKN8vM2KFHYukjTU0eAOzrk1Qe00KyY6NxL4";

var DOMAIN = location.href.replace(/[^/]*$/, "");

var stripe = Stripe(PUBLISHABLE_KEY);

var handleResult = function (result) {
  if (result.error) {
    console.log(result.error.message);
  }
};

$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("success")) {
    var success = urlParams.get("success") == "true";
    if (success) {
      $("#payment").hide();
      $("#status").text(
        "Thank you for purchasing Biller! Your order will arrive within the hour."
      );
    } else {
      $("#status").text(
        "There was an error processing your payment. Please try again."
      );
    }
  }

  $("#order-btn").click(function (event) {
    var checkoutMode = $(event.target).data("checkoutMode");
    var priceId = $(event.target).data("priceId");
    var items = [{ price: priceId, quantity: 1 }];

    stripe
      .redirectToCheckout({
        mode: checkoutMode,
        lineItems: items,
        successUrl: DOMAIN + "main.html?success=true",
        cancelUrl: DOMAIN + "main.html?success=false",
      })
      .then(handleResult);
  });
});
