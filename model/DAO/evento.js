/***********************************************
 * Objetivo: Arquivo de responsavel pela realização do CRUD no banco de dados SQL
 * Autor: Gustavo de Paula Silva
 * Data: 22/04/2026
 * Versão: 1.0
 ************************************************/
const knex = require("knex");
const knexConfig = require("../database_config/knexfile");

const knexDatabase = knex(knexConfig.development);

//GET 
const getAllEvents = async function() {
    try {
        let sql = `select * from tb_eventos`
        let result = await knexDatabase.raw(sql)

        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        } 
    } catch (error) {
        return false   
    }
}
//GET por id
const getEventById = async function(id) {
    try {
        let sql = `select * from tb_eventos where id_evento = ${id}`
        let result = await knexDatabase.raw(sql)

        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        } 
    } catch (error) {
        return false   
    }
}
//POST
const setInsertEvent = async function(evento) {
    try {
        let sql = `insert into tb_evento(
                        titulo,
                        descricao,
                        data,
                    )values(
                        '${evento.titulo}',
                        '${evento.descricacao}',
                        '${evento.data}',     
                    )`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}
//PUT
const setUpdateEvent = async function(evento) {
    try {
        let sql = `update tb_evento set
                        titulo = '${evento.titulo}',
                        descricao = '${evento.descricacao}',
                        data = '${evento.data}',     
                    where id_evento = ${evento.id_evento}
                    )`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}
//DELETE
const setDeleteEvent = async function(id) {
    try {
        let = sql = `delete from tb_evento where id_evento = ${id}`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}
module.exports ={
    getAllEvents,
    getEventById,
    setInsertEvent,
    setUpdateEvent,
    setDeleteEvent
}