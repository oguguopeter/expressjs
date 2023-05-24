const express = require('express');
const router = express.Router();

router.get('/product', (req, res) => {
    res.send({
        type: 'GET'

    })
})

router.post('/product', (req, res) => {
    res.send({
        type: 'POST'
    })
})

router.put('/product/:id', (req, res) => {
    res.send({
        type: 'PUT'
    })
    
router.delete('/product/:id', (req, res) => {
    res.send({
        type: 'DELETE'
    })
