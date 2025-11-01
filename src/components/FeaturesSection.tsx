import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

/**
 * FeaturesSectionDemo Component
 * This component renders a dynamic features section with a grid layout showcasing key aspects of Gyan Niketan.
 * It includes four feature cards: Open Source Projects, Tech Innovations, YouTube Channel, and Collaboration.
 * Each card has a title, description, and a visual skeleton (image, collage, or globe).
 * The section uses a dark theme with gradients, animations, and responsive grid for mobile/desktop.
 * Images are sourced from Pexels/Unsplash with fixed URLs for reliability; update URLs in skeleton components for changes.
 * Dependencies: framer-motion for animations, cobe for globe, @tabler/icons-react for icons.
 */

export function FeaturesSectionDemo() {
  // Define feature cards data: Each includes title, description, visual skeleton, and CSS classes for grid layout.
  // Grid is 1-col mobile, 6-col desktop; classes handle borders and spanning.
  const features = [
    {
      title: "Find & Contribute in Tech Open Source Projects",
      description:
        "Discover exciting open source projects, collaborate with developers worldwide, and build your portfolio by contributing to real-world tech initiatives that drive innovation and learning.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Explore Cutting-Edge Tech Innovations",
      description:
        "Dive into the world of advanced technologies like robotics, AI software, and emerging tools that are shaping the future of education, development, and automation.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch Gyan Niketan on YouTube",
      description:
        "Subscribe to our channel for in-depth tutorials, project walkthroughs, and insights into tech, open source, and collaborative building—join the community today!",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Connecting, Collaborating & Building Projects",
      description:
        "Join a vibrant network of creators to connect with peers, collaborate on groundbreaking ideas, and build impactful projects that foster innovation, growth, and educational excellence.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    // Main section: Full-height, black background with radial gradient overlay for depth.
    // Centered content with max-width for readability; bottom accent line for visual separation.
    <section id="features" className="relative py-32 bg-black min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header: Centered title and subtitle with responsive typography. */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Packed with thousands of features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From open source contributions to collaborative building, Gyan Niketan empowers you with tools and communities for tech excellence, innovation, and lifelong learning.
          </p>
        </div>

        {/* Grid Container: Responsive grid with borders, rounded corners, and overflow hidden for clean edges. */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 border border-gray-800 rounded-2xl overflow-hidden">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}

/**
 * FeatureCard Component
 * Reusable card wrapper for each feature: Padding, overflow handling, semi-transparent background.
 * Props: children (title, desc, skeleton), className (for grid/border styling).
 */
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-8 relative overflow-hidden bg-gray-900/50`, className)}>
      {children}
    </div>
  );
};

/**
 * FeatureTitle Component
 * Styled heading for feature titles: Bold, white, tight tracking.
 */
const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
      {children}
    </h3>
  );
};

/**
 * FeatureDescription Component
 * Styled paragraph for descriptions: Gray text, small size, relaxed leading, max-width for readability.
 */
const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-gray-400 text-sm leading-relaxed mb-6 max-w-sm",
        "dark:text-neutral-300"
      )}
    >
      {children}
    </p>
  );
};

/**
 * SkeletonOne Component
 * Single prominent image for open source projects feature.
 * Uses specified Unsplash image (tech/education-themed: students coding collaboratively).
 * Fixed URL for reliability; update src for new image.
 * Includes gradient overlays for depth and focus on content.
 * Alt text for accessibility; responsive sizing.
 */
export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-gray-800 shadow-2xl group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <img
            src="/Projects_lab.jpg"  // Fixed: Removed /public/ prefix
            alt="Students collaborating on open source tech projects in a classroom setting"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      {/* Bottom gradient overlay: Fades to black for better text readability if needed. */}
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
      {/* Top gradient overlay: Subtle fade for immersive effect. */}
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

/**
 * SkeletonThree Component
 * YouTube integration: Link to channel with icon overlay on thumbnail image.
 * Image shows educational tutorial viewing; hover effect blurs image to highlight icon.
 * Fixed Pexels URL; update href for channel changes, src for new thumbnail.
 * Accessibility: target="_blank", rel="noopener noreferrer".
 */
export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/@gyanniketanonline6940/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
          {/* YouTube icon: Centered, absolute positioning, red color for branding. */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
          <img
            src="/Gyan_Niketan_YouTube.png"  // Fixed: Removed /public/ prefix
            alt="Gyan Niketan YouTube channel logo"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  );
};

/**
 * SkeletonTwo Component
 * Collage of tech-related educational images for innovations feature.
 * Three rows of 5 images each, with random rotation for dynamic feel.
 * Images focus on tech in education: AI/robotics, coding, VR learning, etc.
 * Fixed Pexels URLs (tech/education-themed); update array for new images.
 * Framer Motion for hover/tap scale and z-index lift.
 * Side gradients to fade edges for collage effect.
 * To add/remove images: Modify the images array and map loops.
 */
export const SkeletonTwo = () => {
  // First row images - AI and Robotics focused
  const firstRowImages = [
    "/Features/image-1.png",     // Fixed: Removed /public/ prefix
    "/Features/image-2.jpg",     // Fixed: Removed /public/ prefix
    "/Features/image-3.png",     // Fixed: Removed /public/ prefix
    "/Features/image-4.png",     // Fixed: Removed /public/ prefix
    "/Features/image-5.jpg",     // Fixed: Removed /public/ prefix
    "/Features/image-7.jpg",     // Fixed: Removed /public/ prefix
  ];

  // Second row images - Programming and Development
  const secondRowImages = [
    "/Features/image-7.jpg",    // Fixed: Removed /public/ prefix
    "/Features/image-8.png",   // Fixed: Removed /public/ prefix
    "/Features/image-5.jpg",   // Fixed: Removed /public/ prefix
   "/Features/image-1.png",    // Fixed: Removed /public/ prefix
   "/Features/image-2.jpg",    // Fixed: Removed /public/ prefix
    "/Features/image-4.png",    // Fixed: Removed /public/ prefix
  ];

  // Third row images - Innovation and Future Tech
  const thirdRowImages = [
    "/Features/image-5.jpg",  // Fixed: Removed /public/ prefix
    "/Features/image-6.png",   // Fixed: Removed /public/ prefix
    "/Features/image-2.jpg",   // Fixed: Removed /public/ prefix
    "/Features/image-1.png",   // Fixed: Removed /public/ prefix
    "/Features/image-4.png",   // Fixed: Removed /public/ prefix
    "/Features/image-8.png",   // Fixed: Removed /public/ prefix
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  // Helper function to render image row
  const renderImageRow = (images: string[], rowId: string) => (
    <div className="flex flex-row -ml-20">
      {images.map((image, idx) => (
        <motion.div
          variants={imageVariants}
          key={`${rowId}-${idx}`}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          className="rounded-xl -mr-4 mt-4 p-1 bg-gray-800 border border-gray-700 shrink-0 overflow-hidden"
        >
          <img
            src={image}
            alt={`Educational tech innovation - ${rowId} ${idx + 1}`}
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {renderImageRow(firstRowImages, 'ai')}
      {renderImageRow(secondRowImages, 'dev')}
      {renderImageRow(thirdRowImages, 'tech')}

      {/* Gradients */}
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

/**
 * SkeletonFour Component
 * Global collaboration visual: Animated 3D globe using cobe library.
 * Positioned absolutely for overlay effect; represents worldwide connections.
 * No images; canvas-based. Update markers in Globe component for locations.
 * Responsive sizing with max-width and aspect ratio.
 */
export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-80 flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

/**
 * Globe Component
 * Interactive 3D globe renderer using cobe.
 * Props: className for additional styling (e.g., shadows).
 * Config: Dark theme, markers for key locations (e.g., SF, NYC), rotation animation.
 * onRender: Updates phi for smooth rotation.
 * Cleanup: Destroys globe on unmount to prevent memory leaks.
 * To customize: Adjust config options like markers, colors, speed (phi += value).
 */
export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0; // Rotation angle; increment for speed (0.01 = slow spin)

    if (!canvasRef.current) return;

    // Initialize cobe globe with config.
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2, // High-res for crisp rendering
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1, // Dark mode enabled
      diffuse: 1.2, // Light diffusion for glow
      mapSamples: 16000, // Detail level (higher = smoother but slower)
      mapBrightness: 6, // Brightness of map texture
      baseColor: [0.3, 0.3, 0.3], // Neutral base
      markerColor: [0.1, 0.8, 1], // Blue markers for locations
      glowColor: [1, 1, 1], // White glow
      markers: [
        // Array of markers: [longitude, latitude], size (scale).
        // Examples: SF and NYC; add more for global reach.
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 }, // New York
      ],
      onRender: (state) => {
        // Animation loop: Update phi for rotation.
        // Called every frame; return updated state.
        state.phi = phi;
        phi += 0.01;
      },
    });

    // Cleanup: Destroy globe instance on unmount.
    return () => {
      globe.destroy();
    };
  }, []); // Empty deps: Run once on mount

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={cn("rounded-xl shadow-2xl shadow-blue-500/20", className)}
    />
  );
};
