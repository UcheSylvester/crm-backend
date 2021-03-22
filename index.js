import express from "express";
import crmRoutes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 4000;

// DB Connection
const uri = "mongodb://localhost/CRMDB";
mongoose.Promise = global.Promise;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((value) => console.log("connected to database"))
  .catch((err) => console.log("error", err));

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

crmRoutes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
