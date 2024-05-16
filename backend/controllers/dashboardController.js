exports.getDashboardData = async (req, res) => {
    try {
      // Dummy data, replace with actual logic
      const data = { users: 100, sales: 50 };
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };