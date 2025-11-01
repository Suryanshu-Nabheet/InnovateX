import { MapDot, StatItem } from '@/types';

export const MAP_DOTS: MapDot[] = [
  {
    start: { lat: 25.5941, lng: 85.1376 }, // Patna
    end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  },
  {
    start: { lat: 25.5941, lng: 85.1376 }, // Patna
    end: { lat: 51.5074, lng: -0.1278 }, // London
  },
  {
    start: { lat: 25.5941, lng: 85.1376 }, // Patna
    end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
  },
  {
    start: { lat: 25.5941, lng: 85.1376 }, // Patna
    end: { lat: -33.8688, lng: 151.2093 }, // Sydney
  },
  {
    start: { lat: 25.5941, lng: 85.1376 }, // Patna
    end: { lat: 28.6139, lng: 77.2090 }, // Delhi
  },
];

export const CONNECTIVITY_STATS: StatItem[] = [
  { title: 'Global Network', count: '50+', desc: 'Partner Institutions' },
  { title: 'Live Projects', count: '100+', desc: 'Collaborative Works' },
  { title: 'Countries', count: '25+', desc: 'International Reach' },
];

