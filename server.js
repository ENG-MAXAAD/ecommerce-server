const express = require("express");
const dotEnv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use("/public/uploads", express.static("public/uploads"));
const userRouter = require("./src/user/router");
const categoryRouter = require("./src/category/router");
const productRouter = require("./src/product/router");
const bannerRouter = require("./src/banner/router");
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/banner", bannerRouter);

app.use((req,res,next)=>{
 res.status(404).send("Not Found url");
})

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected ✅"))
  .catch((err) => console.log("DB connection error ❌", err));
app.listen(process.env.PORT, () =>
  console.log(`PORT SUCCESS ✅ AT ${process.env.PORT}`)
);
