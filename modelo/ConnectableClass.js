/**
 * Esta clase debe ser heredada
 * en cada una de las clases
 * que vaya a ser operada en Firebase
 * para la conexion con la base de datos
 */
class ConnectableClass {

    /**
     * Constructor de la clase conectable
     */
    constructor() {
        /**
         *
         * @type {string}
         * @private
         */
        this._errorMessage=null;

        /**
         * Configuracion de firebase para la conexion
         * con la aplicacion correspondiente
         * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, databaseURL: string, authDomain: string}}
         * @private
         */
        this._firebaseConfig={
            apiKey: "AIzaSyAJYnbmUSdKl4tIVR564AyXAgFBWXonEWE",
            authDomain: "astrid-nodejs.firebaseapp.com",
            databaseURL: "https://astrid-nodejs.firebaseio.com",
            projectId: "astrid-nodejs",
            storageBucket: "astrid-nodejs.appspot.com",
            messagingSenderId: "254678220273",
            appId: "1:254678220273:web:e58eee2c0e51f892"
        };
        this.initConnection();
    }

    /**
     * Metodo para iniciar la conexion
     * con la base de datos en firebase
     */
    initConnection(){
        try{
            this._firebase=require("firebase/app");
            require("firebase/database");
            this._dataBase=this._firebase
                .initializeApp(this._firebaseConfig)
                .firestore();
        }catch (e) {
            this.errorMessage(e.message);
        }
    }



    /**
     * Returna el mensaje de error
     * durante algun movimiento en la
     * base de datos
     * @returns {string}
     */
    get errorMessage() {
        return this._errorMessage;
    }

    /**
     * Configura el mensaje de error
     * en la conexion
     * @param value
     */
    set errorMessage(value) {
        this._errorMessage = value;
    }
}