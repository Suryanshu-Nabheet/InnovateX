// Application routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  LEADERSHIP: '/leadership',
  LAB: '/lab',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];

