/***********************************************
 * Objetivo: CRUD de informacao no banco
 * Autor: Kauan Antunes
 * Versão: 2.0 
 ************************************************/

const knex = require("knex")
const knexConfig = require("../database_config/knexfile")

const knexDatabase = knex(knexConfig.development)

// GET ALL
const getAllInformations = async function () {
    try {
        let result = await knexDatabase("tb_informacao").select("*")

<<<<<<< HEAD
        return result.length > 0 ? result : false

    } catch (error) {
        console.log(error)
        return false
=======
        if(Array.isArray(result)){
            return result
        }else{
            return false
        } 
    } catch (error) {
        return error
    }
}
//GET por id
const getInformationById = async function(id) {
    try {
        let sql = `select * from tb_informacao where id_info = ${id}`
        let result = await knexDatabase.raw(sql)

        if(Array.isArray(result)){
            return result
        }else{
            return false
        } 
    } catch (error) {
        return error
    }
}
//POST
const setInsertInformation = async function(informacao) {
    try {
        let sql = `insert into tb_informacao(
                        titulo,
                        descricao
                    )values(
                        '${informacao.titulo}',
                        '${informacao.descricao}'
                    )`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result)){
            return result
        }else{
            return false
        }
    } catch (error) {
        return error
>>>>>>> 8ef8cbc2186e9248839ea905fd683e2a71647722
    }
}

// GET BY ID
const getInformationById = async function (id) {
    try {
<<<<<<< HEAD
        let result = await knexDatabase("tb_informacao")
            .where({ id_info: id })

        return result.length > 0 ? result : false

    } catch (error) {
        console.log(error)
        return false
=======
        let sql = `update tb_informacao set
                        titulo = '${informacao.titulo}',
                        descricao = '${informacao.descricao}'
                    where id_info = ${informacao.id}
                    )`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result)){
            return result
        }else{
            return false
        }
    } catch (error) {
        return error
>>>>>>> 8ef8cbc2186e9248839ea905fd683e2a71647722
    }
}

// INSERT
const setInsertInformation = async function (informacao) {
    try {
<<<<<<< HEAD
        let result = await knexDatabase("tb_informacao").insert({
            titulo: informacao.titulo,
            descricao: informacao.descricao
        })

        return result ? true : false

    } catch (error) {
        console.log(error)
        return false
=======
        let = sql = `delete from tb_informacao where id_info = ${id}`
        let result = await knexDatabase.raw(sql)
        if(Array.isArray(result)){
            return result
        }else{
            return false
        }
    } catch (error) {
        return error
>>>>>>> 8ef8cbc2186e9248839ea905fd683e2a71647722
    }
}

// UPDATE
const setUpdateInformation = async function (informacao) {
    try {
        let result = await knexDatabase("tb_informacao")
            .update({
                titulo: informacao.titulo,
                descricao: informacao.descricao
            })
            .where({ id_info: informacao.id_info })

        // result = quantidade de linhas afetadas
        return result > 0 ? true : false

    } catch (error) {
        console.log(error)
        return false
    }
}

// DELETE
const setDeleteInformation = async function (id) {
    try {
        let result = await knexDatabase("tb_informacao")
            .where({ id_info: id })
            .del()

        return result > 0 ? true : false

    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    getAllInformations,
    getInformationById,
    setInsertInformation,
    setUpdateInformation,
    setDeleteInformation
}