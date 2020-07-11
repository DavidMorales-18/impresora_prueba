const mongoose = require('mongoose')
let uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema; //Un esquema que me representa la abse de datos 

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es rol valido'
}

let usuarioSchema = new Schema({
    marca: {
        type: String,
        required: [true, 'El marca es Requerido']
    },
    modelo: {
        type: String,
        required: [true, 'El modelo es Requerido']
    },
    serie: {
        type: Number,
        required: [true, 'El Serie es Requerido']
    },
    color: {
        type: Boolean,
        default: false
    },
    ip: {
        type: String,
        required: [true, 'El IP es Requerido']
    },
    cont: {
        type: Number,
        default: 0
    },
    precio: {
        type: Number,
        required: [true, 'El Precio es Requerido']

    },

    email: {
        type: String,
        required: false,
    },




});



usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' })


usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

module.exports = mongoose.model('usuario', usuarioSchema);