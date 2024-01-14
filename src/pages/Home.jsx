import RenderBarChart from "../components/RenderBarChart";
import MiniSelect from "../components/MiniSelect";
import { useFetch } from "../hooks/useFetch";
import Pending from "../components/Pending";
function Home() {
  const { data, isPending, error } = useFetch(
    "https://tibbiy-sorovnomaa.onrender.com/statistika/?id=0&page=1&limit=5"
  );
  const quetions = data && data.data;
  const testName = data && quetions[1].topic_name;
  return (
    <div className="container">
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
              <RenderBarChart key={item.id}
                data={resault}
                title={`${item.id + 1}-Test natijalari`}
                quiz={item.question_name}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
