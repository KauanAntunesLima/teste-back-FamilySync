/***********************************************
 * Objetivo: Arquivo de responsavel pela manipulação da camada model de usuarios
 * Autor: Gustavo de Paula Silva
 * Data: 24/04/2026
 * Versão: 1.0
 ************************************************/

const notificacaoDAO = require("../../model/DAO/notificacao.js")
const mesagensDefault = require("../modulo/config_messages.js")
const validarDados = require("../modulo/validar_dados.js")
const validarAtributos = require("../modulo/validar_atributos.js")

// GET
const listarNotificacoes = async function () {
    try {
        let result = await notificacaoDAO.getAllNotifications()
        if (result) {
            if (result.length > 0) {
                mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_REQUEST.StatusCode
                mesagensDefault.HEADER.Response.notificacoes = result
            } else {
                mesagensDefault.ERRO_NOT_FOUND
            }
        } else {
            mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}

// GET id
const listarNotificacaoID = async function (id) {
    let idValidado = validarAtributos.validarValorId(id)
    try {
        if (idValidado) {
            let result = await notificacaoDAO.getNotificationById(id)
            if (result) {
                if (result.length > 0) {
                    mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_REQUEST.StatusCode
                    mesagensDefault.HEADER.Response.notificacao = result
                } else {
                    mesagensDefault.ERRO_NOT_FOUND
                }
            } else {
                mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
            }
        } else {
            mesagensDefault.ERRO_INVALID_ID
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}

// POST
const criarNotificacao = async function (notificacao, contentType) {
    let dadosValidados = validarDados.validarDadosNotificacao(notificacao)
    let contentTypeValidado = validarAtributos.validarContentType(contentType)
    try {
        if (contentTypeValidado) {
            if (dadosValidados) {
                let result = await notificacaoDAO.setInsertNotification(notificacao)
                if (result) {
                    if (result.length > 0) {
                        mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_CREATED_ITEM.StatusCode
                        mesagensDefault.HEADER.Response = mesagensDefault.SUCCESS_CREATED_ITEM.message
                    } else {
                        mesagensDefault.ERRO_NOT_FOUND
                    }
                } else {
                    mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
                }
            } else {
                mesagensDefault.ERRO_REQUIRED_FIELDS
            }
        } else {
            mesagensDefault.ERRO_CONTENT_TYPE
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}

// PUT
const atulizarNotificacao = async function (notificacao, contentType, id) {
    let dadosValidados = validarDados.validarDadosNotificacao(notificacao)
    let contentTypeValidado = validarAtributos.validarContentType(contentType)
    let idValidado = validarAtributos.validarValorId(id)
    try {
        if (idValidado) {
            let buscarId = notificacaoDAO.getNotificationById(id)
            if (contentTypeValidado) {
                if (dadosValidados) {
                    if (buscarId.StatusCode == 200) {
                        notificacao.id_notificacao = parseInt(id)
                        let result = await notificacaoDAO.setUpdateNotification(notificacao)
                        if (result) {
                            if (result.length > 0) {
                                mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_UPDATED_ITEM.StatusCode
                                mesagensDefault.HEADER.Response = mesagensDefault.SUCCESS_UPDATED_ITEM.message
                            }
                        } else {
                            mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
                        }
                    } else {
                        return buscarId
                    }
                } else {
                    mesagensDefault.ERRO_REQUIRED_FIELDS
                }
            } else {
                mesagensDefault.ERRO_CONTENT_TYPE
            }
        } else {
            mesagensDefault.ERRO_INVALID_ID
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
// DELETE
const excluirNotificacao = async function (id) {
    let idValidado = validarAtributos.validarValorId(id)
    try {
        if (idValidado) {
            let buscarId = await notificacaoDAO.getNotificationById(id)
            if (buscarId.StatusCode == 200) {
                let result = await notificacaoDAO.setDeleteNotification(id)
                if (result) {
                    if (result.length > 0) {
                        mesagensDefault.HEADER.StatusCode = mesagensDefault.SUCCESS_DELETED_ITEM.StatusCode
                        mesagensDefault.HEADER.Response = mesagensDefault.SUCCESS_DELETED_ITEM.message
                    }
                } else {
                    mesagensDefault.ERRO_INTERNAL_SERVER_MODEL
                }
            } else {
                return buscarId
            }
        } else {
            mesagensDefault.ERRO_INVALID_ID
        }
    } catch (error) {
        mesagensDefault.ERRO_INTERNAL_SERVER_CONTROLLER
    }
}
module.exports = {
    listarNotificacoes,
    listarNotificacaoID,
    criarNotificacao,
    atulizarNotificacao,
    excluirNotificacao
}