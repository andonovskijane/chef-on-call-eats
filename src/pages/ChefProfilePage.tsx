import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Star, Clock, MapPin, Heart, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Mock data
const chef = {
  id: 1,
  name: "Марија Јовановска",
  image: "/lovable-uploads/1d3042d6-4b33-4a4b-9ffb-6973729f8f8c.png",
  coverImage: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=800",
  bio: "Дипломиран готвач со 10 години искуство во традиционална македонска кујна. Специјализирана за домашни јадења по семејни рецепти.",
  rating: 4.8,
  reviews: 124,
  distance: "1.2 км",
  deliveryTime: "35-45 мин",
  cuisines: ["Македонска", "Балканска", "Домашна"],
  dietary: ["Веганска опција", "Без глутен опција"],
  menuItems: [
    {
      id: 1,
      name: "Тавче Гравче",
      description: "Традиционално македонско јадење со бел грав и зачини.",
      price: 250,
      image: "/lovable-uploads/1d3042d6-4b33-4a4b-9ffb-6973729f8f8c.png",
      popular: true
    },
    {
      id: 2,
      name: "Сарма",
      description: "Завиткани винови листови со мешавина од ориз и мелено месо.",
      price: 280,
      image: "https://images.unsplash.com/photo-1626148440254-290a4f9a5eba?auto=format&fit=crop&q=80&w=600",
      popular: true
    },
    {
      id: 3,
      name: "Мусака",
      description: "Слоеви од компири, мелено месо и бешамел сос.",
      price: 300,
      image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?auto=format&fit=crop&q=80&w=600",
      popular: false
    },
    {
      id: 4,
      name: "Ајвар",
      description: "Домашен ајвар со печени пиперки и домати.",
      price: 200,
      image: "https://images.unsplash.com/photo-1609525313344-a56b96e9afcf?auto=format&fit=crop&q=80&w=600",
      popular: false
    }
  ]
};

const ChefProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItemSelection = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const getTotalPrice = () => {
    return chef.menuItems
      .filter(item => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-chef-background pb-20">
      <Header transparent />
      
      {/* Cover Image */}
      <div className="relative h-64 bg-gray-300">
        <img 
          src={chef.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full">
            <div className="flex items-start h-full pt-16">
              <Link to="/explore" className="bg-white/30 p-2 rounded-full backdrop-blur-sm">
                <ChevronLeft className="text-white" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-xl -mt-16 relative z-10">
        {/* Chef Profile Card */}
        <div className="bg-white rounded-xl p-5 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white -mt-16 shadow-md">
              <img 
                src={chef.image} 
                alt={chef.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-xl font-bold">{chef.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm font-medium">{chef.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({chef.reviews} reviews)</span>
              </div>
            </div>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart size={20} className="text-gray-500" />
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-gray-600">{chef.bio}</p>
          
          <div className="flex items-center justify-between mt-4 text-sm">
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-1" />
              <span>{chef.distance} away</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-1" />
              <span>Delivers in {chef.deliveryTime}</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {chef.cuisines.map((cuisine, index) => (
              <Badge key={index} variant="outline" className="bg-chef-muted text-chef-text border-0">
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Menu */}
        <div className="mt-6">
          <Tabs defaultValue="menu">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="menu">Мени</TabsTrigger>
              <TabsTrigger value="about">За готвачот</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu" className="mt-4 space-y-4">
              <h2 className="text-lg font-semibold">Популарни јадења</h2>
              
              {chef.menuItems.map(item => (
                <div 
                  key={item.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border-2 transition-colors ${
                    selectedItems.includes(item.id) ? 'border-chef-primary' : 'border-transparent'
                  }`}
                  onClick={() => toggleItemSelection(item.id)}
                >
                  <div className="flex">
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        </div>
                        <span className="font-semibold">{item.price} ден.</span>
                      </div>
                      
                      {item.popular && (
                        <Badge className="mt-2 bg-chef-primary/10 text-chef-primary hover:bg-chef-primary/20 border-0">
                          Популарно
                        </Badge>
                      )}
                    </div>
                    
                    <div className="w-24 h-24 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="about" className="mt-4">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h2 className="text-lg font-semibold mb-4">За мене</h2>
                <p className="text-gray-600 mb-4">
                  Јас сум Марија, домашен готвач со страст за традиционална македонска кујна. Готвам со љубов по рецепти наследени од мојата баба и мајка.
                </p>
                
                <h3 className="font-medium mb-2">Специјални диети</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {chef.dietary.map((diet, index) => (
                    <Badge key={index} variant="outline" className="bg-chef-muted text-chef-text border-0">
                      {diet}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="font-medium mb-2">Достапност</h3>
                <p className="text-gray-600">
                  Прифаќам нарачки секој ден од 10:00 до 20:00 часот.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Order Button */}
      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-up p-4 animate-slide-up">
          <div className="container mx-auto max-w-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{selectedItems.length} избрани јадења</span>
              <span className="font-bold text-lg">{getTotalPrice()} ден.</span>
            </div>
            <Link to="/order">
              <Button className="w-full chef-btn-primary">
                Нарачај сега
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChefProfilePage;
