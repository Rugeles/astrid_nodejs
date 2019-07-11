class Usuarios {

    constructor(){
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
}