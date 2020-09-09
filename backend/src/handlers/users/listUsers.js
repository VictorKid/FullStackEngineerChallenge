module.exports = async (req, res) => {
  const { models } = req.context;

  const users = await models.Users.findAll({ order: [["createdAt", "DESC"]] });

  res.json({
    data: { users },
  });
};
