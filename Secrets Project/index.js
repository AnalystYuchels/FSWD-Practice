//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "public", "index.html"));
});

app.post("/check", (req,res) => {
  const userPassword = req.body.password;
  const correctPassword = "ILoveProgramming";

  if (userPassword === correctPassword) {
    res.sendFile(path.join(_dirname, "public", "secret.html"));
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});