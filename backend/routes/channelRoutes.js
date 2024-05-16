const express = require('express');
const router = express.Router();
const channelController = require('./channelController');

// Rota para listar todos os canais
router.get('/', channelController.listChannels);

// Rota para obter um canal pelo ID
router.get('/:id', channelController.getChannelById);

// Rota para criar um novo canal
router.post('/', channelController.createChannel);

// Rota para atualizar um canal existente
router.put('/:id', channelController.updateChannel);

// Rota para deletar um canal
router.delete('/:id', channelController.deleteChannel);

module.exports = router;
