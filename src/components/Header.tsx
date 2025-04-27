
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Bell, User } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  return (
    <header className={`fixed top-0 w-full z-50 ${transparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-chef-primary flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="font-bold text-lg text-chef-text">ChefOnCall</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell size={20} className="text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart size={20} className="text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User size={20} className="text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
