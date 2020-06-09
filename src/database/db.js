// Importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()
// Criar o objeto que irá fazer oprerações no Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de Banco de Dados para nossas operações
//db.serialize(() => {
    // 1 Criar uma tabela com comandos SQL 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2 Inserir dados na tabela
    // const query = `
    // INSERT INTO places(
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?, ?, ?, ?, ?, ?, ?);
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsetData(err) {
    //     if (err) {
    //         return console.log(err)
    //     } 
    //     console.log("Cadastrado com Sucesso!")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsetData)

    // // 3 Consultar dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros.")
    //     console.log(rows)
    // })

   // 4 Deletar um dado na tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })