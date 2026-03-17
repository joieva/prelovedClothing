'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const getItem = async () => {
      const { data } = await supabase.from('products').select('*').eq('id', id).single();
      setItem(data);
    };
    if (id) getItem();
  }, [id]);

  if (!item) return <p className="p-10 text-center">Loading item details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:pt-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={item.image_url} className="w-full rounded-2xl shadow-lg" />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p className="text-2xl text-blue-600 font-bold">${item.price}</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-500 uppercase font-bold">Category</p>
            <p>{item.category} ({item.sub_category})</p>
          </div>
          <p className="text-gray-700">{item.description}</p>
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold">Message Seller</button>
        </div>
      </div>
    </div>
  );
}