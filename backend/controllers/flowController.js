const Flow = require('../models/Flow');

exports.createFlow = async (req, res) => {
  try {
    const flow = new Flow(req.body);
    await flow.save();
    res.status(201).send(flow);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getFlows = async (req, res) => {
  try {
    const flows = await Flow.find({});
    res.status(200).send(flows);
  } catch (error) {
    res.status(500).send(error);
  }
};