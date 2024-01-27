"use client";
import { useDispatch } from "react-redux";
import { editProfileInfo } from "../../store/features/profile/profile-slice";

const ProfileInput = ({ name, type, id, data, value }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <label className="text-[#FFC700] text-[24px] font-semibold" htmlFor={id}>
        {name}
      </label>
      <input
        type={type}
        className="w-full  border border-solid border-black rounded-md bg-blue-100 p-[10px] outline-none text-[#001F3F] font-bold text-[25px]"
        value={value}
        id={id}
        onChange={(e) =>
          dispatch(editProfileInfo({ name: data, value: e.target.value }))
        }
      />
    </div>
  );
};

export default ProfileInput;
