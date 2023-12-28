import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
function RenderBarChart({ data, title, quiz }) {
  return (
    <div className="chart-item flex flex-col max-w-xl">
      <h1 className="text-center text-3xl">{title}</h1>
      <BarChart className="mx-auto" width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
      </BarChart>
      <p className="text-center text-xl">{quiz}</p>
    </div>
  );
}

export default RenderBarChart;
