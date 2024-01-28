import LoyerCalendar from "../../../components/loyer/LoyerCalendar";
import DataTable from "../../../components/loyer/DataTable";

const LoyerPage = ({ params }) => {
  const { id } = params;
  console.log(id);

  return (
    <div className="flex justify-center gap-9">
      <div>
        <LoyerCalendar />
      </div>
      <div className="flex flex-col rounded-[18px] bg-white shadow-md p-6">
        <p className="mb-[15px] text-[#001F3F] text-[30px] font-bold">La Liste Des Rendez-vous :</p>
        <DataTable />
      </div>
    </div>
  );
};

export default LoyerPage;