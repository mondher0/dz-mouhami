import React from "react";
import ReviewsHeader from "../../../../components/loyer/ReviewsHeader";
import Reviews from "../../../../components/loyer/Reviews";
import { baseUrl } from "../../../../lib/utils";

const ReviewsPage = async ({ params }) => {
  const { id } = params;
  console.log(id);
  // get lowyer reviews
  const getLoyerReviews = async () => {
    try {
      const response = await fetch(`${baseUrl}reviews/lawyer/${id}`, {
        cache: "no-cache",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const reviews = await getLoyerReviews();
  console.log(reviews);
  return (
    <div>
      <ReviewsHeader reviews={reviews}/>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default ReviewsPage;
