'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const ProfilePage = () => {
  const [myItems, setMyItems] = useState([]);
  const [user, setUser] = useState({ name: "User", email: "user@example.com" });

  useEffect(() => {
    fetchMyItems();
  }, []);

  async function fetchMyItems() {
    // In a real app, you'd filter by the logged-in user's ID
    const { data } = await supabase.from('products').select('*');
    setMyItems(data || []);
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-6 border-b">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">👤</div>
          <div>
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-gray-500 text-sm">Selling used hand-me-downs</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-lg font-bold mb-4">My Listings ({myItems.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border flex justify-between items-center">
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded ${item.status === 'sold' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {item.status || 'Active'}
                </span>
                <button className="block text-xs text-red-500 mt-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;