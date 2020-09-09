module.exports = async (req, res) => {
  const { reviewId, comments } = req.body;
  const { models } = req.context;

  const review = await models.Reviews.findByPk(reviewId);
  review.update({ comments, status: "COMPLETED" });

  res.json({
    data: { review },
  });
};
