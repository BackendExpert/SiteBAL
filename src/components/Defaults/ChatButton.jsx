// src/components/ChatButton.jsx
import React, { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          Chat
        </button>
      </div>

      {/* Chat Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-4">
            <div className="flex justify-between">
            <h2 className="text-xl font-bold ">Chat</h2>
            <button
                onClick={toggleChat}
                className="text-red-500 font-bold"
            >
                <BsXCircleFill className="h-6 w-auto"/>
            </button>
            </div>
          {/* Chat content goes here */}
          <div className="mt-4">
            <p>This is your chat panel. Add chat functionality here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatButton;
