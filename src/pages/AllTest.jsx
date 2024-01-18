import { useFetch } from "../hooks/useFetch";
import Pending from "../components/Pending";
function AllTest() {
  const { data, isPending } = useFetch(
    "https://tibbiy-sorovnomaa.onrender.com/question"
  );
  return (
    <div className="flex justify-between flex-wrap gap-6 mt-10">
      <Pending isPending={isPending} />
      {data &&
        data.data.map((question) => {
          return (
            <div className="card w-[350px] bg-neutral text-neutral-content">
              <div className="card-body">
                <h2 className="card-title">
                  {question.id}) {question.question}
                </h2>
                <p>{question.option_a}</p>
                <p>{question.option_b}</p>
                <p>{question.option_d}</p>
                <p>{question.option_e}</p>
                <p>{question.option_f}</p>
                <div className="card-actions gap-10 mt-4">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-error">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AllTest;
