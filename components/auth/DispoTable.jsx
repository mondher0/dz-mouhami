const DispoTable = () => {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
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
    <div className="w-1/2">
      {/* <table
        className="
        w-full
        caption-bottom
        text-sm
        border-collapse
        border-2
        border-gray-500
        rounded-lg
        dark:border-gray-700
        dark:bg-gray-700
        text-white
        p-[20px]
      "
      >
        <thead
          className="
        border-b-2
        border-gray-500
        dark:border-gray-700
        dark:bg-gray-700
        text-white
         
        "
        >
          <tr
            className="
        border-b-2
        border-gray-500
        dark:border-gray-700
        dark:bg-gray-700
        
          "
          >
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour.id}>
              <td>{hour.hour}</td>
              {days.map((day) => (
                <td key={day}>
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default DispoTable;
