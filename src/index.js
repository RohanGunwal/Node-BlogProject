const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

dotenv.config();
//connect to DB
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
    app.listen(9000, () =>
      console.log("Server is up and running at http://localhost:9000")
    );
  }
);
