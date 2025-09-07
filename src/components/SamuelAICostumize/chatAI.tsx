import { useState } from "react";
import { Send } from "lucide-react";

const ChatAI = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // 👤 Agregar mensaje del usuario
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // 🧠 Aquí luego conectas tu API (Groq, OpenAI, etc.)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "🤖 Esta es una respuesta simulada de la IA." },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 overflow-hidden" style={{ backgroundColor: "#09090c" }}>
      {/* El cubo de chat */}
      <div className="w-full max-w-md flex flex-col bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <header className="p-4 border-b border-gray-200 font-bold text-lg text-center bg-gray-50">
          Chat con IA
        </header>

        {/* Área de mensajes */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ maxHeight: "500px", overflowY: "auto" }}>
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

        {/* Input dentro del "cubo" */}
        <div className="p-3 border-t border-gray-200 bg-white flex space-x-2">
          <input
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
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
//#09090c
export default ChatAI;
