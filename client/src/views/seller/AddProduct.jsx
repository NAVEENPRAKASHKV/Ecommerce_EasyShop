import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegImages } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { get_category } from "../../store/Reducers/categoryReducer";
import { add_product, messageClear } from "../../store/Reducers/productReducer";
import { toast } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { overRideStyle } from "./../../utils/spinnerProperty";

const AddProduct = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });
  const [cateShow, setCateShow] = useState(false); //toggle the category input
  const [category, setCategory] = useState(""); //to set category input from the modal
  const [allCategory, setAllCategory] = useState([]); //all category
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]); //images
  const [imageShow, SetImageShow] = useState([]); //url of the images

  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.category);
  const { successMessage, errorMessage, loader } = useSelector(
    (store) => store.product
  );

  //fetchin the category and update category list
  useEffect(() => {
    dispatch(
      get_category({
        perPage: "",
        page: "",
        searchValue: "",
      })
    );
  }, []);
  useEffect(() => {
    setAllCategory(categories);
  }, [categories]);
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
      });
      SetImageShow([]);
      setImages([]);
      setCategory("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);

  // handling removing the images
  const handleRemove = (i) => {
    const filterdImages = images.filter((_, index) => index !== i);
    const filterdUrl = imageShow.filter((_, index) => index !== i);
    setImages(filterdImages);
    SetImageShow(filterdUrl);
  };
  //handle input data
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  // to change image of already uploaded
  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;
      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImages([...tempImages]);
      SetImageShow([...imageShow]);
    }
  };
  // handle new image upload
  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      SetImageShow([...imageShow, ...imageUrl]);
    }
  };
  // category search
  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      let srcValue = allCategory.filter((c) =>
        c.categoryName.toLowerCase().includes(value.toLowerCase())
      );
      setAllCategory(srcValue);
    } else {
      setAllCategory(categories);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    // Validation checks form values and images
    if (
      !state.brand ||
      !state.name ||
      !state.price ||
      !state.description ||
      !state.discount ||
      !state.stock
    ) {
      toast.error("All fields are required");
      return;
    }
    if (!images || images.length === 0) {
      toast.error("Image of the product is mandatory");
      return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append("brand", state.brand);
    formData.append("description", state.description);
    formData.append("discount", state.discount);
    formData.append("name", state.name);
    formData.append("price", state.price);
    formData.append("stock", state.stock);
    formData.append("category", category);
    formData.append("shopName", "EasyShop");

    for (let index = 0; index < images.length; index++) {
      formData.append("images", images[index]);
    }

    // Debugging FormData content
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    // Dispatch action
    dispatch(add_product(formData));
  };

  return (
    <div className="px-2 lg:pr-7 ">
      <div className="my-5">
        <h1 className="text-xl font-bold">Add Product</h1>
      </div>
      <div className="w-full p-4 bg-slate-600 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-white text-xl font-semibold">Product Details</h1>
          <Link className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2">
            All Product
          </Link>
        </div>
        <div>
          <form onSubmit={handleAdd}>
            {/* product and Brand */}
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black "
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none text-black border border-slate-700 rounded-md "
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Brand Name"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
              {/* Category */}
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  className="px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black"
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  id="category"
                  placeholder="--select category--"
                />

                <div
                  className={`absolute top-[100%] bg-lime-900 w-full transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  } `}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-100 rounded-md text-[#d0d2d6] overflow-hidden"
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scrool">
                    {allCategory.map((c, i) => (
                      <span
                        key={c._id}
                        className={`px-4 py-2 hover:bg-black hover:text-white hover:shadow-lg w-full cursor-pointer ${
                          category === c.categoryName && "bg-indigo-700"
                        }`}
                        onClick={() => {
                          setCateShow(false);
                          setCategory(c.categoryName);
                          setSearchValue("");
                          setAllCategory(categories);
                        }}
                      >
                        {c.categoryName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* procuct stock */}
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black"
                  onChange={inputHandle}
                  value={state.stock}
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="Stock"
                />
              </div>
            </div>
            {/* price and discount  */}
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black"
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="price"
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black"
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="discount by %"
                />
              </div>
            </div>
            {/* description */}
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="description" className="text-[#d0d2d6]">
                Description
              </label>
              <textarea
                className="px-4 py-2 focus:border-indigo-500 outline-none  border border-slate-700 rounded-md text-black"
                onChange={inputHandle}
                value={state.description}
                name="description"
                id="description"
                placeholder="Description"
                cols="10"
                rows="4"
              ></textarea>
            </div>
            {/* images */}
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  gap-2 mb-5">
              {/* uploaded images */}
              {imageShow.map((img, i) => (
                <div className="h-[180px] w-[180px] relative">
                  <label htmlFor={i} className="cursor-pointer">
                    {/* display uploaded images */}
                    <img
                      className="w-full h-full rounded-sm"
                      src={img.url}
                      alt=""
                    />
                  </label>
                  {/* replace images */}
                  <input
                    onChange={(e) => changeImage(e.target.files[0], i)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                  {/* remove icon */}
                  <span
                    onClick={() => handleRemove(i)}
                    className="absolute right-4  top-2 z-50 w-[20px] h-[20px] rounded-full bg-white hover:bg-red-500 flex justify-center items-center cursor-pointer"
                  >
                    <IoMdCloseCircle />
                  </span>
                </div>
              ))}
              {/* uploading new images */}
              <label
                htmlFor="image"
                className="flex flex-col justify-center items-center h-[180px] w-[180px] bg-white cursor-pointer"
              >
                <span>
                  <FaRegImages />
                </span>
                <span>Select Image</span>
              </label>
              <input
                multiple
                type="file"
                id="image"
                className="hidden"
                onChange={imageHandle}
              />
            </div>
            {/* button to add product */}
            <div className="">
              <button
                disabled={loader}
                className="bg-red-600 py-2 px-3 rounded-lg text-white font-bold"
              >
                {loader ? (
                  <PropagateLoader color="#fff" cssOverride={overRideStyle} />
                ) : (
                  "Add Category"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
