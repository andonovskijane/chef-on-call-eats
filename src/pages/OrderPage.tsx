
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MapPin, Plus, Minus, CreditCard, Home } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// Mock data
const orderItems = [
  {
    id: 1,
    name: "Тавче Гравче",
    price: 250,
    image: "https://images.unsplash.com/photo-1625944525533-473f1c3bd154?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Сарма",
    price: 280,
    image: "https://images.unsplash.com/photo-1626148440254-290a4f9a5eba?auto=format&fit=crop&q=80&w=600",
  }
];

const deliveryFee = 80;

const OrderPage: React.FC = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<Record<number, number>>(
    orderItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

  const handleQuantityChange = (itemId: number, change: number) => {
    const newQuantity = Math.max(1, quantities[itemId] + change);
    setQuantities({ ...quantities, [itemId]: newQuantity });
  };

  const calculateSubtotal = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * quantities[item.id],
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryFee;
  };

  const handleCheckout = () => {
    navigate('/tracking');
  };

  return (
    <div className="min-h-screen bg-chef-background pb-28">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 max-w-xl">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="mr-3"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Вашата нарачка</h1>
        </div>
        
        {/* Delivery Address */}
        <div className="bg-white rounded-xl p-4 shadow-md mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start">
              <Home size={20} className="text-chef-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Достава до</h3>
                <p className="text-sm text-gray-600">ул. Партизански Одреди 123, Скопје</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-chef-primary h-auto py-1">
              Промени
            </Button>
          </div>
        </div>
        
        {/* Order Items */}
        <div className="bg-white rounded-xl p-4 shadow-md mb-6">
          <h2 className="font-semibold mb-4">Избрани јадења</h2>
          
          <div className="space-y-4">
            {orderItems.map(item => (
              <div key={item.id} className="flex items-center">
                <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="ml-3 flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-sm text-chef-primary font-medium">
                    {item.price} ден.
                  </span>
                </div>
                
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 w-6 text-center">{quantities[item.id]}</span>
                  <button 
                    className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Меѓузбир</span>
              <span>{calculateSubtotal()} ден.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Достава</span>
              <span>{deliveryFee} ден.</span>
            </div>
            <div className="flex justify-between font-semibold mt-2">
              <span>Вкупно</span>
              <span>{calculateTotal()} ден.</span>
            </div>
          </div>
        </div>
        
        {/* Payment Method */}
        <div className="bg-white rounded-xl p-4 shadow-md mb-6">
          <h2 className="font-semibold mb-4">Начин на плаќање</h2>
          
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center">
                <CreditCard size={20} className="mr-2" />
                <span>Картичка</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash" className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>Кеш при достава</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      {/* Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-up p-4">
        <div className="container mx-auto max-w-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold">Вкупно:</span>
            <span className="font-bold text-lg">{calculateTotal()} ден.</span>
          </div>
          <Button className="w-full chef-btn-primary" onClick={handleCheckout}>
            Потврди нарачка
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
