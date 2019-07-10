const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'investigaciones-246121',
    keyFilename: '/Users/administrador/Documents/investigaciones-2cb7b6573a69.json',
});
'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res
        .status(200)
        .send('Something else')
        .end();
    let docRef = db.collection('users').doc('alovelace');

    let setAda = docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    });
    let aTuringRef = db.collection('users').doc('aturing');

    let setAlan = aTuringRef.set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    });

});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});