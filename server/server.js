require('./config/config')
const express = require('express');
const app = express(); //objeto app de express
const bodyParser = require('body-parser') //
const mongoose = require('mongoose'); //libreria 


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // capa intemedia entre el servido (midelworg)
    /* Cada vez que se hace un asalicitud al servicio va estar ejecutandose  */

// parse application/json
app.use(bodyParser.json()) // 

//incluir rutas de / usuario
app.use(require('./routes/usuario'))


/* CONECCION CON LA BASE DE DATOS MONGODB  */
mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos ONLINE !!!');


    });


app.listen(process.env.PORT, () => { //Escuchara en el puerto 3000
    console.log("Escuchando en el puerto", process.env.PORT);
});

/* 
Post -> nuevos registros al servidor 
put -> Actualizar datos 
get -> obtener datos consultas 
dilite -> Eliminar archivos o registros pero no eliminar es mejor cambiar de estado a inactivo  */

/* succerssful : 200 ;Recuersos 
redireccion: 300 ; Te redirige a otro lado
client Error:400 ; Cuando el cliente hace mal su peticion 
server Error:500; Servido falla error mio
*/