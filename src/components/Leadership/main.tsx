import React from "react";
import { motion } from "framer-motion"; // For card animations
import { Navbar } from "../ui/navbar"; // Relative path to navbar
import { Users, GraduationCap } from "lucide-react"; // Icons for sections (Mail removed)

// Profile Card Component (Updated: No Image, Text-Focused Layout)
const ProfileCard = ({ 
  name, 
  role, 
  bio, 
  className = "" 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  className?: string; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.4 }}
    className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${className}`}
  >
    <div className="mb-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-blue-400 font-medium mt-1">{role}</p>
    </div>
    <p className="text-gray-300 leading-relaxed">{bio}</p>
  </motion.div>
);

// Leadership Page Component (CTA Removed, No Images)
const Leadership = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar /> {/* Navbar for consistency */}
      <main className="pt-20 md:pt-24"> {/* Top padding to avoid navbar overlap */}
        {/* Main Content with Blue Blob Background (like other pages) */}
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px]"></div>
          </div>

          <div className="relative z-10">
            {/* Hero Header (Gradient Title, like About/Events) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent tracking-wide"
                whileHover={{ scale: 1.02 }}
              >
                Our Leaders
              </motion.h1>
              <motion.p 
                className="text-blue-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Meet the visionary leaders of Gyan Niketan School and the passionate alumni leaders of InnovateX. Their dedication shapes the future of computer science education.
              </motion.p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>

            {/* School Founders Section (Updated with Real 6 Profiles) */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-4 mb-8"
              >
                <Users className="text-blue-400" size={32} />
                <h2 className="text-3xl font-bold text-white">School Leaders & Visionaries</h2>
              </motion.div>
              <p className="text-gray-400 text-lg max-w-4xl mx-auto mb-12 text-center">
                The esteemed leadership of Gyan Niketan, guiding the institution with expertise in education, administration, and holistic development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProfileCard
                  name="Mr. J.K. Mukherjee, M.Sc. (Chem.) MA Edu. B.Ed."
                  role="Principal"
                  bio="As the Principal, Mr. Mukherjee has led Gyan Niketan since its inception, emphasizing scientific inquiry and educational excellence. His vision integrates modern technology into core curricula to prepare students for global challenges."
                />
                <ProfileCard
                  name="Mrs. Archana Saran, M.A.(History), B.Ed."
                  role="Vice Principal"
                  bio="With a strong background in history and pedagogy, Mrs. Saran oversees academic programs and fosters a nurturing environment. She champions interdisciplinary learning, including CS applications in social studies."
                />
                <ProfileCard
                  name="Mr. Sahilendra Mohan Jha, M.A (Eco), B.Ed., C.S (Inter)"
                  role="Vice Principal"
                  bio="Expert in economics and commerce, Mr. Jha manages administrative operations and student welfare. His commerce background supports tech-driven financial literacy programs in the school's CS initiatives."
                />
                <ProfileCard
                  name="Mrs. Anita Gupta, M.A (English) M.A (Pub. Adm.) B.Ed"
                  role="Vice Principal"
                  bio="A specialist in English and public administration, Mrs. Gupta enhances communication skills and leadership training. She integrates digital tools like AI writing assistants into language and admin education."
                />
                <ProfileCard
                  name="Mr. Deo Muni Dwivedi, M.Sc (Phy.) B.Ed."
                  role="Chief Co-ordinator"
                  bio="With physics expertise, Mr. Dwivedi coordinates STEM activities across departments. He drives innovation in science labs, including computational physics simulations for CS students."
                />
                <ProfileCard
                  name="Mrs. Nutan Chandra, M.A. B.Ed. DCA"
                  role="Vice Principal"
                  bio="Holding advanced degrees and computer applications certification, Mrs. Chandra focuses on IT integration in teaching. She mentors faculty on digital pedagogy and supports CS club activities like InnovateX."
                />
              </div>
            </section>

            {/* Student Founders Section (Updated: Alumni Leaders - Suryanshu & Rakshit) */}
            <section className="mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-4 mb-8"
              >
                <GraduationCap className="text-blue-400" size={32} />
                <h2 className="text-3xl font-bold text-white">InnovateX Alumni Leaders</h2>
              </motion.div>
              <p className="text-gray-400 text-lg max-w-4xl mx-auto mb-12 text-center">
                The trailblazing alumni who lead InnovateX, our CS innovation group. As former students, they continue to inspire through leadership and community impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProfileCard
                  name="Suryanshu Nabheet"
                  role="Leader in the Group"
                  bio="As the President of InnovateX, Suryanshu took the initiative to build a vibrant CS community, empowering peers in coding and tech innovation. A passionate developer, he organizes hackathons and mentors on AI projects, bridging school learning with real-world applications."
                />
                <ProfileCard
                  name="Rakshit Ranjan"
                  role="Group Leader"
                  bio="As a Group Leader in InnovateX, Rakshit works with peers to convince principals and lead collaborative tech events and workshops. With expertise in web development and cybersecurity, he supports group initiatives and alumni networks, ensuring the club's growth and sustainability."
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leadership;