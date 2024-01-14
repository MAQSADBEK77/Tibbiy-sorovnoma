import MiniSelect from "../components/MiniSelect";
function AddTest() {
  function submitForm(e) {
    e.preventDefault();
    console.log("Miyavvv");
  }
  return (
    <div className="max-w-xl m-auto flex flex-col gap-y-8">
      <h1 className="text-4xl text-center mt-10">Yangi test qo'shish</h1>
      <MiniSelect
        data={[
          { name: "Tibbiy-Ijtimoiy so'ro'vnoma(Ayollar uchun)", value: "1" },
        ]}
      />
      <form onSubmit={(e) => submitForm(e)} className="flex flex-col gap-y-8">
        <input
          required
          type="text"
          placeholder="Test savolini kiriting"
          className="input input-bordered input-warning w-full"
        />
        <input
          required
          type="text"
          placeholder="A) variantni kiriting"
          className="input input-bordered input-success w-full"
        />
        <input
          required
          type="text"
          placeholder="B) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          required
          type="text"
          placeholder="D) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          required
          type="text"
          placeholder="E) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          required
          type="text"
          placeholder="F) variantni kiriting"
          className="input input-bordered input-success w-full"
        />
        <button className="btn btn-outline btn-success">Testni qo'shish</button>
      </form>
    </div>
  );
}

export default AddTest;
