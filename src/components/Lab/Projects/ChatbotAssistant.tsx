import React from "react";
import { motion } from "framer-motion";

// Project Data (for grid box)
export const projectData = {
  id: "chatbot-assistant",
  slug: "chatbot-assistant",
  title: "Chatbot Assistant",
  shortDesc: "AI-powered school helper for queries on schedules, homework, and resources—conversational interface.",
  tech: ["JavaScript", "Dialogflow", "React", "WebSockets"],
  date: "2025-05-05",
  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"  // Chat theme
};

// Separate Full Page (renders in modal - blue theme, sections)
export const ProjectDetails = () => {
  return (
    <div className="text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-3xl font-bold mb-6 text-blue-400"
      >
        Chatbot Assistant
      </motion.h1>
      <img 
        src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80" 
        alt="Chatbot Assistant" 
        className="w-full h-48 object-cover rounded-xl mb-6" 
        loading="lazy"
      />
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          Students chat with the bot for instant answers (e.g., "What's today's homework?"). Integrates school calendar and FAQs.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "Dialogflow", "React", "WebSockets"].map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">How It Works</h2>
        <ol className="text-gray-300 space-y-2 list-decimal pl-6">
          <li>User types query in chat UI.</li>
          <li>Dialogflow processes NLP and responds.</li>
          <li>WebSockets for real-time updates.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3 text-white">Resources</h2>
        <ul className="text-gray-300 space-y-2">
          <li><a href="https://github.com/chatbot-assistant" className="text-blue-400 hover:underline">GitHub Repo</a></li>
          <li><a href="https://chatbot.demo" className="text-blue-400 hover:underline">Try Chat</a></li>
          <li>Google Dialogflow for intent training.</li>
        </ul>
      </section>
    </div>
  );
};