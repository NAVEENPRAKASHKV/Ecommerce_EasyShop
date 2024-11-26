import React, { useEffect, useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaImages } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { PropagateLoader } from "react-spinners";
import { overRideStyle } from "../../utils/spinnerProperty";
import {
  categoryAdd,
  messageClear,
  get_category,
  updateCategory,
  deleteCategory,
} from "../../store/Reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Search from "../../components/Search";

const Category = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState("");
  const [state, setState] = useState({
    categoryName: "",
    image: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();

  const { loader, successMessage, errorMessage, categories, totalCategory } =
    useSelector((store) => store.category);

  // handling edit and update in single submit
  const addOrUpdateCategory = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateCategory({ id: editId, ...state })); ////to update
      setIsEdit(false);
      setEditId(null);
    } else {
      dispatch(categoryAdd(state));
    }
  };

  // handlig the new image
  const imageHandle = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setState({
        ...state,
        image: files[0],
      });
      setImageShow(URL.createObjectURL(files[0]));
    }
  };

  // after posting the data to server
  useEffect(() => {
    if (errorMessage) {
      toast(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        image: "",
      });
      setImageShow("");
    }
  }, [successMessage, errorMessage, dispatch]);

  // to make search in the category and also fetch the data in initial rendering
  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };

    dispatch(get_category(obj));
  }, [perPage, currentPage, searchValue]);

  // to handling the edit option in the category

  const handleEdit = (category) => {
    setState({
      categoryName: category.categoryName,
      image: category.image,
    });
    setImageShow(category.image);
    setEditId(category._id);
    setIsEdit(true);
    setShow(true);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete the category ?")) {
      console.log("the deleted item is", id);
      dispatch(deleteCategory(id));
    }
  };

  return (
    <div className="px-4 lg:px-8 pt-5">
      {/* toggle button for add category small screen */}
      <div
        className="flex justify-start items-center my-3 gap-3 font-bold cursor-pointer lg:hidden"
        onClick={() => setShow(!show)}
      >
        <MdFormatListBulletedAdd className="text-2xl" />
        <h4>Add new category</h4>
      </div>
      <div className="flex flex-wrap gap-5 relative">
        {/* Category List Section */}
        <div className="w-full lg:w-7/12 bg-white shadow-md rounded-md">
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
                    Category Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-100 h-[60px] border-t"
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.categoryName}
                        className="w-12 h-12 mx-auto"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.categoryName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex justify-center gap-3">
                        <Link
                          to="#"
                          onClick={() => handleEdit(item)}
                          className="px-3 py-2 rounded-full hover:bg-blue-200 text-lg"
                        >
                          <LiaEditSolid />
                        </Link>
                        <Link
                          to="#"
                          onClick={() => handleDelete(item._id)}
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
                totalItem={totalCategory}
                perPage={perPage}
                showItem={3}
              />
            </div>
          </div>
        </div>

        {/* Add New Category Section */}
        <div
          className={`w-[320px] lg:w-4/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? `right-0` : `-right-[340px]`
          } bg-slate-600 shadow-md rounded-md p-5 z-[9999] top-10 lg:top-0 transition-all duration-500  `}
        >
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-4 text-white text-center">
              {isEdit ? "Update Category" : " Add New Category"}
            </h2>
            {/* close button */}
            {show && (
              <span
                onClick={() => {
                  setShow(false);
                  setState({ ...state, categoryName: "" });
                  setImageShow("");
                  setIsEdit(false);
                }}
                className="text-2xl  text-white hover:cursor-pointer hover:bg-red-600 rounded-full w-8 h-8 flex justify-center items-center"
              >
                <IoClose />
              </span>
            )}
          </div>

          {/* Add Category Form Placeholder */}
          <form
            className="mt-10 flex flex-col gap-3"
            onSubmit={addOrUpdateCategory}
          >
            <div>
              <label htmlFor="categoryName " className="text-white">
                Category Name
              </label>
              <input
                id="categoryName"
                name="categoryName"
                value={state.categoryName}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setState({ ...state, [name]: value });
                }}
                type="text"
                placeholder="Category Name"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex w-full border border-dashed ">
              <label
                htmlFor="image"
                className=" h-[238px] w-full flex flex-col justify-center items-center cursor-pointer text-white "
              >
                {imageShow ? (
                  <img className="h-full w-full" src={imageShow} alt="img" />
                ) : (
                  <>
                    <span>
                      <FaImages />
                    </span>
                    <span>Upload image</span>
                  </>
                )}
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="hidden"
                accept="image/*"
                onChange={imageHandle}
              />
            </div>

            <button
              disabled={loader}
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overRideStyle} />
              ) : isEdit ? (
                "Update Category"
              ) : (
                "Add Category"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
