var secret = Meteor.settings.private.stripe.testSecretKey;
var Stripe = StripeAPI(secret);

stripeCreateCustomer: function(token, email){
    // Note: we'd check() both of our arguments here, but I've stripped this out for the sake of brevity.

    var stripeCustomer = new Future();

    Stripe.customers.create({
        source: token,
        email: email
    }, function(error, customer){
        if (error){
            stripeCustomer.return(error);
        } else {
            stripeCustomer.return(customer);
        }
    });

    return stripeCustomer.wait();
}