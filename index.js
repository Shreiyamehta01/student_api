const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let students = [
  { id: 1, name: "Shreiya Mehta", branch: "CSE" },
  { id: 2, name: "Divyarish", branch: "CSE" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Student API 🚀");
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Add a new student
app.post("/students", (req, res) => {
  const { name, branch } = req.body;
  const newStudent = { id: students.length + 1, name, branch };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
