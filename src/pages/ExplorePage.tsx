
import React, { useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterChips from '@/components/FilterChips';
import ChefCard from '@/components/ChefCard';

// Mock data
const chefData = [
  {
    id: 1,
    name: "Марија Ј.",
    image: "/lovable-uploads/324e31ba-1e0f-4ddf-806f-f9b149b25f1e.png",
    specialties: ["Македонска", "Домашна"],
    rating: 4.8,
    distance: "1.2 км",
    deliveryTime: "35-45 мин"
  },
  {
    id: 2,
    name: "Стефан К.",
    image: "https://t4.ftcdn.net/jpg/06/97/39/41/360_F_697394120_SRPrchx64unWDwjzkEdRg0ZMKVZefwSK.jpg",
    specialties: ["Италијанска", "Паста"],
    rating: 4.6,
    distance: "2.5 км",
    deliveryTime: "40-50 мин"
  },
  {
    id: 3,
    name: "Ана П.",
    image: "https://www.shutterstock.com/image-photo/young-beautiful-asian-woman-chef-600nw-2317761803.jpg",
    specialties: ["Веганска", "Здрава"],
    rating: 4.9,
    distance: "3.1 км",
    deliveryTime: "45-55 мин"
  },
  {
    id: 4,
    name: "Петар С.",
    image: "https://media.istockphoto.com/id/1019251738/photo/a-confectioner-with-dessert-in-his-hands.jpg?s=612x612&w=0&k=20&c=dWlGmqy9QyIl7LspopPkgxsF__DIv-teRl6fQuSPlCs=",
    specialties: ["Азиска", "Суши"],
    rating: 4.7,
    distance: "4.0 км",
    deliveryTime: "50-60 мин"
  }
];

// Mock filter data
const mockFilters = [
  { id: 'filter1', label: 'Македонска кујна' },
  { id: 'filter2', label: 'Брза достава < 30 мин' }
];

const ExplorePage: React.FC = () => {
  const [filters, setFilters] = useState(mockFilters);

  const handleRemoveFilter = (id: string) => {
    setFilters(filters.filter(filter => filter.id !== id));
  };

  return (
    <div className="min-h-screen bg-chef-background pb-20">
      <Header />
      
      <div className="pt-24 px-4 container mx-auto max-w-xl">
        <h1 className="text-2xl font-bold mb-6">Пронајди готвач</h1>
        
        <SearchBar onFilter={() => console.log("Filter clicked")} />
        
        <FilterChips filters={filters} onRemove={handleRemoveFilter} />
        
        <div className="mt-6 space-y-4">
          {chefData.map(chef => (
            <ChefCard 
              key={chef.id}
              id={chef.id}
              name={chef.name}
              image={chef.image}
              specialties={chef.specialties}
              rating={chef.rating}
              distance={chef.distance}
              deliveryTime={chef.deliveryTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
