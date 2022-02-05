const path = require("path");
const express = require("express");

const app = express();
app.use(express.static(path.join(__dirname, "../client/build")));

if (process.env.NODE_ENV === "dev") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("welcome to wordle");
});

app.get("/test", (req, res) => {
  res.send("stuff");
});

app.get("/imSafeForWork", (req, res) => {
  res.send("Wow look how safe I am.")
});

app.listen(5000, () => {
  console.log("app listening on port: ", 5000);
});
