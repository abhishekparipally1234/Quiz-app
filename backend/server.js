const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); // Allow frontend access
app.use(express.json());

app.get("/api/quiz", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX", {
      headers: { "Accept": "application/json" },
    });
    console.log("Fetched Quiz Data:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching quiz data:", error.message);
    res.json([
      { question: "Fallback: What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
      { question: "Fallback: Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
    ]);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
