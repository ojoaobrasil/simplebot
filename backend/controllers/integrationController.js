const Integration = require('../models/Integration');

exports.createIntegration = async (req, res) => {
  try {
    const integration = new Integration(req.body);
    await integration.save();
    res.status(201).send(integration);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getIntegrations = async (req, res) => {
  try {
    const integrations = await Integration.find({});
    res.status(200).send(integrations);
  } catch (error) {
    res.status(500).send(error);
  }
};