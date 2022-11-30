const db = require('./db')

const Post = db.sequelize.define('postagens',{

    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})
//Post.sync({force:true})//execute uma única vez e depois apague ou comente 
module.exports = Post //acesso o model post através de outros arquivos
