import React, { useState } from "react";
import axios from "axios";

function ChatForm() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");
    try {
      const res = await axios.post("http://localhost:5000/chat", { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to get a response from the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Ask chatbot
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="message" className="block text-gray-600">
            Your Message
          </label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`w-full py-2 mt-4 font-semibold text-white rounded-lg transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <strong className="text-gray-700">Response:</strong>
            <p className="mt-2 text-gray-800">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatForm;
