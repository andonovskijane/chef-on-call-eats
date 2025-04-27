
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-chef-background p-4 text-center">
      <div className="w-20 h-20 bg-chef-primary rounded-full flex items-center justify-center mb-6">
        <ChefHat size={32} className="text-white" />
      </div>
      
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6">Оваа страница не е пронајдена</p>
      <p className="text-gray-500 mb-8 max-w-md">
        Страницата што ја барате не постои или е преместена.
      </p>
      
      <Link to="/">
        <Button className="chef-btn-primary">
          Врати се на главната страница
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
