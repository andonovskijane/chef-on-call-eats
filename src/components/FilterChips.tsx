
import React from 'react';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';

interface FilterChipsProps {
  filters: {
    id: string;
    label: string;
  }[];
  onRemove: (id: string) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({ filters, onRemove }) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex gap-2 my-4 flex-wrap">
      {filters.map((filter) => (
        <Badge
          key={filter.id}
          className="bg-chef-muted text-chef-text hover:bg-chef-muted flex items-center gap-1 py-1.5 pl-3 pr-2"
        >
          {filter.label}
          <button 
            onClick={() => onRemove(filter.id)}
            className="rounded-full bg-white/60 p-0.5"
          >
            <X size={12} />
          </button>
        </Badge>
      ))}
    </div>
  );
};

export default FilterChips;
