
const express = require('express')
const routes = require('./')
const app = express()

app.get('/api', (req, res) => {
    res.send('another one')
})

app.get('/api/users', (req, res) => {
    res.send('users page')
})
app.get('/api/product', (req, res) => {
    res.send('product page')
})
app.get('/api/category', (req, res) => {
    res.send('category page')
})









app.listen(5000, ()=>{
    console.log('listening on port 5000')
} )