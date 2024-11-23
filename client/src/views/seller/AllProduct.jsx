import React, { useState } from "react";
import Search from "../../components/Search";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import { MdAutoDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

import Pagination from "../Pagination";

const AllProduct = () => {
  const [perPage, setPerPage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState("");
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
    <div className="px-2 md:pr-7">
      <div className="my-5">
        <h1 className="text-xl font-bold">All Products</h1>
      </div>
      <div>
        {/* Category List Section */}
        <div className="w-full  bg-white shadow-md rounded-md">
          {/* Table Header */}
          <Search
            setPerPage={setPerPage}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {/* Table Body */}
          <div className="p-4">
            <table className="table-auto w-full text-center border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">No</th>
                  <th className="border border-gray-300 px-4 py-2">Image</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Product Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Brand</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Discount</th>
                  <th className="border border-gray-300 px-4 py-2">Stock</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-100 h-[60px] border-t"
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
                          to="#"
                          className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                        >
                          <LiaEditSolid />
                        </Link>
                        <Link
                          to="#"
                          className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                        >
                          <FaEye />
                        </Link>
                        <Link
                          to="#"
                          className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                        >
                          <MdAutoDelete />
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
    </div>
  );
};

export default AllProduct;
