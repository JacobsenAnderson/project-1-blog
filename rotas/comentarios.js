const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'Parabens Anderson',
        autor: 'Aline'
    })
})

module.exports = router

