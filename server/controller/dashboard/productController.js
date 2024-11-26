const formidable = require("formidable");
const { responseReturn } = require("../../utils/response");
const cloudinary = require("cloudinary").v2;
const productModel = require("../../model/productModel");

class productController {
  add_product = async (req, res) => {
    console.log("The product controller triggered");
    const { id } = req;
    const form = formidable({ multiples: true });

    form.parse(req, async (err, field, files) => {
      if (err) {
        console.error("Formidable parsing error:", err);
        return responseReturn(res, 400, { error: "Form parsing failed" });
      }

      let {
        name,
        category,
        description,
        stock,
        price,
        discount,
        shopName,
        brand,
      } = field;
      const { images } = files;

      // Validate required fields
      if (
        !name ||
        !category ||
        !description ||
        !stock ||
        !price ||
        !discount ||
        !shopName ||
        !brand
      ) {
        console.log(field);
        return responseReturn(res, 400, { error: "All fields are required" });
      }

      if (!images) {
        return responseReturn(res, 400, {
          error: "At least one image is required",
        });
      }

      // Normalize images to array
      let imagesArray = Array.isArray(images) ? images : [images];

      // Prepare data
      name = name.trim();
      const slug = name
        .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
        .split(" ")
        .join("-")
        .toLowerCase();

      const stockNumber = parseInt(stock);
      const priceNumber = parseInt(price);
      const discountNumber = parseInt(discount);

      if (isNaN(stockNumber) || isNaN(priceNumber) || isNaN(discountNumber)) {
        return responseReturn(res, 400, {
          error: "Stock, price, and discount must be valid numbers",
        });
      }

      try {
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

        // Upload images to Cloudinary
        let allImageUrl = [];
        for (let i = 0; i < imagesArray.length; i++) {
          const result = await cloudinary.uploader.upload(
            imagesArray[i].filepath,
            {
              folder: "products",
            }
          );

          if (!result || !result.url) {
            return responseReturn(res, 400, { error: "Image upload failed" });
          }
          allImageUrl.push(result.url);
        }

        // Create product in the database
        const product = await productModel.create({
          sellerId: id,
          name,
          slug,
          shopName,
          category: category.trim(),
          description: description.trim(),
          stock: stockNumber,
          price: priceNumber,
          discount: discountNumber,
          brand: brand.trim(),
          images: allImageUrl,
        });

        responseReturn(res, 201, { message: "Product added successfully" });
      } catch (error) {
        console.error("Error adding product:", error.message);
        responseReturn(res, 500, { error: "Internal server error" });
      }
    });
  }; //add_product end method
  get_product = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    const { id } = req;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);
    try {
      const searchQuery = searchValue
        ? { $text: { $search: searchValue }, sellerId: id }
        : { sellerId: id };
      const totalProduct = await productModel.countDocuments(searchQuery);
      const products = await productModel
        .find(searchQuery)
        .sort({ createdAt: -1 })
        .limit(perPage)
        .skip(skipPage);
      return responseReturn(res, 200, { totalProduct, products });
    } catch (error) {
      console.error("Error fetching categories:", error);
      return responseReturn(res, 500, { message: "Internal Server Error" });
    }
  };
  get_editProduct = async (req, res) => {
    const { productId } = req.params;
    try {
      if (!productId) {
        return responseReturn(res, 404, { error: "the product not existed" });
      }
      const product = await productModel.findById(productId);
      if (!product) {
        return responseReturn(res, 404, { error: "the product not existed" });
      }
      return responseReturn(res, 200, { product });
    } catch (error) {
      console.log(`the error in the server get product is ${error.message}`);
      return responseReturn(res, 500, { error: "internel server error" });
    }
  };
  product_update = async (req, res) => {
    console.log(req.body);
    let {
      name,
      description,
      stock,
      price,
      discount,
      brand,
      productId,
      category,
    } = req.body;

    console.log("Updating product...");
    try {
      if (
        !productId ||
        !name ||
        !category ||
        !description ||
        !stock ||
        !price ||
        !discount ||
        !brand
      ) {
        return responseReturn(res, 400, { error: "All fields are required" });
      }

      // Validate numerical fields
      const stockNumber = parseInt(stock);
      const priceNumber = parseInt(price);
      const discountNumber = parseInt(discount);

      if (isNaN(stockNumber) || isNaN(priceNumber) || isNaN(discountNumber)) {
        return responseReturn(res, 400, {
          error: "Stock, price, and discount must be valid numbers",
        });
      }

      // Check if product exists
      const existProduct = await productModel.findById(productId);
      if (!existProduct) {
        return responseReturn(res, 404, { error: "Product not found" });
      }

      // Prepare and update product
      name = name.trim();
      const slug = name
        .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
        .split(" ")
        .join("-")
        .toLowerCase();

      await productModel.findByIdAndUpdate(productId, {
        name,
        description: description.trim(),
        stock: stockNumber,
        price: priceNumber,
        discount: discountNumber,
        brand: brand.trim(),
        slug,
      });

      const updatedProduct = await productModel.findById(productId);
      return responseReturn(res, 200, {
        product: updatedProduct,
        message: "Product updated successfully",
      });
    } catch (error) {
      console.error("Error updating product:", error.message);
      return responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new productController();
