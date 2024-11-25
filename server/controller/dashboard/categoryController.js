const formidable = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const categoryModel = require("../../model/categoryModel");

class categoryController {
  add_category = async (req, res) => {
    const form = formidable();
    form.parse(req, async (err, field, files) => {
      if (err) {
        return responseReturn(res, 404, { error: "some thing went wrong" });
      }

      let { categoryName } = field; //to get the input filed
      let { image } = files; // to get the images
      categoryName = categoryName.trim();
      const slug = categoryName
        .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
        .split(" ")
        .join("-")
        .toLowerCase();

      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true,
      });

      try {
        const result = await cloudinary.uploader.upload(image.filepath, {
          folder: "categories",
        });
        if (result) {
          const category = await categoryModel.create({
            categoryName,
            slug,
            image: result.url,
          });
          return responseReturn(res, 201, {
            category,
            message: "category added  successfuly",
          });
        } else {
          return responseReturn(res, 404, { error: "image upload faild" });
        }
      } catch (error) {
        return responseReturn(res, 404, { error: "interner server error" });
      }
    });
  };
  get_category = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    console.log("The request queries are:", req.query);

    // Ensure numeric values for pagination
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      // Dynamic search query
      const searchQuery = searchValue
        ? { $text: { $search: searchValue } }
        : {};

      // Get total count for the search query
      const totalCategory = await categoryModel.countDocuments(searchQuery);

      // Fetch paginated results
      const categories = await categoryModel
        .find(searchQuery)
        .sort({ createdAt: -1 })
        .skip(skipPage)
        .limit(parseInt(perPage));

      // Return response
      return responseReturn(res, 200, { categories, totalCategory });
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
}

module.exports = new categoryController();
