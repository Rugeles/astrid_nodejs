/**
 * This library is required to create a websocket
 * @type {createApplication}
 */
const express = require('express');

var bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'))
app.set('views', '/public/views');
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(bodyParser.json());

/**
 * Make routes from url
 */
app.get('/', (req, res) => {
    res
        .status(200)
        .send('Something else')
        .end();

});

app.get('/firebase', (request, response) =>{
    response
        .render('firebase_inicial.html');
});

// Start the app
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});