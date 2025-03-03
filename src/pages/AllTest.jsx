import useFetch from "../hooks/useFetch";
import Pending from "../components/Pending";
import Pagination from "../components/Pagination";
import { useState } from "react";
function AllTest() {
  const [URL, setURL] = useState(
    "https://onko-fergana.uz/question/?id=0&topic_id=0&page=1&limit=10"
  );
  const { data, isPending } = useFetch(URL);
  function changePagination(value) {
    setURL(
      `https://onko-fergana.uz/question/?id=0&topic_id=0&page=${value}&limit=10`
    );
  }
  return (
    <div className="flex flex-col items-end">
      <div className="flex lg:justify-end justify-between px-4 lg:px-0 flex-wrap gap-6 mt-10">
        <Pending isPending={isPending} />
        {data &&
          data.data.map((question) => {
            return (
              <div
                key={question.id}
                className="card w-[350px] bg-neutral text-neutral-content hover:transition-all hover:scale-105 hover:bg-orange-300">
                <div className="card-body">
                  <h2 className="card-title">
                    {question.id} {question.question}
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
      {data && (
        <Pagination value={data.pages} changePagination={changePagination} />
      )}
    </div>
  );
}

export default AllTest;
