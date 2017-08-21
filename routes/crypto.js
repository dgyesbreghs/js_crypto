var Client = require('coinbase').Client;
var client = new Client({'apiKey': process.env.CB_API_KEY, 'apiSecret': process.env.CB_API_SECRET});

module.exports = function(request, response) {
    client.getAccounts({}, function(err, accounts) {
        var account;
        accounts.forEach(function(account) {
        if (account.currency == "ETH") {
            delete account.client;
            response.send(account);
        }
        });
    });
}