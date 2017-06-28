var client = require('./rpc_client');

// invoke 'add'
client.add(1, 20, function(response) {
    console.assert(response == 21);
});
