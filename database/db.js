//Aca se realiza la conexion a base de datos

const pg = require('pg')
const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'rutasegura',
    port: 5432
});
 
 
pool.connect((error) => {
    if (error) {
        console.log('El error de conexión es: ' + error);
        return;
    }
    console.log('Conectado a la base de datos PostgreSQL');
});

module.exports = pool;