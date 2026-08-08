import { FaNotesMedical } from "react-icons/fa";

function EmptyState({
  title = "No Data",
  message = "Nothing to show yet.",
}) {
  return (
    <div className="text-center py-16">
      <FaNotesMedical
        className="mx-auto text-slate-400"
        size={50}
      />

      <h2 className="mt-5 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;