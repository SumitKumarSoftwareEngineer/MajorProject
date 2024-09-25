const express = require("express");
const router = express.Router({ mergeParams: true });
const app = express();
const wrapAsync = require("../utils/wrapAsync");

const Review = require("../models/review");
const Listing = require("../models/listings");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");
//Reviews post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//Delete Review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
