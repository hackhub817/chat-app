const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAIApi = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAIApi({ apiKey: process.env.API });

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      max_tokens: 50,
      temperature: 0.7,
    });

    const chatResponse = response.choices[0].message.content;

    res.json({ response: chatResponse });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).json({ error: "Failed to get response from ChatGPT" });
  }
});

app.listen(5000, () => {
  console.log("server  running on 5000");
});
