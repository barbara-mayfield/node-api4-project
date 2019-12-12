const express = require("express");
const cors = require("cors");
const postRouter = require("./routers/posts");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
    res.json({ message: "Welcome to the Posts API" })
})

server.listen(8080, () => {
  console.log("\n*** Server Running on http://localhost:8080 ***\n")
})
