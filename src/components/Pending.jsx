import React from 'react'

function Pending({isPending}) {
  return (
    <div className={isPending == true ? "flex" : "hidden"}>
      <div className="bg-black opacity-80 relative top-0 left-0 right-0 bottom-0 z-50 h-[100vh]"></div>
      <span className="loading loading-spinner text-primary w-16 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
    </div>
  );
}

export default Pending