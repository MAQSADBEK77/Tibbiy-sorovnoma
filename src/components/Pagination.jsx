import React from "react";

function Pagination({ value, changePagination }) {
  let paginationArray = [];
  for (let i = 1; i <= value; i++) {
    paginationArray.push(i);
  }
  return (
    <div className="join my-6 ">
      {paginationArray.map((item) => {
        return (
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={item}
            onClick={() => changePagination(item)}
          />
        );
      })}
    </div>
  );
}

export default Pagination;
