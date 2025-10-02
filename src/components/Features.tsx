import { BookOpen, Cpu, Globe, Monitor, Network, Trophy } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Monitor,
      title: "State-of-the-Art Equipment",
      description: "High-performance computers with the latest processors, ensuring smooth operation for all programming and design tasks."
    },
    {
      icon: Network,
      title: "High-Speed Connectivity",
      description: "Gigabit internet connectivity for seamless access to online resources, cloud platforms, and collaborative tools."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From basics to advanced topics covering programming, web development, AI, machine learning, and more."
    },
    {
      icon: Cpu,
      title: "Hands-On Projects",
      description: "Real-world projects and practical assignments that build portfolio-ready skills and industry experience."
    },
    {
      icon: Globe,
      title: "Industry Tools",
      description: "Access to professional development tools, IDEs, and platforms used by leading tech companies worldwide."
    },
    {
      icon: Trophy,
      title: "Competitions & Events",
      description: "Regular coding competitions, hackathons, and tech events to challenge and showcase your skills."
    }
  ];

  return (
    <section id="features" className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-black border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/30">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}
