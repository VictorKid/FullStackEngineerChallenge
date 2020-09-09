module.exports = async (req, res) => {
  const { userId } = req.params;
  const { models } = req.context;

  const user = await models.Users.findByPk(userId);

  res.json({
    data: { user },
  });
};
