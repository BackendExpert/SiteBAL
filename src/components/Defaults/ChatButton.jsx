// src/components/ChatButton.jsx
import React, { useState } from "react";
import { BsChat, BsDot, BsHeadset, BsXCircleFill } from "react-icons/bs";

const problems = [
    { 
      id: 1, 
      question: "How can I get started with your software?", 
      answer: "To get started, please visit our 'Getting Started' page. You will find installation guides, user manuals, and tutorials to help you begin." 
    },
    { 
      id: 2, 
      question: "What are the system requirements for your software?", 
      answer: "Our software requires the following system specifications: Windows 10 or later, macOS 10.15 or later, 4 GB RAM, and 500 MB of free disk space. For detailed requirements, refer to the 'System Requirements' section on our website." 
    },
    { 
      id: 3, 
      question: "How can I contact technical support?", 
      answer: "You can reach our technical support team via email at support@yourcompany.com, or through the 'Contact Us' page on our website. We also offer live chat support during business hours." 
    },
    { 
      id: 4, 
      question: "How do I update my software to the latest version?", 
      answer: "To update your software, go to the 'Settings' menu and select 'Check for Updates.' Follow the prompts to download and install the latest version. For more details, visit our 'Update Guide' page." 
    },
    { 
      id: 5, 
      question: "Where can I find the API documentation?", 
      answer: "API documentation is available in the 'Developer Resources' section on our website. You can access detailed guides and references to help you integrate our API with your applications." 
    },
  ];

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleProblemClick = (problem) => {
    setSelectedProblem(problem);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleChat}
          className=""
        >
          <BsHeadset className="h-8 w-auto text-purple-800"/>
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
            <h2 className="text-xl font-bold mb-4">Help</h2>
            <button
                onClick={toggleChat}
                className="text-red-500 font-bold mb-4 block"
            >
                <BsXCircleFill />
            </button>
            </div>
          {!selectedProblem ? (
            <div>
              <p className="mb-4 font-bold text-purple-500">Select a common problem to see the solution:</p>
              <ul>
                {problems.map((problem) => (
                  <li
                    key={problem.id}
                    className="cursor-pointer text-blue-500 mb-2"
                    onClick={() => handleProblemClick(problem)}
                  >
                    <div className="flex">
                        <BsDot className="h-8 w-auto"/>{problem.question}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-2">{selectedProblem.question}</h3>
              <p className="text-purple-800">{selectedProblem.answer}</p>
              <button
                onClick={() => setSelectedProblem(null)}
                className="text-blue-500 mt-4 block"
              >
                Back to list
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatButton;
