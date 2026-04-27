/***********************************************
 * Objetivo: Arquivo de responsavel pela realização do CRUD no banco de dados SQL
 * Autor: Gustavo de Paula Silva
 * Data: 27/04/2026
 * Versão: 1.0
 ************************************************/
const knex = require("knex");
const knexConfig = require("../database_config/knexfile");

const knexDatabase = knex(knexConfig.development);

//GET
const getAllLists = async function() {
    try {
        let sql = `select * from tb_listas`
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
const getListById = async function(id) {
    try {
        let sql = `select * from tb_listas where id_lista = ${id}`
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
const setInsertList = async function(lista) {
    try {
        let sql = `insert into tb_listas(
                        nome_lista
                    )values(
                        '${lista.nome_lista}'
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
const setUpdateList = async function(lista) {
    try {
        let sql = `update tb_listas set
                        nome_lista = '${lista.nome_lista}'
                    where id_lista = ${lista.id_lista}
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
const setDeleteList = async function(id) {
    try {
        let = sql = `delete from tb_listas where id_lista = ${id}`
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
module.exports = {
    getAllLists,
    getListById,
    setDeleteList,
    setUpdateList,
    setInsertList
}