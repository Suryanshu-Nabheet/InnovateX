import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Code, 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  Zap, 
  Globe,
  TrendingUp,
  Trophy,
  Sparkles
} from "lucide-react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SITE_CONFIG } from "@/config";
import { FEATURES } from "@/data/features";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence } from "framer-motion";

const labImages = [
  { 
    src: "/Projects_lab.jpg",
    year: "2024",
    caption: "CS Lab Projects",
    description: "Students showcasing innovative projects and collaborative coding sessions in our state-of-the-art lab."
  },
  {
    src: "/Features/image-1.png",
    year: "2024",
    caption: "AI & Machine Learning",
    description: "Exploring cutting-edge AI tools and machine learning frameworks for real-world applications."
  },
  {
    src: "/Features/image-2.jpg",
    year: "2024",
    caption: "Web Development",
    description: "Building modern web applications using React, Node.js, and full-stack technologies."
  },
  {
    src: "/Features/image-3.png",
    year: "2023",
    caption: "Hackathon Event",
    description: "InnovateX hackathon bringing together passionate developers to solve real-world problems."
  },
  {
    src: "/Features/image-4.png",
    year: "2023",
    caption: "Tech Innovation",
    description: "Students demonstrating robotics projects and IoT innovations."
  },
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % labImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % labImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + labImages.length) % labImages.length);
  };

  return (
    <PageLayout>
      <section className="bg-black min-h-screen pt-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">About InnovateX </span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">CS Lab</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Where Innovation Meets Excellence in Computer Science Education
            </p>
          </motion.div>

          {/* Lab Description - Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 mb-12"
          >
            <div className="md:text-center max-w-3xl mx-auto">
              <p className="text-white/70 leading-relaxed text-base md:text-lg">
                InnovateX at {SITE_CONFIG.school.name} is more than just a computer science lab; 
                it is a vibrant community where innovation meets creativity, and technology drives 
                educational excellence. Our state-of-the-art lab empowers 500+ students annually 
                with hands-on CS education, hackathons, and industry certifications.
              </p>
            </div>
          </motion.div>

          {/* Photo Gallery Section */}
          <div className="grid gap-12 mb-12">
            {/* Main Image Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square md:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 z-10" />
              <img
                src={labImages[currentImageIndex].src}
                alt={labImages[currentImageIndex].caption}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/Gyan_Niketan.png";
                }}
              />
              
              {/* Image Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/90 font-semibold text-sm md:text-base">
                      {labImages[currentImageIndex].year}
                    </p>
                    <div className="flex space-x-2">
                      {labImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                            index === currentImageIndex ? "bg-white" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
                    {labImages[currentImageIndex].caption}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {labImages[currentImageIndex].description}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={previousImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-all z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </motion.div>
          </div>

          {/* Values Section with Canvas Reveal Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Code, title: "Programming", desc: "Modern languages and frameworks for full-stack development", colors: [[59, 130, 246]] },
                { icon: Cpu, title: "AI & ML", desc: "Machine learning, data science, and AI applications", colors: [[34, 197, 94], [59, 130, 246]] },
                { icon: BookOpen, title: "Education", desc: "Comprehensive curriculum and hands-on learning", colors: [[168, 85, 247]] },
                { icon: Users, title: "Community", desc: "Collaborative projects and innovation hub", colors: [[236, 72, 153], [232, 121, 249]] }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredOffer(index)}
                    onMouseLeave={() => setHoveredOffer(null)}
                    className="relative border border-white/10 group/canvas-card w-full p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20"
                  >
                    {/* Canvas Reveal Effect - Only appears on hover */}
                    <AnimatePresence>
                      {hoveredOffer === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full w-full absolute inset-0 z-0"
                        >
                          <CanvasRevealEffect
                            animationSpeed={3 + index * 0.5}
                            containerClassName="bg-black"
                            colors={item.colors}
                            dotSize={2}
                          />
                          <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,white,transparent)] bg-black/40" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Content - Always visible */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover/canvas-card:bg-blue-500/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-blue-400 group-hover/canvas-card:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-white font-semibold mb-2 group-hover/canvas-card:text-white transition-colors duration-300">{item.title}</h3>
                      <p className="text-white/60 text-sm group-hover/canvas-card:text-gray-300 transition-colors duration-300">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Mission & Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl p-6 md:p-8 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Empower 500+ students annually with hands-on CS education, hackathons, and industry certifications. 
                We foster creativity, problem-solving, and real-world impact through cutting-edge technology and 
                collaborative learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-6 md:p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                To be a leading innovation hub where students transform ideas into reality. We envision a future 
                where every student at {SITE_CONFIG.school.name} has access to world-class CS education and 
                opportunities to shape the digital future.
              </p>
            </div>
          </motion.div>

          {/* Key Features Section with Canvas Reveal Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Lab Facilities & Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                // Define colors for each feature based on index for variety
                const colors = [
                  [[59, 130, 246]], // Blue
                  [[34, 197, 94], [59, 130, 246]], // Green to Blue
                  [[168, 85, 247]], // Purple
                  [[236, 72, 153], [232, 121, 249]], // Pink to Purple
                  [[251, 146, 60], [239, 68, 68]], // Orange to Red
                  [[59, 130, 246], [168, 85, 247]], // Blue to Purple
                ];
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="relative border border-white/10 group/canvas-card w-full p-6 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20"
                  >
                    {/* Canvas Reveal Effect - Only appears on hover */}
                    <AnimatePresence>
                      {hoveredFeature === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="h-full w-full absolute inset-0 z-0"
                        >
                          <CanvasRevealEffect
                            animationSpeed={3 + (index % 3) * 0.5}
                            containerClassName="bg-black"
                            colors={colors[index % colors.length]}
                            dotSize={2}
                          />
                          <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,white,transparent)] bg-black/40" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Content - Always visible */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 mb-4 rounded-xl bg-blue-500/10 group-hover/canvas-card:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-7 h-7 text-blue-400 group-hover/canvas-card:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover/canvas-card:text-white transition-colors duration-300">{feature.title}</h3>
                      <p className="text-white/60 leading-relaxed group-hover/canvas-card:text-gray-300 transition-colors duration-300">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Impact & Excellence Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Excellence in Computer Science Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-xl p-6 md:p-8 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Academic Excellence</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  At InnovateX, we've established a comprehensive computer science curriculum that integrates 
                  theoretical knowledge with practical application. Our structured learning path covers 
                  foundational programming, advanced algorithms, and modern software development practices.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>Comprehensive course modules from basics to advanced topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>Regular assessments and progress tracking for skill development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>Industry-aligned curriculum preparing students for tech careers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 md:p-8 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Innovation & Research</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Our lab serves as a hub for cutting-edge research and innovation. Students work on 
                  real-world projects that solve practical problems, contributing to open-source communities 
                  and building portfolio-ready applications.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Open-source project contributions and community engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Research projects in AI, machine learning, and data science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>Collaborative learning environment fostering peer-to-peer knowledge sharing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-6 md:p-8 border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Industry Connections</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Through strategic partnerships and networking, we provide students with exposure to 
                  industry practices, mentorship opportunities, and pathways to tech careers. Our 
                  connections help bridge the gap between academic learning and professional application.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <span>Guest lectures and workshops by industry professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <span>Internship opportunities and career guidance programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                    <span>Collaboration with tech companies for real-world project exposure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 rounded-xl p-6 md:p-8 border border-pink-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inclusive Learning Community</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  Diversity and inclusion are core values at InnovateX. We actively promote equal 
                  participation across all demographics, ensuring every student has the opportunity to 
                  excel in computer science regardless of background.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span>Inclusive programs encouraging participation from all student groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span>Mentorship programs pairing experienced students with newcomers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                    <span>Supportive environment fostering collaborative learning and growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Programs & Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Core Programming</h3>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Python, JavaScript, TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    React, Node.js, Full-Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Object-Oriented Programming
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">AI & Data Science</h3>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Machine Learning with TensorFlow.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Data Analysis & Visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Computer Vision & Robotics
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Web Technologies</h3>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Frontend Development (React, Vue)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Backend Development (Node.js, Express)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Database Management (SQL, NoSQL)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Cloud Services & Deployment
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Events & Competitions</h3>
                </div>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Annual Hackathons & Coding Challenges
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Tech Talks & Workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Project Showcases & Exhibitions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Industry Certifications & Training
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
}
