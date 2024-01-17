import { useState } from "react";
import MiniSelect from "../components/MiniSelect";
import { useFetch } from "../hooks/useFetch";
function AddTest() {
  const [quiz, setQuiz] = useState(null);
  const [answer_a, setAnswerA] = useState(null);
  const [answer_b, setAnswerB] = useState(null);
  const [answer_c, setAnswerC] = useState(null);
  const [answer_d, setAnswerD] = useState(null);
  const [answer_e, setAnswerE] = useState(null);
  const [answer_f, setAnswerF] = useState(null);
  function submitForm(e) {
    e.preventDefault();
    const quizArray = {
      topic_id: Math.ceil(Math.random() * 1000000),
      question: quiz,
      option_a: answer_a,
      option_b: answer_b,
      option_c: answer_c,
      option_d: answer_d,
      option_e: answer_e,
      option_f: answer_f,
    };
    const { postGetData } = useFetch(
      "https://tibbiy-sorovnomaa.onrender.com/question/add",
      "POST",
      quizArray
    );
    console.log(postGetData);
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
          onChange={(e) => {
            setQuiz(e.target.value);
          }}
          required
          type="text"
          placeholder="Test savolini kiriting"
          className="input input-bordered input-warning w-full"
        />
        <input
          onChange={(e) => {
            setAnswerA(e.target.value);
          }}
          required
          type="text"
          placeholder="A) variantni kiriting"
          className="input input-bordered input-success w-full"
        />
        <input
          onChange={(e) => {
            setAnswerB(e.target.value);
          }}
          required
          type="text"
          placeholder="B) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setAnswerC(e.target.value);
          }}
          required
          type="text"
          placeholder="C) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setAnswerD(e.target.value);
          }}
          required
          type="text"
          placeholder="D) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setAnswerE(e.target.value);
          }}
          required
          type="text"
          placeholder="E) variantni kiriting"
          className="input input-bordered input-success w-full"
        />{" "}
        <input
          onChange={(e) => {
            setAnswerF(e.target.value);
          }}
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
