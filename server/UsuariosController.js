
const Usuarios=require('../modelo/Usuarios');
class UsuariosController {

    /**
     *
     */
    constructor() {
        /**
         * Variable con la que va a
         * interactuar el controlador
         * @type {Usuarios}
         * @private
         */
        this._usuarios=new Usuarios();
    }

    /**
     * Esta función será la encargada
     * de procesar todas las peticiones
     * y delegar las clases necesarias
     * para ejecutar el procedimiento solicitado
     * @param request
     */
    processRequest(request, data){
        switch (request) {
            case 'ADD':
                this.agregarUsuario(data);
        }
    }

    /**
     * Esta función encargada de agregar los usuarios
     * utilizando las clases necesarias para llevar
     * a cabo este procedimiento
     * @param data
     */
    agregarUsuario(data, functionCallBack){
        this._usuarios.insertUsuario(data, (isInserted)=>{
            functionCallBack(isInserted);
        });
    }

    get usuarios() {
        return this._usuarios;
    }

    set usuarios(value) {
        this._usuarios = value;
    }
}
module.exports=UsuariosController;