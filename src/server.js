const express = require("express")
const server = express()

// Configurar pasta publica
server.use(express.static("public"))

// Utilizando Template Engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurando caminho para a página inicial
// req: requisição  res: resposta
server.get("/", (req, res) =>{
    return res.render("index.html", {title: "titulo"})
})

server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) =>{
    return res.render("search-results.html")
})
    
// Ligar o servidor
server.listen(3000)
