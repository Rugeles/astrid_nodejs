class Usuarios extends ConnectableClass{

    /**
     * Constructor necesario
     * para la creacion
     * de una instancia
     */
    constructor(){
        super();
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
}