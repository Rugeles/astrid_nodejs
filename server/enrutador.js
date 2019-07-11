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
/**
 * Ruta de prueba para enviar a
 * el archivo de prueba de integracion
 * de firebase
 */
app.get('/firebase', (req, res) => {
    res.sendFile("firebase_inicial.html", {root:'/Users/administrador/WebstormProjects/investigaciones/astrid_nodejs/public/view'});

});

app.get('/prueba', (req, res)=>{

    try {
        let usuarios=new Usuarios();
        res
            .status(200)
            .send("Sin problema");
    }catch (e) {
        res
            .status(200)
            .send(e.message);
    }
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