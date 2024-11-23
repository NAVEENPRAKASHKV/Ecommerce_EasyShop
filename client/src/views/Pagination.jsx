import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}) => {
  const totalPage = Math.ceil(totalItem / perPage); // Total pages
  let startPage = pageNumber; // Starting page number
  const diff = totalPage - pageNumber;

  // Adjust startPage if the difference between totalPage and current page is less than showItem
  if (diff <= showItem) {
    startPage = totalPage - showItem + 1;
  }

  let endPage = startPage < 1 ? showItem : showItem + startPage; // End page number

  if (startPage <= 0) startPage = 1; // Ensure startPage is valid
  if (endPage > totalPage + 1) endPage = totalPage + 1; // Ensure endPage doesn't exceed total pages

  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`${
            pageNumber === i
              ? "bg-green-600 text-white"
              : "bg-slate-600 hover:bg-green-900 text-[#d0d2d6]"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3 items-center">
      {/* Previous Button */}
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-400 text-black cursor-pointer hover:bg-indigo-400"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}

      {/* Page Buttons */}
      {createBtn()}

      {/* Next Button */}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-400 text-black cursor-pointer hover:bg-indigo-400"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
