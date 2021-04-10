const express = require('express')
const app = express()
//helps me to connect to the database
const MongoClient = require('mongodb').MongoClient
const PORT = 8001

let db,
    dbConnectionStr = 'mongodb+srv://jenntoops:Corky1266Toops@cluster0.6uysc.mongodb.net/todo?retryWrites=true&w=majority',
    dbName = 'todo'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Hey, connected to ${dbName} database`)
        db = client.db(dbName)
    }) .catch(err => {
        console.log(err)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index.ejs')    
})



    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT} port`)
    })
