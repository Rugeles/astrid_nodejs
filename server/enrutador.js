/**
 * This library is required to create a websocket
 * @type {createApplication}
 */
const express = require('express');

const app = express();

/**
 *Se configura el motor de vista EJS
 */
app.set('view engine', 'ejs');
/**
 * Configura el delimitador para compilar codigo javascript
 */
app.set('view options', {delimiter: '%'});

app.set('views', 'public/view');
/**
 * Make routes from url
 */
app.get('/', (req, res) => {
    res.render('index', {page:'Home', menuId:'home'});
});
/**
 * Ruta de prueba para enviar a
 * el archivo de prueba de integracion
 * de firebase
 */
app.get('/firebase', (req, res) => {
    res.sendFile("firebase_inicial.html", {root:'/Users/administrador/WebstormProjects/investigaciones/astrid_nodejs/public/view'});

});



/**
 *
 * @type {string | number}
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});