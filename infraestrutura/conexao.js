const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:  'programadora2022',
    database: 'agenda-pet'
})

module.exports = conexao