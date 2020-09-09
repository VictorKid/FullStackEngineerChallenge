module.exports = async (req, res) => {
  const { userId, name } = req.body;
  const { models } = req.context;

  const user = await models.Users.findByPk(userId);
  user.update({
    name,
  });

  res.json({
    data: { user },
  });
};
