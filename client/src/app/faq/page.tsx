"use client";
import React, { useState } from "react";
import NavBar from "@/components/Layout/NavBar";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I start a video call?",
    answer: "Click on the 'New Call' button on the home page after logging in. You'll be automatically connected to a new video room with a unique room ID that you can share with others."
  },
  {
    question: "How do I join an existing call?",
    answer: "Enter the 10-character room ID shared by the call host in the 'Enter Room ID' field on the home page, then click 'Join Call'."
  },
  {
    question: "How many people can join a call?",
    answer: "The application supports multi-user video calling. While there's no strict limit enforced in the UI, performance depends on your internet connection and device capabilities."
  },
  {
    question: "Can I chat during a video call?",
    answer: "Yes! Click on the chat icon during a call to open the messaging panel. All participants can send and receive messages in real-time without interrupting the video stream."
  },
  {
    question: "How do I control my audio and video?",
    answer: "Use the control panel at the bottom of the call screen. Click the microphone icon to mute/unmute your audio, and the video icon to turn your camera on/off."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use WebRTC for peer-to-peer video connections, meaning video and audio streams are sent directly between participants. User authentication is secured with JWT tokens, and all data is transmitted over secure connections."
  },
  {
    question: "Do I need to download any software?",
    answer: "No! This is a web-based application that runs entirely in your browser. You'll need a modern browser with WebRTC support (Chrome, Firefox, Safari, or Edge)."
  },
  {
    question: "What should I do if I'm having connection issues?",
    answer: "First, check your internet connection. Make sure your browser has permission to access your camera and microphone. Try refreshing the page or rejoining the call. If issues persist, try using a different browser or clearing your browser cache."
  },
  {
    question: "Can I see who's in the call?",
    answer: "Yes! Click on the participants icon during the call to see a list of all current participants in the room."
  },
  {
    question: "How do I leave a call?",
    answer: "Click the red 'End Call' button in the control panel at the bottom of the screen. This will disconnect you from the call and return you to the home page."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <NavBar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find answers to common questions about using our video calling platform.
        </p>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-gray-700">
            If you couldn't find the answer you're looking for, feel free to contact our support team or check out the About page for more information about the platform.
          </p>
        </div>
      </div>
    </main>
  );
}
