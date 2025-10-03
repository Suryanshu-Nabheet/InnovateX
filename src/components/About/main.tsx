import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Navbar } from '../ui/navbar'; // Adjust path

// Inlined Timeline Component (self-contained)
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10 relative" // Added relative for background positioning
      ref={containerRef}
    >
      {/* Added Blue Blob Background (same as Contact) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[200px]"></div>
      </div>

      {/* Enhanced Header: Blue & White Theme with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10" // Added z-10 to sit above background
      >
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-blue-500/20"> {/* Subtle blue glow container */}
          <motion.h2 
            className="text-lg md:text-5xl lg:text-6xl mb-6 font-bold max-w-4xl mx-auto bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent tracking-wide" // Blue-white gradient text
            whileHover={{ scale: 1.02 }} // Subtle hover
          >
            Computer Science
          </motion.h2>
          <motion.p 
            className="text-blue-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light" // Light blue for premium feel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore the evolution of computer science at Gyan Niketan – from foundational breakthroughs to cutting-edge innovations shaping tomorrow. This timeline details key milestones, their global impact, and how our school has adapted CS education to empower students.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6" // Blue accent divider
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </div>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 z-10"> {/* Added z-10 for timeline content */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-700 border border-neutral-600 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                {item.title}
              </h3>
              <div className="text-white dark:text-white"> {/* Ensure content is white for dark theme */}
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// Small Icon Badge Component (Like Contact section: compact, premium)
const IconBadge = ({ icon: Icon, color = "from-gray-600 to-gray-700", textColor = "text-gray-200", children }: { 
  icon: React.ComponentType<{ className?: string; size?: number }>; 
  color?: string; 
  textColor?: string; 
  children: React.ReactNode; 
}) => (
  <div className="flex items-start gap-4 mb-4">
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
      <Icon className={`${textColor}`} size={20} />
    </div>
    <div className="flex-1">
      {children}
    </div>
  </div>
);

