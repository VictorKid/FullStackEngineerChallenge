module.exports = async (req, res) => {
  const { reviewId } = req.params;
  const { models } = req.context;

  const review = await models.Reviews.findByPk(reviewId);

  res.json({
    data: { review },
  });
};
