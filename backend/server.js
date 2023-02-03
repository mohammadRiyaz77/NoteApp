const express = require("express");
const notes = require("./data/notes");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {

  res.json(notes);
  console.log(notes);
});

app.get("/api/notes/:id", (req, res) => {
    
  const note = notes.find((n) => n.id === req.params.id);
  res.send(note);
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
