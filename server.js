const express = require('express');
const app = express();
var router = express.Router();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/vuni'));
// Start the app by listening on the default

// Heroku port
app.get('/', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/vuni/index.html'));
});


app.listen(process.env.PORT || 8080);