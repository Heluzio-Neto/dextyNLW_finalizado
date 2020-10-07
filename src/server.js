//servidor
const express = require ('express')
const server = express()

const {
        pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
} = require('./pages')
//configurar o nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//inicio de configuração do server
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos (css, scripts e imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do server
.listen(5500)