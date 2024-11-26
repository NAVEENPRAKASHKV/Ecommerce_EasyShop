const formidable = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const categoryModel = require("../../model/categoryModel");

class categoryController {
  add_category = async (req, res) => {
    const form = formidable();
    form.parse(req, async (err, field, files) => {
      if (err) {
        console.error("Formidable parsing error:", err);
        return responseReturn(res, 400, { error: "Form parsing failed" });
      }

      let { categoryName } = field;
      let { image } = files;

      // Validate fields
      if (!categoryName || !image || !image.filepath) {
        return responseReturn(res, 400, { error: "All fields are mandatory" });
      }

      categoryName = categoryName.trim();
      const slug = categoryName
        .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
        .split(" ")
        .join("-")
        .toLowerCase();

      // Check if category exists
      let categoryExist;
      try {
        categoryExist = await categoryModel.findOne({ categoryName });
      } catch (err) {
        console.error("Error checking category existence:", err);
        return responseReturn(res, 500, { error: "Internal server error" });
      }

      if (categoryExist) {
        return responseReturn(res, 400, {
          error: "Category name already exists. Use another name.",
        });
      }

      // Validate Cloudinary configuration
      if (
        !process.env.CLOUD_NAME ||
        !process.env.API_KEY ||
        !process.env.API_SECRET
      ) {
        console.error("Missing Cloudinary configuration");
        return responseReturn(res, 500, {
          error: "Cloudinary configuration missing",
        });
      }

      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true,
      });

      // Upload image to Cloudinary
      let result;
      try {
        result = await cloudinary.uploader.upload(image.filepath, {
          folder: "categories",
        });
      } catch (err) {
        console.error("Error uploading image:", err);
        return responseReturn(res, 500, { error: "Image upload failed" });
      }

      if (!result || !result.url) {
        return responseReturn(res, 400, { error: "Image upload failed" });
      }

      // Create category in the database
      let category;
      try {
        category = await categoryModel.create({
          categoryName,
          slug,
          image: result.url,
        });
      } catch (err) {
        console.error("Error while creating category:", err);
        return responseReturn(res, 500, { error: "Internal server error" });
      }

      return responseReturn(res, 201, {
        category,
        message: "Category added successfully",
      });
    });
  }; //add_category method end
  get_category = async (req, res) => {
    const { page, searchValue, perPage } = req.query;

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
  }; //get_category method end
  update_category = async (req, res) => {
    const form = formidable();
    form.parse(req, async (err, field, files) => {
      if (err) {
        return responseReturn(res, 404, { error: "some thing went wrong" });
      }
      let { categoryName } = field;
      let { image } = files;
      const { categoryId } = req.params;
      const slug = categoryName
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .split(" ")
        .join("-")
        .toLowerCase();
      try {
        let result;
        if (image) {
          cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            secure: true,
          });
          result = await cloudinary.uploader.upload(image.filepath, {
            folder: "categories",
          });
        }
        const updateData = {
          categoryName,
          slug,
        };
        if (result) {
          updateData.image = result.url;
        }
        const category = await categoryModel.findByIdAndUpdate(
          categoryId,
          updateData,
          { new: true }
        );
        responseReturn(res, 200, {
          category,
          message: "category updated successfuly",
        });
      } catch (error) {
        responseReturn(res, 500, { error: "internel server error" });
      }
    });
  }; //update_category method end
  delete_category = async (req, res) => {
    try {
      const { categoryId } = req.params;
      if (!categoryId) {
        return responseReturn(res, 400, { error: "Category ID is required" });
      }

      const deletedCategory = await categoryModel.findByIdAndDelete(categoryId);

      if (!deletedCategory) {
        return responseReturn(res, 404, { error: "The data was not found" });
      }

      responseReturn(res, 200, {
        deletedCategory,
        message: "The category was successfully deleted",
      });
    } catch (error) {
      console.error("Error during deletion:", error);
      return responseReturn(res, 500, { error: "Internal server error" });
    }
  }; // End of delete_category
}

module.exports = new categoryController();
