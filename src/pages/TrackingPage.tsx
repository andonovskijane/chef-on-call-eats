
import React from 'react';
import Header from '@/components/Header';
import OrderTracker from '@/components/OrderTracker';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

const TrackingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-chef-background pb-20">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 max-w-xl">
        <h1 className="text-2xl font-bold mb-2">Следење на нарачка</h1>
        <p className="text-gray-500 mb-6">Нарачка #1234</p>
        
        <OrderTracker status="preparing" estimatedDelivery="14:30" />
        
        <div className="bg-white rounded-xl p-5 shadow-md mt-6">
          <h2 className="font-semibold mb-4">Детали за нарачката</h2>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=600" 
                alt="Chef" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">Марија Јовановска</h3>
              <p className="text-sm text-gray-500">Вашиот готвач</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto rounded-full">
              <Phone size={20} className="text-chef-accent" />
            </Button>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-chef-muted flex items-center justify-center">
              <MapPin size={20} className="text-chef-primary" />
            </div>
            <div>
              <h3 className="font-medium">ул. Партизански Одреди 123</h3>
              <p className="text-sm text-gray-500">Скопје, 1000</p>
            </div>
          </div>
          
          <h3 className="font-medium mb-2">Јадења</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>1 x Тавче Гравче</span>
              <span>250 ден.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>1 x Сарма</span>
              <span>280 ден.</span>
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500">
            <span>Меѓузбир</span>
            <span>530 ден.</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Достава</span>
            <span>80 ден.</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Вкупно</span>
            <span>610 ден.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
