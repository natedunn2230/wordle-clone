const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../client/build")));
const words = fs
  .readFileSync("./wordle-words.txt")
  .toString()
  .replaceAll("\n", " ")
  .split(" ");

// only serve html files in production
if (process.env.NODE_ENV === "dev") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.get("/random-word", (req, res) => {
  const randIdx = Math.floor(Math.random() * words.length);
  res.send(words[randIdx]);
});

app.get("/check-word", (req, res) => {
  const word = req.query.word;
  const inList = !!words.find((w) => w === word);
  return res.send(inList);
});

app.listen(port, () => {
  console.log("app listening on port: ", port);
});
