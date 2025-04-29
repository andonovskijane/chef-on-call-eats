
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

interface ChefCardProps {
  id: number;
  name: string;
  image: string;
  specialties: string[];
  rating: number;
  distance: string;
  deliveryTime: string;
  imagePosition?: string; // Optional prop for custom image positioning
}

const ChefCard: React.FC<ChefCardProps> = ({
  id,
  name,
  image,
  specialties,
  rating,
  distance,
  deliveryTime,
  imagePosition = 'center 30%', // Default position that works well for most face shots
}) => {
  return (
    <Link to={`/chef/${id}`} className="chef-card block">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`Chef ${name}`}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="bg-chef-muted text-chef-text border-0">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{distance} away</span>
          <span>Delivers in {deliveryTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default ChefCard;
