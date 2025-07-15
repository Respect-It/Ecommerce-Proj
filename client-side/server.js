import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const geminiPayload = {
      contents: [{ parts: [{ text: userMessage }] }],
    };

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload),
    });

    const result = await response.json();

    let botReply = "🤖 Gemini returned no text.";
    if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
      botReply = result.candidates[0].content.parts[0].text;
    } else if (result?.promptFeedback?.blockReason) {
      botReply = `⚠️ Blocked by Gemini (reason: ${result.promptFeedback.blockReason})`;
    }

    res.json({ reply: botReply });
  } catch (error) {
    res.status(500).json({ reply: "❌ Gemini API call failed. Check server configuration." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
