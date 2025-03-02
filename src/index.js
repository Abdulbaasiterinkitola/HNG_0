import express from "express";
import cors from "cors";
import moment from "moment";
import {configDotenv} from "dotenv";

configDotenv();

const app = express();

app.use(express.json())
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  const response = {
    email: "eabdulbaasit@gmail.com",
    current_datetime: moment.utc().format('YYYY-MM-DDTHH:mm:ss[Z]'),
    github_url: 'https://github.com/Abdulbaasiterinkitola/HNG_0',
  };
  res.set('Cache-Control', 'no-store')
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}`);
});