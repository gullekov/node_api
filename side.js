const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res)=> res.send('Hi everybody it my express app'));
app.get('/services', (req, res)=> res.send('servicies side'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))