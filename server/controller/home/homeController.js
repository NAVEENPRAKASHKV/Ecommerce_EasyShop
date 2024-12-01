const categoryModel = require("../../model/categoryModel");
const productModel = require("../../model/productModel");
const { responseReturn } = require("../../utils/response");

class homeController {
  formate_product = (products) => {
    const productArray = [];
    let i = 0;
    while (i < products.length) {
      let temp = [];
      let j = i;
      while (j < i + 3) {
        if (products[j]) {
          temp.push(products[j]);
        }
        j++;
      }
      productArray.push([...temp]);
      i = j;
    }
    return productArray;
  };
  get_categories = async (req, res) => {
    try {
      const categories = await categoryModel.find({ isDeleted: false });
      if (!categories) {
        responseReturn(res, 404, { error: "error while fetchig the category" });
      }
      responseReturn(res, 200, {
        categories,
        message: "successfuly get categories",
      });
    } catch (error) {
      console.log("error while fetchin the category");
      responseReturn(res, 500, { error: "internel server error" });
    }
  };
  get_products = async (req, res) => {
    try {
      const products = await productModel
        .find({ isDeleted: false })
        .limit(12)
        .sort({
          createdAt: -1,
        });
      // latest products
      const allProducts_1 = await productModel
        .find({ isDeleted: false })
        .limit(9)
        .sort({
          createdAt: -1,
        });
      const latest_product = this.formate_product(allProducts_1);
      //discounted products
      const allProducts_2 = await productModel
        .find({ isDeleted: false })
        .limit(9)
        .sort({
          discount: -1,
        });
      const discounted_product = this.formate_product(allProducts_2);

      //top rated products
      const allProducts_3 = await productModel
        .find({ isDeleted: false })
        .limit(9)
        .sort({
          rating: -1,
        });
      const topRated_product = this.formate_product(allProducts_3);

      responseReturn(res, 200, {
        products,
        topRated_product,
        discounted_product,
        latest_product,
        message: "successfuly fetch product data",
      });
    } catch (error) {
      console.log(error.message);
      console.log("error while fetchin the category");
      responseReturn(res, 500, { error: "internel server error" });
    }
  };
  product_details = async (req, res) => {
    const { slug } = req.params;
    try {
      const product = await productModel.findOne({ slug });

      if (!product) {
        return responseReturn(res, 404, { error: "Product not found" });
      }

      const relatedProducts = await productModel
        .find({
          $and: [
            { isDeleted: false },
            { _id: { $ne: product._id } },
            { category: product.category },
          ],
        })
        .limit(12);

      // Fetch more products from the same seller, excluding the current product
      const moreProducts = await productModel
        .find({
          $and: [{ _id: { $ne: product._id } }, { sellerId: product.sellerId }],
        })
        .limit(3);

      // Return the response
      responseReturn(res, 200, {
        product,
        relatedProducts,
        moreProducts,
      });
    } catch (error) {
      console.error(error.message);
      console.error("Error while fetching the product details");
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new homeController();
