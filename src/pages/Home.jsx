import RenderBarChart from "../components/RenderBarChart";
import MiniSelect from "../components/MiniSelect";
import { useState } from "react";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";
import Pending from "../components/Pending";
function Home() {
  const [URL, setURL] = useState(
    "http://api.onko-fergana.uz/statistika/?page=1&limit=5"
  );
  const { data, isPending } = useFetch(URL);
  const quetions = data && data.data;
  const testName = data && quetions[1].topic_name;
  function changePagination(value) {
    setURL(
      `http://api.onko-fergana.uz/statistika/?id=0&topic_id=0&question_id=0&page=${value}&limit=5`
    );
  }
  console.log(quetions);
  return (
    <div className="flex flex-col items-end">
      <Pending isPending={isPending} />
      <div className="mt-8 mb-5">
        {" "}
        <MiniSelect data={[{ name: testName, value: "bosh" }]} />
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-12">
        {quetions &&
          quetions.map((item) => {
            const resault = [
              {
                name: "A variant",
                uv: item.answer_a,
                pv: 2400,
                amt: 2400,
              },
              {
                name: "B variant",
                uv: item.answer_b,
                pv: 2400,
                amt: 2400,
              },
              {
                name: "D variant",
                uv: item.answer_c,
                pv: 2400,
                amt: 2400,
              },
              {
                name: "E variant",
                uv: item.answer_d,
                pv: 2400,
                amt: 2400,
              },
              {
                name: "F variant",
                uv: item.answer_e,
                pv: 2400,
                amt: 2400,
              },
            ];
            return (
              <RenderBarChart
                key={item.id}
                data={resault}
                title={`${item.id}-Test natijalari`}
                quiz={item.question_name}
              />
            );
          })}
      </div>
      {data && (
        <Pagination value={data.pages} changePagination={changePagination} />
      )}
    </div>
  );
}
export default Home;
