import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/mongoconnect.js";
import cookieParser from "cookie-parser";
import client from "@prometheus-io/client";

import http from "http";
import { Server } from "socket.io";
// Configuring Environment Variables
dotenv.config();

const app = express();
const server = http.createServer(app);

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({register: client.register});


const PORT = process.env.PORT || 4000;
const io = new Server(server)

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  //Socket for Delete Category
  socket.on("Deleted", (message) => {
    console.log("Deleted received:", message);
    io.emit("Update Dashboard");
  });

  //Socket for delete menu
  socket.on("MenuDelete", (message) => {
    console.log("Menu Dekete Recieved", message);
    io.emit("Menu Dashboard");
  });

  socket.on("CategoryAdd", (message) => {
    console.log(message);
    io.emit("CategoryAdd");
  });

  socket.on("updatecategory", (message) => {
    console.log(message);
    io.emit("updatecategory");
  });

  socket.on("MenuAdd", (message) => {
    console.log(message);
    io.emit("MenuAdd");
  });

  socket.on("UpdatedMenu", (message) => {
    console.log(message);
    io.emit("UpdatedMenu");
  });

  socket.on("AddOrder",(message)=>{
    console.log(message)
    io.emit("AddOrder")
  })

  socket.on("statusupdate",(message)=>{
    console.log(message)
    io.emit("statusupdate")
  })

});

// Parse JSON data sent by the client into a JavaScript object.
app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));


app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  }
  catch (err) {
    res.status(500).end(err);
  }
});


app.use(async (req, res, next) => {
  try {
    await connectDatabase();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("Server is Running");
});

import authRouter from "./routes/authRoutes.js";
app.use("/auth", authRouter);

import categoryRouter from "./routes/categoryRoutes.js";
app.use("/category", categoryRouter);

import menuRouter from "./routes/menuRoutes.js";
app.use("/menu", menuRouter);

import cartRouter from "./routes/cartRoutes.js";
app.use("/cart", cartRouter);

import orderRouter from "./routes/orderRoutes.js";
app.use("/order", orderRouter);

import bookingRouter from "./routes/bookingRoutes.js";
app.use("/booking", bookingRouter);

// Start Server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
