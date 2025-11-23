import express from "express";

const app = express();

// Eine einfache Route
app.get("/", (_req, res) => {
    res.send("Hello World from TypeScript in Docker!");
});

// Auf allen Interfaces lauschen (wichtig für Docker!)
app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on http://localhost:3000");
});
