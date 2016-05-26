

// Load the application singleton registry && util
var appName = require('application');

// Load existing config
appName.load.config('./config');

// Load routes
appName.load.routes('./routes');

// Start the app
appName.init();






// TODO: Asset management