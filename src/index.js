import express from "express";
import cors from "cors";
import {configDotenv} from "dotenv";

configDotenv();

const app = express();

app.use(express.json())
const PORT = process.env.PORT;
const EMAIL = process.env.EMAIL;

app.use(cors());

app.get('/', (req, res) => {
  const response = {
    email: EMAIL,
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Abdulbaasiterinkitola/HNG_0',
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}`);
});