import React from "react";

function Pagination({ value, changePagination }) {
  let paginationArray = [];
  for (let i = 1; i <= value; i++) {
    paginationArray.push(i);
  }

  return (
    <div className="join my-6">
      {paginationArray.map((item) => (
        <input
          key={item} // Har bir element uchun unique key qo‘shildi
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={item}
          onClick={() => changePagination(item)} // onClick o‘rniga onChange ishlatildi
        />
      ))}
    </div>
  );
}

export default Pagination;
