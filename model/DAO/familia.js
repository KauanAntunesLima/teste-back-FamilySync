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
const getAllFamilys = async function(){
    try{
        let sql = "select * from tb_familia"
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }   
}
//GET por id
const getFamilyById = async function(id) {
    try{
        let sql = `select * from tb_familia where id_familia = ${id}`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }   
}
//POST
const setInsertFamily = async function(familia) {
    try{
        let sql = `insert into tb_usuario(
                        nome,
                        telefone_residencial,
                    )values(
                        '${familia.nome}',
                        '${familia.telefone_residencial}',
                    )`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }   
}
//PUT
const setUpdateFamily = async function(familia) {
    try{
        let sql = `update tb_usuario set
                        nome = '${familia.nome}',
                        telefone_residencial = '${familia.telefone_residencial}',
                    where id_familia = ${familia.id_familia}
                    )`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }   
}
//DELETE
const setDeleteFamily = async function(id) {
    try{
        let sql = `delete from tb_familia where id_familia = ${id}`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result[0])){
            return result
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false
    }   
}
module.exports = {
    getAllFamilys,
    getFamilyById,
    setInsertFamily,
    setUpdateFamily,
    setDeleteFamily
}