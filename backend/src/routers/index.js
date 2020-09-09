const express = require("express");
const router = express.Router();

const {
  getUser,
  listUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../handlers/users");

const {
  getReview,
  listReviews,
  createReview,
  updateReview,

  listReviewsByReviewerId,
} = require("../handlers/reviews");

router.get("/users/:userId", getUser);
router.get("/users", listUsers);
router.get("/users/:userId/reviews", listReviewsByReviewerId);
router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);

router.get("/reviews/:reviewId", getReview);
router.get("/reviews", listReviews);
router.post("/reviews", createReview);
router.put("/reviews", updateReview);

module.exports = router;
