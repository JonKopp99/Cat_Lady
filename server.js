const express = require('express')
const app = express()
const cats = require('./cats.json')
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Endpoint 1 (Cat Name)
app.get('/cat/:name', (req, res) => {

    res.json(req.params);
    console.log(req.params)
})

app.get('/cats', (req, res) => {
    res.json(cats)
})
