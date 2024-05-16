const Flow = require('../models/Flow');

exports.createFlow = async (data) => {
  const flow = new Flow(data);
  return await flow.save();
};

exports.getFlows = async () => {
  return await Flow.find({});
};