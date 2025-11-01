import { motion } from "framer-motion";
import { Quote, Linkedin, Twitter } from "lucide-react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SCHOOL_LEADERS, ALUMNI_LEADERS } from "@/data/leadership";
import { SITE_CONFIG } from "@/config";

// Configuration object to control section visibility
const SECTION_CONFIG = {
  SCHOOL_LEADERSHIP: true,     // School Leadership section (Principal + Vice Principals)
  ALUMNI_LEADERSHIP: true,     // Alumni Leadership section
};

export default function Leadership() {
  // All school leaders together (Principal + Vice Principals)
  const allSchoolLeaders = SCHOOL_LEADERS;

  return (
    <PageLayout>
      <section className="bg-black relative overflow-hidden py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black pointer-events-none" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto">
              Meet the visionary leaders of {SITE_CONFIG.school.name} and the passionate alumni leaders of InnovateX
            </p>
          </motion.div>

          {/* School Leadership Section - Combined Principal and Vice Principals */}
          {SECTION_CONFIG.SCHOOL_LEADERSHIP && allSchoolLeaders.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  School Leadership & Visionaries
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto">
                  The esteemed leadership of {SITE_CONFIG.school.name}, guiding the institution with expertise in education, administration, and holistic development.
                </p>
              </motion.div>

              {/* School Leaders Grid - All in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {allSchoolLeaders.map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group h-full"
                  >
                    <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative w-full aspect-[9/13] rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/20 transition-colors flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={leader.image || "/Gyan_Niketan.png"}
                          alt={leader.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = "/Gyan_Niketan.png";
                          }}
                        />
                        {/* Quote Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 md:transition-opacity md:duration-500">
                          <div className="flex items-center gap-2 text-white/90">
                            <Quote className="min-w-4 min-h-4" />
                            <p className="text-sm italic line-clamp-3">{leader.bio}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-1 group-hover:text-white/80 transition-colors">
                          {leader.role}
                        </p>
                        {leader.qualifications && (
                          <p className="text-white/60 text-xs mb-1 group-hover:text-white/70 transition-colors">
                            {leader.qualifications}
                          </p>
                        )}
                        <p className="text-white/50 text-sm group-hover:text-white/60 transition-colors mb-3">
                          {SITE_CONFIG.school.name}
                        </p>
                        {/* Social Links */}
                        {(leader.linkedin || leader.twitter) && (
                          <div className="flex items-center justify-center gap-3 mt-2">
                            {leader.linkedin && (
                              <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-blue-400 transition-colors"
                                aria-label="LinkedIn"
                              >
                                <Linkedin className="w-4 h-4" />
                              </a>
                            )}
                            {leader.twitter && (
                              <a
                                href={leader.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-blue-400 transition-colors"
                                aria-label="Twitter"
                              >
                                <Twitter className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Alumni Leadership Section */}
          {SECTION_CONFIG.ALUMNI_LEADERSHIP && ALUMNI_LEADERS.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  InnovateX Alumni Leaders
                </h2>
                <p className="text-white/50 max-w-2xl mx-auto">
                  The trailblazing alumni who lead InnovateX, our CS innovation group. As former students, they continue to inspire through leadership and community impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {ALUMNI_LEADERS.map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group h-full"
                  >
                    <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative w-full aspect-[9/13] rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/20 transition-colors flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src="/Gyan_Niketan.png"
                          alt={leader.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = "/Gyan_Niketan.png";
                          }}
                        />
                        {/* Quote Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 md:transition-opacity md:duration-500">
                          <div className="flex items-center gap-2 text-white/90">
                            <Quote className="min-w-4 min-h-4" />
                            <p className="text-sm italic line-clamp-3">{leader.bio}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                          {leader.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-1 group-hover:text-white/80 transition-colors">
                          {leader.role}
                        </p>
                        <p className="text-white/50 text-sm group-hover:text-white/60 transition-colors">
                          InnovateX
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
