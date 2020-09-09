module.exports = async (req, res) => {
  const { reviewerId, revieweeId } = req.body;
  const { models } = req.context;

  const review = await models.Reviews.create({
    reviewerId,
    revieweeId,
    status: "PENDING",
  });

  res.json({
    data: { review },
  });
};
