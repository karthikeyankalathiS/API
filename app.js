const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const route = require("./Route/route.js");
const dotenv = require("dotenv");
const dbConfig = require("./Config/mongoDbConfig.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware for security and logging
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

// Implement rate limiting to prevent
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use("/api/", limiter);
app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
