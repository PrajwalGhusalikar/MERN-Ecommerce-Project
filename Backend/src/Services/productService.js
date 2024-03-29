const Category = require("../Models/categoryModel");
const Product = require("../Models/productModel");

const createProduct = async (reqData) => {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
    await topLevel.save(); //note
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    await secondLevel.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    await thirdLevel.save();
  }

  const product = new Product({
    title: reqData.title,
    description: reqData.description,
    price: reqData.price,
    discontedPrice: reqData.discontedPercent,
    discontedPercent: reqData.discontedPercent,
    quantity: reqData.quantity,
    brand: reqData.brand,
    color: reqData.color,
    sizes: reqData.sizes,
    imageUrl: reqData.imageUrl,
    category: thirdLevel._id,
  });

  return await product.save();
};

const deleteProduct = async (productId) => {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted successfully";
};

const updateProduct = async (productId, reqData) => {
  return await Product.findByIdAndUpdate(productId, reqData);
};

const findProductById = async (id) => {
  const product = await Product.findById(id).populate("category").populate("reviews").exec();
  if (!product) {
    throw new Error("product not found with id: " + id);
  }
  return product;
};

const getAllProducts = async (reqQuery) => {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;
  minPrice = Number(minPrice);
  maxPrice = Number(maxPrice);
  minDiscount = Number(minDiscount);
  pageSize = pageSize || 10;
  console.log("stock", stock, typeof stock);
  let query = Product.find().populate({ path: "category", populate: { path: "parentCategory", populate: { path: "parentCategory" } } })
  // console.log("//query//-", query)
  console.log("//reqQuery//-", reqQuery);

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    // console.log("category from query", category);

    if (existCategory) {
      console.log("exist category", existCategory);
      query = query.where("category").equals(existCategory._id); //note
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }
  console.log("catergory end ");
  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    ); //note

    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where("color").regex(colorRegex); //note
  }
  console.log("color end ");
  if (sizes) {
    const sizesSet = new Set(sizes); //note what is Set
    query = query.where("sizes.name").in([...sizesSet]);
  }
  console.log("size end ");
  if (minPrice && maxPrice) {
    console.log("inside min price  ", typeof minPrice);
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }
  console.log("max price min price t end ");
  if (minDiscount) {
    query = query.where("discountPercent").gt(minDiscount);
  }
  console.log("min discount end ");
  if (stock) {
    if (stock === "in_stock") {
      query = query.where("quantity").gt(0);
    }
    if (stock === "out_of_stock") {
      query = query.where("quantity").gt(1);
    }
  }
  console.log("stock end ");
  if (sort) {
    const sortDirection = sort === "price_hight" ? -1 : 1;
    query = query.sort({ discontedPrice: sortDirection });
  }
  console.log("sort end ");
  const totalProducts = await Product.countDocuments(query);

  console.log();
  const skip = (pageNumber - 1) * pageSize;
  console.log("skip", skip);
  query = query.skip(skip).limit(pageSize);
  console.log("skip ");
  const products = await query.exec();
  console.log("products", products);
  const totalPages = Math.ceil(totalProducts / pageSize);
  return { content: products, currentPage: pageNumber, totalPages };
};

//for admin only
const createMultipleProduct = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct,
};
