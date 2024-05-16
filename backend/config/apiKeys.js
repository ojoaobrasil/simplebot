require('dotenv').config();

// Objeto contendo todas as chaves API necessárias
const apiKeys = {
    serviceApiKey: process.env.SERVICE_API_KEY, // Substitua 'SERVICE_API_KEY' pelo nome real da variável de ambiente
    anotherServiceApiKey: process.env.ANOTHER_SERVICE_API_KEY // Exemplo adicional
};

module.exports = apiKeys;
