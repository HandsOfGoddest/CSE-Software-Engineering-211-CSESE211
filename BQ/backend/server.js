import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import brandRoutes from './routes/brandRoutes.js'
import tableRoutes from './routes/tableRoute.js'
import morgan from "morgan";
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cartRoutes from './routes/cartRoutes.js'

import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config();

connectDB();


const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/cart', cartRoutes)

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})
app.use('/api/brands', brandRoutes)
app.use('/api/tables', tableRoutes)
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, '/uploads')))

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);



// 		                 _oo0oo_
//                    o8888888o
//                    88" . "88
//                    (| -_- |)
//                    0\  =  /0
//                  ___/`---'\___
//                .' \|     |// '.
//               / \|||  :  |||// \
//              / _||||| -:- |||||- \
//             |   | \\  -  /// |   |
//             | \_|  ''\---/''  |_/ |
//             \  .-\__  '-'  ___/-. /
//           ___'. .'  /--.--\  `. .'___
//        ."" '<  `.___\_<|>_/___.' >' "".
//       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//       \  \ `_.   \_ __\ /__ _/   .-` /  /
//   =====`-.____`.___ \_____/___.-`___.-'=====
//                     `=---='
