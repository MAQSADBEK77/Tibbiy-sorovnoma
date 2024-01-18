import React from "react";

function Pending({ isPending }) {
  return (
    <div className={isPending == true ? "flex" : "hidden"}>
      <div className="bg-black fixed top-0 left-0 right-0 z-50 bottom-0 h-[100vh]">
        <span className="loading loading-spinner text-primary w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
      </div>
    </div>
  );
}

export default Pending;
