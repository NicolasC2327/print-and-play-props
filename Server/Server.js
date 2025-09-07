import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // Permite llamadas desde tu frontend
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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", // tu key aquí
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        messages: [
          {
            role: "system",
            content: "Eres un asistente que ayuda a cotizar muñecos 3D. Pregunta dimensiones, material, color y cantidad antes de dar un precio estimado.",
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    const aiText = data?.choices?.[0]?.message?.content || "❌ No se pudo obtener respuesta";
    res.json({ text: aiText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error comunicándose con GroqCloud" });
  }
});

app.listen(3001, () => console.log("Servidor corriendo en http://localhost:3001"));