import React from "react";

function Pending({ isPending }) {
  return (
    <div className={isPending == true ? "flex" : "hidden"}>
      <div className="bg-black inline fixed top-0 -left-[45%] z-50 h-[100vh] w-[100vw]">
        <span className="loading loading-spinner text-primary w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
      </div>
    </div>
  );
}

export default Pending;
