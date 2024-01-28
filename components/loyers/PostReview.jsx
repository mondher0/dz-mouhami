"use client";
import ReactStars from "react-rating-stars-component";
import { Button } from "../ui/button";
import { useState } from "react";
import axiosInstance, { baseUrl } from "../../lib/utils";
import { getCookie } from "cookies-next";
import axios from "axios";

const PostReview = ({ id }) => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");
  const submitRating = async () => {
    try {
      const data = {
        rating: rate,
        lawyer_id: parseInt(id),
        description: comment,
      };
      console.log(data);
      const token = getCookie("token");
      console.log(token);
      const response = await axiosInstance.post(`${baseUrl}reviews/add`, data, {
        withCredentials: false,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRating = (rate) => {
    setRate(parseInt(rate));
  };
  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <ReactStars
        count={5}
        onChange={handleRating}
        size={40}
        activeColor="#ffd700"
      />
      <form
        className="flex flex-col items-center justify-center w-full"
        onSubmit={(e) => {
          e.preventDefault();
          submitRating();
        }}
      >
        <input
          type="text"
          placeholder="Your comment here..."
          className="w-full border-2 border-gray-300 rounded-[10px] p-5 my-5 outline-none"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button size="lg">Post</Button>
      </form>
    </section>
  );
};

export default PostReview;
