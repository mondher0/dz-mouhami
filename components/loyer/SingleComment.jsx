import React from "react";
import { LiaCommentDots } from "react-icons/lia";

const SingleComment = ({ comment }) => {
  return (
    <div className="flex items-center gap-[150px]">
      <div className="flex items-center">
        <span className="mr-3">
          <LiaCommentDots size={30} color="#FFC700" />
        </span>
        <p className="text-[#001F3F] text-[22px]">
          {comment.name} a commenté sur votre profil
        </p>
      </div>
      <div className="ml-10 text-[#001F3F5C] text-[20px]">il ya 4 jours</div>
    </div>
  );
};

export default SingleComment;
