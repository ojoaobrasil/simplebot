const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'seu_usuario',        // Substitua por seu nome de usuário do PostgreSQL
    host: 'localhost',          // Substitua pelo host do seu banco de dados (IP ou hostname)
    database: 'nome_do_seu_banco', // Substitua pelo nome do seu banco de dados
    password: 'sua_senha',      // Substitua pela sua senha do PostgreSQL
    port: 5432,                 // Porta padrão do PostgreSQL
    ssl: {
        rejectUnauthorized: false // Esta linha é necessária se estiver usando SSL
    }
});

// Função para pegar um cliente do pool
const getClient = async () => {
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.stack);
        return null;
    }
};

module.exports = {
    getClient,
    pool
};
