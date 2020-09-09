import apiClient from "./client";

const addReview = (data) => {
  const req = {
    url: "/reviews",
    method: "POST",
    data,
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const listReviews = (data) => {
  const req = {
    url: "/reviews",
    method: "GET",
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const listReviewsByReviewerId = (data) => {
  const req = {
    url: `/users/${data.userId}/reviews`,
    method: "GET",
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const updateReview = (data) => {
  const req = {
    url: "/reviews",
    method: "PUT",
    data,
  };
  return apiClient(req)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export { addReview, listReviews, listReviewsByReviewerId, updateReview };
