import MiniSelect from "../components/MiniSelect";
function AddTest() {
  return (
    <div className="max-w-xl m-auto flex flex-col gap-y-8">
      <h1 className="text-4xl text-center mt-10">Yangi test qo'shish</h1>
      <MiniSelect
        data={[
          { name: "Bosh kasalliklari test natijalari", value: "bosh" },
          { name: "Oyoq kasalliklari test natijalari", value: "bosh" },
          { name: "Ichak kasalliklari test natijalari", value: "bosh" },
        ]}
      />
      <form className="flex flex-col gap-y-8">
        <input
          type="text"
          placeholder="Test savolini kiriting"
          className="input input-bordered input-success w-full"
        />
        <div className="w-full flex items-center">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox checkbox-success"
          />
          <input
            type="text"
            placeholder="Test savolini kiriting"
            className="input input-bordered input-success w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default AddTest;
