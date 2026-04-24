/***********************************************
 * Objetivo: Arquivo de responsavel pela validação de conteudo do body
 * Autor: Gustavo de Paula Silva
 * Data: 24/04/2026
 * Versão: 1.0
 ************************************************/

const validarDadosUsuario = async function(usuario){
    try {
        if(usuario.nome == null || usuario.nome == "" || usuario.nome == undefined || usuario.nome.length > 100){
            return false
    
        }else if(usuario.cpf == null || usuario.cpf == "" || usuario.cpf == undefined || usuario.cpf.length > 14){
            return false
            
        }else if(usuario.data_nascimento == null || usuario.data_nascimento == "" || usuario.data_nascimento == undefined || usuario.data_nascimento.length > 14){
            return false
    
        }else if(usuario.senha == null || usuario.senha == "" || usuario.senha == undefined || usuario.senha.length > 100){
            return false
    
        }else if(usuario.email == null || usuario.email == "" || usuario.email == undefined || usuario.email.length > 100){
            return false
    
        }else if(usuario.is_admin == null || usuario.is_admin == undefined || usuario.is_admin != true || usuario.is_admin != false){
            return false
    
        }else{
            return true
        }
    } catch (error) {
        console.log(error)   
    }
}
const validarDadosFamilia = async function(familia) {
    try {
        if(familia.nome == null || familia.nome == "" || familia.nome == undefined || familia.nome.length > 100){
            return false
        }else if(familia.telefone_residencial == null || familia.telefone_residencial == "" || familia.telefone_residencial == undefined || familia.telefone_residencial.length > 100){
            return false
        }else{
            return true
        }
    } catch (error) {
        console.log(error)  
    }
}
const validarDadosEvento = async function(evento) {
    try {
        if(familia.titulo == null || familia.titulo == "" || familia.titulo == undefined || familia.titulo.length > 100){
            return false
        }else if(familia.descricao == null || familia.descricao == "" || familia.descricao == undefined || familia.descricao.length > 100){
            return false
        }else if(familia.data == null || familia.data == "" || familia.data == undefined || familia.data.length > 100){
            return false
        }else{
            return true
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    validarDadosUsuario,
    validarDadosFamilia,
    validarDadosEvento
}