"use client";
import { useDispatch, useSelector } from "react-redux";
import { setDisponibility } from "../../store/features/auth/auth-slice";
import { Check } from "lucide-react";

const DispoTable = () => {
  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const hours = [
    {
      id: 1,
      hour: "8:00-10:00",
    },
    {
      id: 2,
      hour: "10:00-12:00",
    },
    {
      id: 3,
      hour: "14:00-16:00",
    },
    {
      id: 4,
      hour: "16:00-18:00",
    },
    {
      id: 5,
      hour: "18:00-20:00",
    },
  ];
  const { disponibility } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="w-1/2">
      <table className="table-auto border-collapse bg-gray-300 bg-opacity-20">
        <thead>
          <tr>
            <th className="border px-4 py-2 w-24 text-white border-[#FFC700]">
              Hours/Days
            </th>
            {days.map((day, index) => (
              <th
                className="border border-[#FFC700] px-4 py-2 text-white"
                key={index}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, hourIndex) => (
            <tr key={hourIndex}>
              <td className="border border-[#FFC700] px-4 py-2 w-fit text-white">
                {hour.hour}
              </td>
              {days.map((day, dayIndex) => (
                <td
                  className="border border-[#FFC700] px-4 py-2 text-white"
                  key={dayIndex}
                  onClick={() => dispatch(setDisponibility({ hour, day }))}
                >
                  {disponibility[dayIndex].hours.includes(hour.hour) ? (
                    <Check />
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DispoTable;
