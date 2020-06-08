const express = require("express")
const server = express()

// Pegar o Banco de Dados
const db = require("./database/db")

// Configurar pasta publica
server.use(express.static("public"))

// Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

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

server.get("/create-point", (req, res) => {

    // req.query: query strings da nossa url
    req.query

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // Inserir dados no Banco de Dados

    const query = `
     INSERT INTO places(
         image,
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?, ?, ?, ?, ?, ?, ?);
     `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsetData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no Cadastro")
        } 
        console.log("Cadastrado com Sucesso!")
        console.log(this)

        return res.render("create-point.html", {saved: true})

    }

    db.run(query, values, afterInsetData)
})

server.get("/search-results", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // Pesquisa Vazia
        return res.render("search-results.html", { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city OR state LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

    // Mostrar a página HTML com os dados do Banco de Dados
    return res.render("search-results.html", {places: rows, total})
    })
})
    
// Ligar o servidor
server.listen(3000)
