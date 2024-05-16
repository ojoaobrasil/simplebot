const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); // Middleware para logging
const helmet = require('helmet'); // Middleware para segurança

// Import routes
const customerRoutes = require('./routes/customerRoutes');
const channelRoutes = require('./routes/channelRoutes');
const autoReplyRoutes = require('./routes/autoReplyRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const fileRoutes = require('./routes/fileRoutes');
const flowRoutes = require('./routes/flowRoutes');
const integrationRoutes = require('./routes/integrationRoutes');
const messageRoutes = require('./routes/messageRoutes');
const numberRoutes = require('./routes/numberRoutes');
const quickReplyRoutes = require('./routes/quickReplyRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

// Inicializar o Express
const app = express();

// Aplicar middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined')); // Usar o morgan para logging
app.use(helmet()); // Usar o helmet para segurança

// Configurar rotas
app.use('/api/customers', customerRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/autoReplies', autoReplyRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/flows', flowRoutes);
app.use('/api/integrations', integrationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/numbers', numberRoutes);
app.use('/api/quickReplies', quickReplyRoutes);
app.use('/api/schedules', scheduleRoutes);

// Rota básica para teste
app.get('/', (req, res) => {
    res.send('Bem-vindo ao SimpleBot!');
});

// Configurar a porta e iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
