const Sequelize = require('sequelize')

//Conexão com Banco de Dados

const sequelize = new Sequelize ('postapp', 'root', 123456, {
    host: 'localhost',
    dialect: 'mysql'
})

//Exportar o Sequelize e sequelize no mesmo arquivo
//Auxilia pois cada models terá um arquivo individual.
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
//Dica: Boa pratica colocar nome de cada models primeira letra maiuscula e no singular