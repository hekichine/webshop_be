import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";
import initWebRoute from "./routes/initWebRoutes";
import connection from "./database/connectDb";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API WEB SHOP v1",
  });
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

initWebRoute(app);

connection();

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
