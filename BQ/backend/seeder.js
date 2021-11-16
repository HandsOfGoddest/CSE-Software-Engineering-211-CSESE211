import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import brands from "./data/brands.js"
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import Brand from "./models/BrandModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Brand.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });

    const productList = await Product.insertMany(sampleProducts);

    const sampleBrands = brands.map(brand => {
      let listProductID = []
      for (let i=0; i<productList.length; i++) {
        if ( productList[i].brandName == brand.name) listProductID.push(productList[i]._id)
      }
      return { ...brand, hasProducts: listProductID }
    })

    await Brand.insertMany(sampleBrands)

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}
