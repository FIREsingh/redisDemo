import axios from "axios";
import express from "express";
import { client } from "./config.js";

const app = express();

app.get("/users", async (req, res) => {
  //redis
  const usersData = await client.get("usersData");
  const payload = JSON.parse(usersData);
  if (usersData) return res.send(payload);

  //fetch data
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
  const resData = data.data;
  console.log(resData);
  //caching in redis
  await client.set("usersData", JSON.stringify(resData));
  await client.expire("usersData", 10);
  return res.status(200).json(resData);
});

app.listen(8000, () => {
  console.log("server is running.");
});
