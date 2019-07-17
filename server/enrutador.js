/**
 * This library is required to create a websocket
 * @type {createApplication}
 */
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

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

app.get('/realtime-sample', (req, res)=>{
   res.render('realtime', {page: "Realtime Firebase wit View Sample", menuId:"realtime"});
});

io.on('connection', (socket)=>{
    console.log("New Connection");
    socket.on("chat", (data)=>{
        io.emit("newMessage", {msg: "Se ha recibido un nuevo mensaje"});
    });
});

/**
 *
 * @type {string | number}
 */
const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});