
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { 
  User, Settings, Clock, Heart, LogOut,
  ChevronRight, CreditCard, MapPin, Bell
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-chef-background pb-20">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 max-w-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Мој профил</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings size={20} className="text-gray-600" />
          </Button>
        </div>
        
        {/* Profile Info */}
        <div className="bg-white rounded-xl p-5 shadow-md mb-6">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="User" />
              <AvatarFallback>АП</AvatarFallback>
            </Avatar>
            
            <div>
              <h2 className="font-semibold text-lg">Ана Петковска</h2>
              <p className="text-sm text-gray-500">ana.p@example.com</p>
            </div>
            
            <Button variant="outline" size="sm" className="ml-auto">
              Измени
            </Button>
          </div>
        </div>
        
        {/* Recent Orders */}
        <div className="bg-white rounded-xl p-5 shadow-md mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Скорешни нарачки</h2>
            <Button variant="ghost" size="sm" className="text-chef-primary h-auto py-1">
              Види ги сите
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1625944525533-473f1c3bd154?auto=format&fit=crop&q=80&w=600" 
                  alt="Food" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="ml-3 flex-grow">
                <h3 className="font-medium">Тавче Гравче и Сарма</h3>
                <span className="text-sm text-gray-500">
                  15 април, 2023 • 610 ден.
                </span>
              </div>
              
              <Button variant="ghost" size="sm" className="text-chef-primary">
                Повтори
              </Button>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1606851185982-d99ba8f8f71c?auto=format&fit=crop&q=80&w=600" 
                  alt="Food" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="ml-3 flex-grow">
                <h3 className="font-medium">Селско месо</h3>
                <span className="text-sm text-gray-500">
                  12 април, 2023 • 420 ден.
                </span>
              </div>
              
              <Button variant="ghost" size="sm" className="text-chef-primary">
                Повтори
              </Button>
            </div>
          </div>
        </div>
        
        {/* Settings */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-4">
            <h2 className="font-semibold mb-2">Поставки</h2>
          </div>
          
          <div className="divide-y">
            <Link to="/payment" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <CreditCard size={20} className="text-gray-500 mr-3" />
                <span>Начини на плаќање</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </Link>
            
            <Link to="/address" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <MapPin size={20} className="text-gray-500 mr-3" />
                <span>Адреси за достава</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </Link>
            
            <Link to="/favorites" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <Heart size={20} className="text-gray-500 mr-3" />
                <span>Омилени готвачи</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </Link>
            
            <Link to="/notifications" className="flex items-center justify-between p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <Bell size={20} className="text-gray-500 mr-3" />
                <span>Нотификации</span>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </Link>
            
            <button className="w-full flex items-center p-4 text-destructive hover:bg-gray-50">
              <LogOut size={20} className="mr-3" />
              <span>Одјави се</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
