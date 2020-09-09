module.exports = async (req, res) => {
  const { userId } = req.params;
  const { models } = req.context;

  const reviews = await models.Reviews.findAll({
    where: { reviewerId: userId },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: models.Users,
        as: "reviewer",
      },
      {
        model: models.Users,
        as: "reviewee",
      },
    ],
  });

  res.json({
    data: { reviews },
  });
};
