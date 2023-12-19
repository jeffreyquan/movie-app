import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import searchRouter from "./routes/search";

const app = express();
const router = express.Router();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

router.use("/search", searchRouter);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Movie api listening on port ${port}`);
});
