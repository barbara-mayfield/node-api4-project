const express = require("express");
const cors = require("cors");
const postRouter = require("./routers/posts");

const server = express();
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 8080

server.use(express.json());
server.use(cors());
server.use("/api/posts", postRouter);

server.use((req, res, next) => {
	const actualIp = req.get("x-forwarded-for") || req.ip
	console.log(`[${new Date().toLocaleString()}] ${actualIp} ${req.method} ${req.url}`)
	next()
})

server.get("/", (req, res) => {
    res.json({ 
      message: "Welcome to the Posts API",
      cohort: process.env.LAMBDA_COHORT,
      secret: process.env.SUPER_SECRET_API_KEY, 
    })
})

server.listen(port, host, () => {
  console.log(`\n*** Server Running @ http://${host}:${port} ***\n`)
})
