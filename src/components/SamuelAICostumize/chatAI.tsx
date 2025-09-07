import { useState } from "react";
import { Send } from "lucide-react";

const ChatAI = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    try {
      
      // Llamada al servidor Express que hace de proxy a GroqCloud
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // Validar la respuesta
      const aiText = data.text || "❌ No se pudo obtener respuesta de la IA";

      setMessages((prev) => [...prev, { sender: "ai", text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "❌ Error con la IA" },
      ]);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "#09090c" }}
    >
      {/* Cubo de chat */}
      <div className="w-full max-w-md flex flex-col bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">
        <header className="p-4 border-b border-gray-200 font-bold text-lg text-center bg-gray-50">
          Chat con IA
        </header>

        <div
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          style={{ maxHeight: "500px" }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-2xl text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-gray-200 bg-white flex space-x-2">
          <input
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ color: "#000000" }}
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAI;



