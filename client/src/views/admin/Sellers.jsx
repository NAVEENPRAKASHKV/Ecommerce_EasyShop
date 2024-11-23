import React from "react";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";

const Sellers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  // dummy data
  const data = [
    {
      id: 1,
      image: "http://localhost:3000/images/category/1.jpg",
      name: "Category 1",
    },
    {
      id: 2,
      image: "http://localhost:3000/images/category/2.jpg",
      name: "Category 2",
    },
    {
      id: 3,
      image: "http://localhost:3000/images/category/3.jpg",
      name: "Category 3",
    },
    {
      id: 4,
      image: "http://localhost:3000/images/category/4.jpg",
      name: "Category 4",
    },
    {
      id: 5,
      image: "http://localhost:3000/images/category/5.jpg",
      name: "Category 5",
    },
  ];
  return (
    <div className="px-2 lg:pr-7">
      <div className="my-3">
        <h1 className="text-xl font-bold">Sellers Details</h1>
      </div>
      {/* Sellers List Section */}
      <div className="w-full  bg-white shadow-md rounded-md">
        {/* Table Header */}
        <div className="h-14 bg-slate-600 rounded-t-md flex justify-between items-center px-4">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-3 py-2 rounded font-semibold"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="hidden md:block bg-white border border-gray-300 h-10 px-3 py-1 rounded focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* Table Body */}
        <div className="p-4">
          <table className="table-auto w-full text-center border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Shop Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Payment Status
                </th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">District</th>
                <th className="border border-gray-300 px-4 py-2">State</th>
                <th className="border border-gray-300 px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 h-[60px] border-t text-sm"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center gap-3">
                      <Link
                        to={`/admin/dashboard/sellers/details/${item.id}`}
                        className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* pagination */}
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              perPage={perPage}
              showItem={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
