import { Home, Star, CloudRain } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navLinks: NavLink[] = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Forecast', href: '/forecast', icon: CloudRain },
  { name: 'Favorites', href: '/favorites', icon: Star },
];
