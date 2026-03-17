'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchItems = async () => {
      let query = supabase.from('products').select('*');
      
      if (activeCategory !== 'All') query = query.eq('category', activeCategory);
      if (searchTerm) query = query.ilike('title', `%${searchTerm}%`);

      const { data } = await query;
      setItems(data || []);
    };
    fetchItems();
  }, [activeCategory, searchTerm]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search for clothes..." 
        className="w-full p-3 border rounded-xl mb-6 shadow-sm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {['All', 'Tops', 'Shorts', 'Pants'].map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Listing Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(item => (
          <a href={`/product/${item.id}`} key={item.id} className="border rounded-lg overflow-hidden shadow-hover transition">
            <img src={item.image_url || '/placeholder.png'} className="h-48 w-full object-cover" />
            <div className="p-3">
              <h3 className="font-bold truncate">{item.title}</h3>
              <p className="text-blue-600">${item.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}