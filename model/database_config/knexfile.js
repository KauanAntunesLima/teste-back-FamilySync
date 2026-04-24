/***********************************************
 * Objetivo: Arquivo de configuração do knex
 * Autor: Gustavo de Paula Silva
 * Data: 22/04/2026
 * Versão: 1.0
 ************************************************/

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: "localhost",
            user: "",
            password: "12345678",
            database: "familysync",
            port: 8080,
            charset: 'utf8mb4'
        },
        migrations: {
            tableName: "knex_migrations",
            diretory: "/db/migrations",
        },
        seeds: {
            diretory: "./db/seeds"
        }
    }
};