import MiniSelect from "../components/MiniSelect";
function AddTest() {
  return (
    <div className="max-w-xl m-auto flex flex-col gap-y-8">
      <h1 className="text-4xl text-center mt-10">Yangi test qo'shish</h1>
      <MiniSelect
        data={[
          { name: "Tibbiy-Ijtimoiy so'ro'vnoma(Ayollar uchun)", value: "1" },
        ]}
      />
      <form className="flex flex-col gap-y-8">
        <input
          type="text"
          placeholder="Test savolini kiriting"
          className="input input-bordered input-warning w-full"
        />
        <input
          type="text"
          placeholder="A) variantni kiriting"
          className="input input-bordered input-success w-full"
        />
        <input
          type="text"
          placeholder="B) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          type="text"
          placeholder="D) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          type="text"
          placeholder="E) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          type="text"
          placeholder="F) variantni kiriting"
          className="input input-bordered input-success w-full"
        />
      </form>
    </div>
  );
}

export default AddTest;
