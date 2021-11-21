import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
<<<<<<< HEAD
import brandRoutes from './routes/brandRoutes.js'
import tableRoutes from './routes/tableRoute.js'
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
=======
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cartRoutes from './routes/cartRoutes.js'

>>>>>>> 350067ea16b5a624504211a8539f803d11817691

dotenv.config();

connectDB();


const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

<<<<<<< HEAD
app.get("/", (req, res) => {
  res.send("API is running....");
});
=======
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/cart', cartRoutes)
>>>>>>> 350067ea16b5a624504211a8539f803d11817691

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})
app.use('/api/brands', brandRoutes)
app.use('/api/tables', tableRoutes)
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
