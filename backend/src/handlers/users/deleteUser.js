module.exports = async (req, res) => {
  const { userId } = req.body;
  const { models } = req.context;

  const user = await models.Users.findByPk(userId);
  user.destroy();

  res.json({});
};
