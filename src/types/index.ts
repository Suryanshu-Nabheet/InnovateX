// Shared TypeScript interfaces and types

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className: string;
}

export interface NavigationLink {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface StatItem {
  title: string;
  count: string;
  desc: string;
}

export interface MapDot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  className?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  tech: string[];
  date: string;
  image?: string;
  details?: string[];
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  author: {
    name: string;
    email: string;
    github: string;
    role: string;
  };
  school: {
    name: string;
    website: string;
    facebook: string;
  };
}

