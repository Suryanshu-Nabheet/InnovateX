import { Facebook, Instagram } from 'lucide-react';
import { SocialLink } from '@/types';
import { SITE_CONFIG } from '@/config';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    url: SITE_CONFIG.school.facebook,
    icon: Facebook,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/apna_gyan_niketan/?hl=en',
    icon: Instagram,
  },
];

