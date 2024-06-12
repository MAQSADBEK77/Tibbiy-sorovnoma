import { useState } from "react";
import useFetch from "../hooks/useFetch";
function AddUser() {
  const [name, setName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [MiddleName, setMiddleName] = useState(null);
  const [phone_number, setPhone_number] = useState(null);
  const [tg_username, setTg_username] = useState(null);
  const [location, setLocation] = useState(null);
  const [brithday, setBrithday] = useState(null);
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const quizArray = {
    roll: "string",
    name,
    last_name: LastName,
    middle_name: MiddleName,
    phone_number: 0,
    tg_id: id,
    tall: 0,
    weight: 0,
    region: location,
    city: "",
    village: "",
    home_number: 0,
    birth_day: brithday,
    username: tg_username,
    password,
  };
  const { data, loading, error } = useFetch(
    "https://onko-fergana.uz/user/add",
    {
      method: "POST",
      body: postData,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const handleChange = (e) => {
    e.preventDefault();
    quizArray({ ...quizArray });
  };
  return (
    <div className="max-w-xl m-auto flex flex-col gap-y-8">
      <h1 className="text-4xl text-center mt-10">Yangi USER qo'shish</h1>
      <form onSubmit={(e) => handleChange(e)} className="flex flex-col gap-y-8">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          type="text"
          placeholder="Ism"
          className="input input-bordered input-warning w-full"
        />{" "}
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
          type="text"
          placeholder="Familiya"
          className="input input-bordered input-warning w-full"
        />{" "}
        <input
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
          required
          type="text"
          placeholder="Sharifi"
          className="input input-bordered input-warning w-full"
        />
        <input
          onChange={(e) => {
            setPhone_number(e.target.value);
          }}
          required
          type="number"
          placeholder="Telefon raqami"
          className="input input-bordered input-success w-full"
        />
        <input
          onChange={(e) => {
            setTg_username(e.target.value);
          }}
          required
          type="text"
          placeholder="Telegram username"
          className="input input-bordered input-success w-full"
        />
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          required
          type="text"
          placeholder="Yashah manzili"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setBrithday(e.target.value);
          }}
          required
          type="date"
          placeholder="Tug'ilgan kun"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
          type="number"
          placeholder="Telegram ID"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          type="password"
          placeholder="Parol"
          className="input input-bordered input-success w-full"
        />
        <button className="btn btn-outline btn-success">
          Kiritilgan userni qo'shish
        </button>
      </form>
    </div>
  );
}

export default AddUser;
