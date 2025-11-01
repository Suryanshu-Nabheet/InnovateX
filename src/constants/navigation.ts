import { Home, Info, Mail, Users } from 'lucide-react';
import { NavigationLink } from '@/types';
import { ROUTES } from './routes';

export const NAV_LINKS: NavigationLink[] = [
  { to: ROUTES.HOME, label: 'Home', icon: Home },
  { to: ROUTES.ABOUT, label: 'About', icon: Info },
  { to: ROUTES.CONTACT, label: 'Contacts', icon: Mail },
  { to: ROUTES.LEADERSHIP, label: 'Leadership', icon: Users },
  { to: ROUTES.LAB, label: 'Lab', icon: Users },
];

