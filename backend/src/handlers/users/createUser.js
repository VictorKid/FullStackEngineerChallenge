module.exports = async (req, res) => {
  const { name } = req.body;
  const { models } = req.context;

  const user = await models.Users.create({
    name,
    role: "EMPLOYEE",
  });

  res.json({
    data: { user },
  });
};
