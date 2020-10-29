// Adapted from https://github.com/stripe-samples/checkout-one-time-payments/tree/master/client-only/client/html

var PUBLISHABLE_KEY =
  "pk_test_51H8rImAkSQQctVkLFFZmJad2KISXWeDzpOeJ6ZnbsruFA9yRdzR1VeyjvkQnHn2j5RUoxdhQHeeWmucZrJ7MZLqR00AwkWR4SW";

var DOMAIN = location.href.replace(/[^/]*$/, "");

var stripe = Stripe(PUBLISHABLE_KEY);

$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("success")) {
    var success = urlParams.get("success") === "true";
    if (success) {
      $("#payment").hide();
      $("#status").html(
        `Thank you for purchasing Biller! Access your order <a href="https://saasbase.dev">here</a>.`
      );
    } else {
      $("#status").html(
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
        successUrl: DOMAIN + "index.html?success=true",
        cancelUrl: DOMAIN + "index.html?success=false",
      })
      .then(handleResult);
  });

  var handleResult = function (result) {
    if (result.error) {
      console.log(result.error.message);
    }
  };
});
