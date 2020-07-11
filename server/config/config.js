/* 
==================================================
PUERTO
==================================================
*/
process.env.PORT = process.env.PORT || 3000; //No sabes mos que puerto va asignarnos arriba en heroku y en consola 3000

/* Intalacion : npm i body-parser -------> obtener las peticiones en el body */



/* Vamos a instalar: mongoose 

mongodb+srv://<username>:<password>@cafe.jagyy.mongodb.net/test
*/

/* 
==================================================
ENTORNO
==================================================
*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

/* 
==================================================
BASE DE DATOS
==================================================
*/
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://impresora-user:IZHJooql1396@cluster0.zdha4.mongodb.net/Cluster0'
}
process.env.URLDB = urlDB;