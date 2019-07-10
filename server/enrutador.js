/**
 * This library is required to create a websocket
 * @type {createApplication}
 */
const express = require('express');

const app = express();

/**
 * Make routes from url
 */
app.get('/', (req, res) => {
    res
        .status(200)
        .send('Something else')
        .end();

});

// Start the app
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});