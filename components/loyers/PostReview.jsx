"use client";
import ReactStars from "react-rating-stars-component";
import "./index.css";
import { Button } from "../ui/button";

const PostReview = () => {
  const handleRating = (rate) => {
    console.log(rate);
  };
  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <ReactStars
        count={5}
        onChange={handleRating}
        size={40}
        activeColor="#ffd700"
      />
      <form className="flex flex-col items-center justify-center w-full">
        <input
          type="text"
          placeholder="Your comment here..."
          className="w-full border-2 border-gray-300 rounded-[10px] p-5 my-5 outline-none"
        />
        <Button size="lg">Post</Button>
      </form>
    </section>
  );
};

export default PostReview;
