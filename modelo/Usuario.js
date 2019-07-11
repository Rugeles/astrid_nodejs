class Usuario {

    /**
     *
     * @param id
     * @param nombre
     * @param apellido
     */
    constructor(id=1, nombre='', apellido='') {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    /**
     *
     * @returns {number}
     */
    get id() {
        return this._id;
    }

    /**
     *
     * @param value
     */
    set id(value) {
        this._id = value;
    }

    /**
     *
     * @returns {string}
     */
    get nombre() {
        return this._nombre;
    }

    /**
     *
     * @param value
     */
    set nombre(value) {
        this._nombre = value;
    }

    /**
     *
     * @returns {string}
     */
    get apellido() {
        return this._apellido;
    }

    /**
     *
     * @param value
     */
    set apellido(value) {
        this._apellido = value;
    }
}