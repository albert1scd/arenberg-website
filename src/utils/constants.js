import { Home, Coffee, BookOpen, Users, Mail } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { id: 'home', labelNL: 'Home', labelEN: 'Home', icon: Home },
  { id: 'rooms', labelNL: 'Kamers', labelEN: 'Rooms', icon: Coffee },
  { id: 'study', labelNL: 'Studie', labelEN: 'Study', icon: BookOpen },
  { id: 'community', labelNL: 'Gemeenschap', labelEN: 'Community', icon: Users },
  { id: 'contact', labelNL: 'Contact', labelEN: 'Contact', icon: Mail }
];

export const ROOMS_DATA = [
  {
    id: 1,
    title: 'Standard Room',
    price: '€350',
    features: ['12m² space', 'Garden view', 'Study desk', 'Private sink']
  },
  {
    id: 2,
    title: 'Premium Room',
    price: '€400',
    features: ['15m² space', 'Balcony access', 'Extra storage', 'Private sink']
  },
  {
    id: 3,
    title: 'Deluxe Room',
    price: '€450',
    features: ['18m² space', 'Corner room', 'Premium furniture', 'Private sink']
  }
];