// Main About Page Component (with Navbar added)
const AboutTimeline = () => {
  const data = [
    {
      title: "Past (1940s-1980s)",
      content: (
        <div className="text-white space-y-6"> {/* Wikipedia-style detailed content */}
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            The foundations of computer science were laid in the mid-20th century amid World War II efforts and post-war innovation. Computer science as a discipline emerged from mathematics, engineering, and physics, focusing on algorithms, computation, and information processing. At Gyan Niketan, early computing education began in the 1970s with basic programming concepts introduced in mathematics classes, evolving into dedicated computer labs by the 1980s. This period marked the shift from theoretical Turing machines to practical machines, democratizing access to technology.
          </p>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Key developments included the ENIAC (1945), the first general-purpose electronic computer, which weighed 30 tons and calculated artillery trajectories. Alan Turing's 1936 theoretical work on the "Turing Machine" laid the groundwork for computability theory. The 1950s saw the birth of programming languages like FORTRAN (1957) by IBM for scientific computing, enabling complex simulations. The 1960s brought time-sharing systems and ARPANET (1969), precursor to the internet. By the 1970s, microprocessors like the Intel 4004 (1971) made computing affordable. The 1980s exploded with personal computers: IBM PC (1981), Apple Macintosh (1984) with GUI, and languages like C (1972) for system programming. At Gyan Niketan, these innovations inspired our first BASIC programming courses, fostering logical thinking among students and preparing them for a digital future.
          </p>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Impact: This era transformed society from analog to digital, enabling data processing at scale. Challenges included high costs and limited accessibility, but it set the stage for global connectivity. Gyan Niketan's adoption mirrored India's growing tech sector, with early labs using donated PCs to teach 100+ students annually.
          </p>
          {/* Small icons like Contact: Key milestones as icon-text pairs */}
          <div className="space-y-4">
            <IconBadge icon={Cpu} color="from-gray-600 to-gray-700" textColor="text-gray-200">
              <h4 className="text-white font-semibold mb-1">ENIAC (1945)</h4>
              <p className="text-gray-400 text-sm">First programmable electronic computer, revolutionizing calculations.</p>
            </IconBadge>
            <IconBadge icon={Code} color="from-gray-600 to-gray-700" textColor="text-gray-200">
              <h4 className="text-white font-semibold mb-1">FORTRAN (1957)</h4>
              <p className="text-gray-400 text-sm">First high-level language for scientific and engineering apps.</p>
            </IconBadge>
            <IconBadge icon={Monitor} color="from-gray-600 to-gray-700" textColor="text-gray-200">
              <h4 className="text-white font-semibold mb-1">IBM PC (1981)</h4>
              <p className="text-gray-400 text-sm">Personal computing boom, making tech accessible to homes.</p>
            </IconBadge>
            <IconBadge icon={Database} color="from-gray-600 to-gray-700" textColor="text-gray-200">
              <h4 className="text-white font-semibold mb-1">ARPANET (1969)</h4>
              <p className="text-gray-400 text-sm">Foundation of the internet, enabling networked computing.</p>
            </IconBadge>
          </div>
        </div>
      ),
    },
    {
      title: "Present (1990s-Now)",
      content: (
        <div className="text-white space-y-6"> {/* Detailed present-day content */}
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            The 1990s ushered in the digital revolution, with the World Wide Web (1991) by Tim Berners-Lee transforming information access. Mobile computing exploded in the 2000s: iPhone (2007) integrated touch interfaces and apps. Artificial intelligence surged in the 2010s via machine learning frameworks like TensorFlow (2015), powering tools from voice assistants to recommendation systems. Cloud computing (AWS 2006) shifted storage to scalable services. At Gyan Niketan, our lab now features modern setups with Python, JavaScript, and AI tools, supporting web development, data science, and cybersecurity courses for 500+ students yearly.
          </p>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Current trends include big data (Hadoop 2006), IoT (billions of devices connected), and ethical AI debates post-ChatGPT (2022). Programming paradigms evolved: Object-oriented (Java 1995), functional (Scala), and low-code platforms. Open-source movements (Linux 1991, Git 2005) democratized development. Gyan Niketan's curriculum integrates these via hackathons and certifications, with labs equipped for collaborative coding on VS Code and Jupyter Notebooks. The COVID-19 pandemic accelerated remote learning, boosting our online CS modules.
          </p>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Impact: CS drives economies (global market $500B+ in 2023), but raises privacy and job displacement concerns. Our school emphasizes inclusive education, with 40% female participation in CS clubs.
          </p>
          {/* Small icons: Current tools/trends */}
          <div className="space-y-4">
            <IconBadge icon={Globe} color="from-blue-600 to-blue-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">World Wide Web (1991)</h4>
              <p className="text-gray-300 text-sm">Hypertext system enabling global information sharing.</p>
            </IconBadge>
            <IconBadge icon={Smartphone} color="from-blue-600 to-blue-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Smartphones (2007)</h4>
              <p className="text-gray-300 text-sm">Mobile apps and ubiquitous computing.</p>
            </IconBadge>
            <IconBadge icon={Brain} color="from-blue-600 to-blue-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Machine Learning (2010s)</h4>
              <p className="text-gray-300 text-sm">AI algorithms for pattern recognition and automation.</p>
            </IconBadge>
            <IconBadge icon={Cloud} color="from-blue-600 to-blue-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Cloud Services (2006)</h4>
              <p className="text-gray-300 text-sm">Scalable storage and computing via AWS/Azure.</p>
            </IconBadge>
          </div>
        </div>
      ),
    },
    {
      title: "Future (2030+)",
      content: (
        <div className="text-white space-y-6"> {/* Detailed future predictions */}
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Looking ahead, computer science will redefine reality through quantum computing, advanced AI, and immersive technologies. Quantum computers (e.g., IBM's 2023 prototypes) promise exponential speed for drug discovery and optimization, solving problems classical machines can't. Ethical AI frameworks will address biases, with regulations like EU AI Act (2024) shaping governance. The metaverse (post-Facebook 2021 pivot) will blend VR/AR for virtual economies and education. Sustainable tech, including green data centers, will combat CS's 2-3% global energy use.
          </p>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Emerging trends: Neuromorphic computing mimicking brains, blockchain for decentralized security (beyond crypto), and edge AI for real-time IoT. By 2030, 85% of jobs may involve AI collaboration (World Economic Forum). At Gyan Niketan, we're preparing via quantum simulations in Python (Qiskit), VR labs for immersive learning, and ethics modules. Our curriculum includes blockchain projects and sustainability workshops, aiming for 100% student readiness in emerging tech.
          </p>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base leading-relaxed">
            Challenges: Cybersecurity threats (quantum-proof encryption needed), digital divide, and AI ethics. Opportunities: CS could add $15.7T to global GDP by 2030 (PwC). Gyan Niketan's vision: Equip students as innovators, with partnerships for internships in quantum/AI firms.
          </p>
          {/* Small icons: Future initiatives */}
          <div className="space-y-4">
            <IconBadge icon={Zap} color="from-purple-600 to-purple-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Quantum Computing</h4>
              <p className="text-gray-300 text-sm">Super-fast processing for complex simulations.</p>
            </IconBadge>
            <IconBadge icon={Bot} color="from-purple-600 to-purple-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Ethical AI</h4>
              <p className="text-gray-300 text-sm">Bias-free automation and human-AI collaboration.</p>
            </IconBadge>
            <IconBadge icon={Headset} color="from-purple-600 to-purple-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Metaverse/VR</h4>
              <p className="text-gray-300 text-sm">Immersive virtual worlds for education and work.</p>
            </IconBadge>
            <IconBadge icon={Leaf} color="from-purple-600 to-purple-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Green Tech</h4>
              <p className="text-gray-300 text-sm">Sustainable computing to reduce carbon footprint.</p>
            </IconBadge>
            <IconBadge icon={Lock} color="from-purple-600 to-purple-700" textColor="text-white">
              <h4 className="text-white font-semibold mb-1">Blockchain</h4>
              <p className="text-gray-300 text-sm">Secure, decentralized data for learning platforms.</p>
            </IconBadge>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main className="pt-20 md:pt-24"> {/* Top padding to avoid navbar overlap */}
        <Timeline data={data} />
      </main>
    </div>
  );
};

export default AboutTimeline;