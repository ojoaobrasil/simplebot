const Integration = require('../models/Integration');

exports.createIntegration = async (data) => {
  const integration = new Integration(data);
  return await integration.save();
};

exports.getIntegrations = async () => {
  return await Integration.find({});
};