import RenderBarChart from "../components/RenderBarChart";
import MiniSelect from "../components/MiniSelect";
function Home() {
  const data1 = [
    { name: "A variant", uv: 200, pv: 2400, amt: 2400 },
    { name: "B variant", uv: 400, pv: 2400, amt: 2400 },
    { name: "C variant", uv: 150, pv: 2400, amt: 2400 },
    { name: "D variant", uv: 60, pv: 2400, amt: 2400 },
    { name: "E variant", uv: 100, pv: 2400, amt: 2400 },
  ];

  return (
    <div className="container">
      <MiniSelect
        data={[
          { name: "Bosh kasalliklari test natijalari", value: "bosh" },
          { name: "Oyoq kasalliklari test natijalari", value: "bosh" },
          { name: "Ichak kasalliklari test natijalari", value: "bosh" },
        ]}
      />
      <div className="flex flex-wrap gap-x-5 gap-y-12">
        <RenderBarChart
          data={data1}
          title={"2-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />
        <RenderBarChart
          data={data1}
          title={"3-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"4-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"5-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"6-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"7-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"8-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"9-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"10-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />{" "}
        <RenderBarChart
          data={data1}
          title={"11-Test natijalari"}
          quiz={" Savol : Tovuq birinchi paydo bo'lganmi tuxummi."}
        />
      </div>
    </div>
  );
}
export default Home;
