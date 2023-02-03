const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const app = express();
dotenv.config(); //  .env file its give securtiy or secret information to keep hidden

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
    // console.log(req.params);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
