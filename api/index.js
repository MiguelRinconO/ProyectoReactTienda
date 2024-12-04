const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();
const products = require("./data/products");

const PORT = process.env.PORT;

const cors = require("cors");

const mongoose = require("mongoose");

//conexion a la base de datos

mongoose
  .connect(process.env.MONGOSEDB_RULL)
  .then(() => console.log("conexion estable"))
  .then((err) => {
    err;
  });

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json());

app.use(cors());
//database seeder routes
app.use("/api/seed", databaseSeeder);

//routes for user seeder routes
//api/users/login
app.use("/api/users", userRoute);

// routes for products
app.use("/api/products", productRoute);

//routes for orders

app.use("/api/orders", orderRoute);

app.listen(PORT || 9000, () => {
  console.log(`El servidor esta corriendo en  ${PORT}`);
});

//api products test route

//app.get("/api/products", (req, res)=>{

//    res.json(products);
//})

//app.get("/api/products/:id", (req, res)=>{
//    const products = products.find((product)=>product.id==req.params.id)

//    res.json(products);
//})
