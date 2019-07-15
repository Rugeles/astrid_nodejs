/**
 * Es necesario crear una constante por cada
 * objeto que se desea incluir a una clase,
 * ademas se debe asegurar que la clase que se desea importar
 * tenga la propiedad module.exports
 * @type {ConnectableClass}
 */
const ConnectableClass=require("../modelo/ConnectableClass");
/**
 *
 * @type {Usuario}
 */
const Usuario=require("../modelo/Usuario");

class Usuarios extends ConnectableClass{

    /**
     * Constructor necesario
     * para la creacion
     * de una instancia
     */
    constructor(){
        super();
        /**
         *
         * @type {Usuario}
         * @private
         */
        this._usuario=new Usuario();
    }


    /**
     *
     * @returns {Usuario}
     */
    get usuario() {
        return this._usuario;
    }

    /**
     *
     * @param value
     */
    set usuario(value) {
        this._usuario = value;
    }

    /**
     * Metodo para la insercion de un usario
     * en la base de datos NoSql Firebase
     * @param usuario
     */
    insertUsuario(usuario=null){

    }

    /**
     * Consulta en tiempo real
     */
    consultarUsuarios(){
        this._dataBase.collection('usuarios').doc('1098770461').onSnapshot(
            documentSnapshot =>{
                if (documentSnapshot.exists) {
                    console.log(documentSnapshot.data().nombre);
                }
            }
        )


    }
}
module.exports=Usuarios;