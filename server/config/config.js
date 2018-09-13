/**
 * Configuracion del puerto
 */

process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno
 * 
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * 
 * Database 
 */
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:nderacore90@ds155862.mlab.com:55862/cafe';
}

process.env.URLDB = urlDB;