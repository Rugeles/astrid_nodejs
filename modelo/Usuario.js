class Usuario {

    /**
     *
     * @param id
     * @param nombre
     * @param apellido
     */
    constructor(id=1, nombre='', apellido='') {
        /**
         *
         * @type {number}
         * @private
         */
        this._id = id;
        /**
         *
         * @type {string}
         * @private
         */
        this._nombre = nombre;
        /**
         *
         * @type {string}
         * @private
         */
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
module.exports=Usuario;