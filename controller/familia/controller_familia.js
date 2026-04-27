/***********************************************
 * Objetivo: Arquivo de responsavel pela manipulação da camada model de familia
 * Autor: Gustavo de Paula Silva
 * Data: 24/04/2026
 * Versão: 1.0
 ************************************************/
const familiaDAO = require("../../model/DAO/familia.js")
const mesagensDefault = require("../modulo/config_messages.js")
const validarDados = require("../modulo/validar_dados.js")
const validarAtributos = require("../modulo/validar_atributos.js")

//GET
const listarFamilias = async function() {
    try {
        let result = await familiaDAO.getAllFamilys()
        if(result){
            if(result.length > 0){
                mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_REQUEST.StatusCode
                mesagensDefault.HEADER.Response.familias = result
            }else{
                mesagensDefault.ERRO_NOT_FOUND
            }  
        }else{
            mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
//GET id
const listarFamiliaID = async function(id) {
    let idValidado = validarAtributos.validarValorId(id)
    try {
        if(idValidado){
            let result = await familiaDAO.getFamilyById(id)
            if(result){
                if(result.length > 0){
                    mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_REQUEST.StatusCode
                    mesagensDefault.HEADER.Response.familia = result
                }else{
                    mesagensDefault.ERRO_NOT_FOUND
                }
            }else{
                mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
            }    
        }else{
            mesagensDefault.ERRO_INVALID_ID
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
//POST
const criarFamilia = async function(familia, contentType) {
    let dadosValidados = validarDados.validarDadosFamilia(familia)
    let contentTypeValidado = validarAtributos.validarContentType(contentType)
    try {
        if(contentTypeValidado){
            if(dadosValidados){
                let result = await familiaDAO.setInsertFamily(familia)
                if(result){
                    if(result.length > 0){
                        mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_CREATED_ITEM.StatusCode
                        mesagensDefault.HEADER.Response = mesagensDefault.SUCCESS_CREATED_ITEM.message
                    }else{
                        mesagensDefault.ERRO_NOT_FOUND
                    }
                }else{
                    mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
                }
            }else{
                mesagensDefault.ERRO_REQUIRED_FIELDS
            }
        }else{
            mesagensDefault.ERRO_CONTENT_TYPE
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
//PUT
const atulizarFamilia = async function(familia, contentType, id) {
    let dadosValidados = validarDados.validarDadosFamilia(familia)
    let contentTypeValidado = validarAtributos.validarContentType(contentType)
    let idValidado = validarAtributos.validarValorId(id)
    try {
        if(idValidado){
            let buscarId = familiaDAO.getFamilyById(id)
            if(contentTypeValidado){
                if(dadosValidados){
                    if(buscarId.StatusCode == 200){
                        familia.id_familia = parseInt(id)
                        let result = await familiaDAO.setUpdateFamily(familia)
                        if(result){
                            if(result.length > 0){
                                mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_UPDATED_ITEM.StatusCode
                                mesagensDefault.HEADER.Response = mesagensDefault.SUCCESS_UPDATED_ITEM.message
                            }
                        }else{
                            mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
                        }
                    }else{
                        return buscarId
                    }
                }else{
                    mesagensDefault.ERRO_REQUIRED_FIELDS
                }
            }else{
                mesagensDefault.ERRO_CONTENT_TYPE
            }
        }else{
            mesagensDefault.ERRO_INVALID_ID
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
//DELETE
const excluirFamilia = async function(id) {
    let idValidado = validarAtributos.validarValorId(id)
    try {
        if(idValidado){
            let buscarId = await familiaDAO.getFamilyById(id)
            if(buscarId.StatusCode == 200){
                let result = await familiaDAO.setDeleteFamily(id)
                if(result){
                    if(result.length > 0){
                        mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_DELETED_ITEM.StatusCode
                        mesagensDefault.HEADER.Response = mesagensDefault.SUCCESS_DELETED_ITEM.message
                    }
                }else{
                    mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
                }
            }else{
                return buscarId
            }
        }else{
            mesagensDefault.ERRO_INVALID_ID
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
module.exports = {
    listarFamiliaID,
    listarFamilias,
    criarFamilia,
    atulizarFamilia,
    excluirFamilia
}