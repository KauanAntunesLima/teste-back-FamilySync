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
const getAllFinances = async function() {
    try {
        let sql = `select * from tb_financia`
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
const getFinanceById = async function(id) {
    try {
        let sql = `select * from tb_financia where id_financia = ${id}`
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
const setInsertFinance = async function(financia) {
    try {
        let sql = `insert into tb_financia(
                        tipo,
                        descricao,
                        valor,
                        icone
                    )values(
                        '${financia.tipo}',
                        '${financia.descricao}',
                        ${financia.valor},
                        '${financia.icone}'
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
const setUpdateFinance = async function(financia) {
    try {
        let sql = `update tb_financia set
                        tipo = '${financia.tipo}',
                        descricao = '${financia.descricao}',
                        valor = ${financia.valor},
                        icone = '${financia.icone}'
                    where id_financia = ${financia.id}
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
const setDeleteFinance = async function(id) {
    try {
        let = sql = `delete from tb_financia where id_financia = ${id}`
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
    getAllFinances,
    getFinanceById,
    setInsertFinance,
    setUpdateFinance,
    setDeleteFinance
}