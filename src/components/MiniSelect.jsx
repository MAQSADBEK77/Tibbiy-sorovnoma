function MiniSelect({ data }) {
  return (
    <select className="select select-primary w-full">
      {data.map((item) => {
        return <option key={item.name} value={item.value}>{item.name}</option>;
      })}
    </select>
  );
}

export default MiniSelect;
