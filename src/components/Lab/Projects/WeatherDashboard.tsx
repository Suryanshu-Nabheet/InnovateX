import React from "react";
import { motion } from "framer-motion";

// Project Data (for grid box)
export const projectData = {
  id: "weather-dashboard",
  slug: "weather-dashboard",
  title: "Weather Dashboard",
  shortDesc: "Real-time weather tracker with forecasts, maps, and alerts—using open APIs for global data.",
  tech: ["React", "OpenWeatherMap API", "Chart.js", "Tailwind CSS"],
  date: "2025-03-25",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"  // Weather theme
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
        Weather Dashboard
      </motion.h1>
      <img 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80" 
        alt="Weather Dashboard" 
        className="w-full h-48 object-cover rounded-xl mb-6" 
        loading="lazy"
      />
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          Enter a city to get hourly forecasts, humidity charts, and severe weather notifications. Built to teach API integration and data viz.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "OpenWeatherMap API", "Chart.js", "Tailwind CSS"].map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-3 text-white">How It Works</h2>
        <ol className="text-gray-300 space-y-2 list-decimal pl-6">
          <li>Search location via API call.</li>
          <li>Render interactive charts (temp trends).</li>
          <li>Push notifications for storms.</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3 text-white">Resources</h2>
        <ul className="text-gray-300 space-y-2">
          <li><a href="https://github.com/weather-dashboard" className="text-blue-400 hover:underline">GitHub Repo</a></li>
          <li><a href="https://weatherdemo.demo" className="text-blue-400 hover:underline">Live Demo</a></li>
          <li>Free API key from OpenWeatherMap.</li>
        </ul>
      </section>
    </div>
  );
};