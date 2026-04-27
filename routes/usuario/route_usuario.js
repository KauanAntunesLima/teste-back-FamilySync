/***********************************************
 * Objetivo: Arquivo de responsavel pela manipulação de routas de usuario na API
 * Autor: Gustavo de Paula Silva
 * Data: 27/04/2026
 * Versão: 1.0
 ************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const bodyParserJSON = bodyParser.json()

const controller = require('../../controller/usuario/controller_usuario.js')
const router = express.Router()

router.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    router.use(cors())
    next()
})

router.get("/usuarios", cors(), async function(request, response) {
    let result = await controller.listarUsuarios()
    response.json(result)
})

router.get("/usuario/:id", cors(), async function(request, response) {
    let id = request.params.id
    let result = await controller.listarUsuarioID(id)
    response.json(result)
})
router.delete("/usuario/:id", cors(), async function(request, response) {
    let id = request.params.id
    let result = await controller.excluirUsuario(id)
    response.json(result)
})

router.post("/usuario", cors(), bodyParserJSON, async function(request, response) {
    let dadosBody = request.body
    let contentType = request.headers["content-type"]

    let result = await controller.criarUsuario(dadosBody, contentType)
    response.json(result)
})
router.put("/usuario/:id", cors(), async function(request, response) {
    let id = request.params.id
    let dadosBody = request.body
    let contentType = request.headers["content-type"]

    let result = await controller.atulizarUsuario(dadosBody, contentType, id)
    response.json(result)
})
module.exports = router;