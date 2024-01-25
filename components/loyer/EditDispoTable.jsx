"use client";

const EditDispoTable = () => {
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
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full">
      <label className="text-[#FFC700] text-[24px] font-semibold">
        TABLE DE TRAVAIL
      </label>
      <table className="table-auto border-collapse bg-gray-300 bg-opacity-20">
        <thead>
          <tr>
            <th className="border px-4 py-2 w-24 text-[#001F3F] border-[#001F3F]">
              Hours/Days
            </th>
            {days.map((day, index) => (
              <th
                className="border border-[#001F3F] px-4 py-2 text-[#001F3F]"
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
              <td className="border border-[#001F3F] px-4 py-2 w-fit text-[#001F3F]">
                {hour.hour}
              </td>
              {days.map((day, dayIndex) => (
                <td
                  className="border border-[#001F3F] px-4 py-2 text-[#001F3F]"
                  key={dayIndex}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditDispoTable;
