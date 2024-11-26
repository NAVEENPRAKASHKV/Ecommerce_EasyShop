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
  };
}

module.exports = new productController();
