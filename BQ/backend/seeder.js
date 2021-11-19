import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import brands from "./data/brands.js"
import tables from "./data/table.js"
import tableReservations from "./data/tableReservation.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import Brand from "./models/brandModel.js";
import Table from "./models/tabelModel.js";
import TableReservation from "./models/tableReservationModel.js";


dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Brand.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Table.deleteMany();
    await TableReservation.deleteMany();

  

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

     const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });
   // await Product.insertMany(sampleProducts);

    const tableList = await Table.insertMany(tables)

    const userReservation = createdUsers[1]._id
    const TableReservation1 = tableList[0]._id

   


    const temp = tableReservations.map(resver => {
      return {...resver, user: userReservation, table: TableReservation1  }
    })
    await TableReservation.insertMany(temp)
    
    const productList = await Product.insertMany(sampleProducts);

    const sampleBrands = brands.map(brand => {
      let listProductID = []
      for (let i=0; i<productList.length; i++) {
        if ( productList[i].brandName == brand.brandName) listProductID.push(productList[i]._id)
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
    await Brand.deleteMany()
    await Table.deleteMany()
    await TableReservation.deleteMany()

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