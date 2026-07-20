import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoSend } from "react-icons/io5";


import api from "../api/api";

function AIAssistant({ setFormData }) {

  const [message, setMessage] = useState("");
   
  const [messages, setMessages] = useState([

 {
  role: "assistant",
  text: "Hello! 👋 I'm Vamshi AI. How can I help you today?"
}

]);
const chatEndRef = useRef(null);

useEffect(() => {
  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

const handleAILog = async () => {

  try {

   const res = await api.post("/ai/chat", {
    user_id: "vamshi",
    message,
});

    // Show AI response

const aiReply = res.data.response; 

setMessages((prev) => [
  ...prev,
  {
    role: "user",
    text: message,
  },
  {
    role: "assistant",
    text: aiReply,
  },
]);

setMessage("");

 // Auto-fill HCP Form

if (res.data.response.ai_data) {
  setFormData((prev) => ({
    ...prev,
    ...res.data.response.ai_data,
    interaction_date: new Date().toISOString().split("T")[0],
    interaction_time: new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));
}

    console.log("AI Response:", res.data);

  } 
catch (error) {
  console.log(error);

  if (error.config) {
    console.log("Request Headers:", error.config.headers);
    console.log("Request URL:", error.config.url);
  }

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Data:", error.response.data);
  }

  alert(error.message);
}
};

  return (

<div className="flex flex-col h-screen md:h-[650px] w-full max-w-4xl mx-auto bg-white rounded-none md:rounded-2xl shadow-xl border overflow-hidden">

{/* Header */}

<div className="px-4 md:px-6 py-4 md:py-5 border-b bg-white">

<h2 className="text-xl md:text-2xl font-bold text-blue-700">
  🤖 AI Vamshi Assistant
</h2>

<p className="text-xs md:text-sm text-gray-500 mt-1">
  Ask me anything! I can help with coding, interviews, debugging, learning, writing, and much more.
</p>

</div>

{/* Chat */}

<div className="flex-1 overflow-y-auto bg-gray-50 px-3 md:px-5 py-3 space-y-3">
 
  {messages.map((msg, index) => (
    
    <div
      key={index}
      className={`flex ${
        msg.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
      
      ref={chatEndRef}>

      </div>

   <div
  className={`
    w-fit
    max-w-[95%]
    md:max-w-[80%]
    overflow-x-auto
    whitespace-pre-wrap
    break-words
    px-6
    py-3
    rounded-2xl
    shadow-sm
    text-sm
    md:text-[15px]
    leading-7
    ${
      msg.role === "user"
        ? "bg-blue-600 text-white rounded-br-md"
        : "bg-green-50 border border-green-200 text-gray-800 rounded-bl-md"
    }
  `}
>
<div className="prose prose-sm md:prose max-w-none break-words overflow-x-auto">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {msg.text}
  </ReactMarkdown>
</div>
</div>
    </div>
  ))}
</div>
 
{/* Bottom */}

<div className="bg-gray-100 p-3 border-t sticky bottom-0 z-10">

<div className="flex gap-2 items-end">

<textarea
  rows={2}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Ask me anything..."
  className="flex-1 border rounded-xl p-3 resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<button
  onClick={handleAILog}
  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
>
  <IoSend size={24} />
</button>
</div>
</div>
</div>
  );
}

export default AIAssistant;