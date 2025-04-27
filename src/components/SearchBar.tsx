
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilter?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className="bg-white rounded-full shadow-md p-1 flex items-center">
      <form onSubmit={handleSubmit} className="flex-1 flex items-center">
        <button type="submit" className="p-2">
          <Search size={20} className="text-gray-400" />
        </button>
        <input
          type="text"
          placeholder="Search for cuisine, dish, or chef..."
          className="flex-1 py-2 px-1 outline-none text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <button 
        className="bg-chef-muted p-2 rounded-full"
        onClick={onFilter}
      >
        <Filter size={20} className="text-chef-text" />
      </button>
    </div>
  );
};

export default SearchBar;
