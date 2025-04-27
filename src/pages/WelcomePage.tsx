
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="flex-1 bg-gradient-to-b from-chef-primary/20 to-chef-secondary flex flex-col justify-center items-center p-6 text-center"
      >
        <div className="w-24 h-24 bg-chef-primary rounded-full flex items-center justify-center mb-6 shadow-lg">
          <ChefHat size={48} className="text-white" />
        </div>
        
        <h1 className="text-3xl font-bold mb-3 text-chef-text">ChefOnCall</h1>
        <p className="text-lg mb-8 text-chef-text/80">Нарачајте домашно готвено на клик!</p>
        
        <div className="w-full max-w-xs space-y-4">
          <Link to="/explore" className="block w-full">
            <Button className="w-full chef-btn-primary">Регистрирај се</Button>
          </Link>
          <Link to="/explore" className="block w-full">
            <Button variant="outline" className="w-full chef-btn-secondary">Најави се</Button>
          </Link>
        </div>
      </div>
      
      <div className="bg-white py-6 px-6">
        <p className="text-center text-sm text-gray-500">
          Домашно готвени оброци од проверени шефови во вашиот град
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
