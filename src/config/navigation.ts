import { LayoutGrid, FolderKanban, User, Mail } from 'lucide-react';

export type NavItem = {
  label: string;
  to: string;
  icon: React.ElementType;
};

export const navItems: NavItem[] = [
  { icon: LayoutGrid, label: 'Srushti Madhure', to: '/' },
  { icon: FolderKanban, label: 'Projects', to: '/projects' },
  { icon: User, label: 'About', to: '/about' },
  { icon: Mail, label: 'Contact', to: '/contact' },
];
import type React from 'react';
