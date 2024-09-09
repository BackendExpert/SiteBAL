// src/components/ChatButton.jsx
import React from "react";

const ChatButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
        Chat
      </button>
    </div>
  );
};

export default ChatButton;
