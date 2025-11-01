import * as SimpleIcons from 'simple-icons';
import { useMemo } from 'react';

interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

// Map technology names to simple-icons slugs
const techIconMap: Record<string, string> = {
  'React': 'react',
  'Node.js': 'nodedotjs',
  'Python': 'python',
  'Firebase': 'firebase',
  'Tailwind CSS': 'tailwindcss',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'TensorFlow.js': 'tensorflow',
  'Chart.js': 'chartdotjs',
  'Dialogflow': 'dialogflow',
  'WebSockets': 'websocket',
  'OpenWeatherMap API': 'openweathermap',
  // Add more mappings as needed
};

// Helper function to convert slug to simple-icons key format
function slugToIconKey(slug: string): string {
  // Handle special cases first
  const specialCases: Record<string, string> = {
    'react': 'siReact',
    'nodedotjs': 'siNodedotjs',
    'python': 'siPython',
    'firebase': 'siFirebase',
    'tailwindcss': 'siTailwindcss',
    'typescript': 'siTypescript',
    'javascript': 'siJavascript',
    'tensorflow': 'siTensorflow',
    'chartdotjs': 'siChartdotjs',
    'dialogflow': 'siDialogflow',
    'websocket': 'siWebsocket',
    'openweathermap': 'siOpenweathermap',
  };
  
  if (specialCases[slug]) {
    return specialCases[slug];
  }
  
  // Convert slug to camelCase with 'si' prefix
  // e.g., 'node.js' -> 'nodedotjs' -> 'siNodedotjs'
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `si${normalized.charAt(0).toUpperCase() + normalized.slice(1)}`;
}

export function TechIcon({ tech, size = 16, className = '' }: TechIconProps) {
  const iconData = useMemo(() => {
    const slug = techIconMap[tech] || tech.toLowerCase().replace(/\s+/g, '').replace('.', 'dot');
    try {
      // Convert slug to simple-icons key format
      const iconKey = slugToIconKey(slug);
      // Try to get the icon by key
      const icon = (SimpleIcons as Record<string, SimpleIconData>)[iconKey];
      if (icon && icon.path) {
        return icon;
      }
      return null;
    } catch {
      return null;
    }
  }, [tech]);

  if (!iconData || !iconData.path) {
    // Fallback to text if icon not found
    return (
      <span className={`text-xs font-semibold ${className}`} style={{ fontSize: `${size}px` }}>
        {tech.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fill: `#${iconData.hex}`,
        flexShrink: 0,
      }}
    >
      <path d={iconData.path} />
    </svg>
  );
}

