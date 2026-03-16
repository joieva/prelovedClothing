import React, { useState } from 'react';

const SellPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subCategory: '',
    price: '',
    condition: 'Gently Used',
    description: ''
  });

  const categories = {
    Tops: ['Sleeveless', 'T-shirt', 'Polo shirt', 'Polo', 'Collared'],
    Shorts: ['Athletic', 'Casual', 'Denim'],
    Pants: ['Jogger', 'Formal', 'Jeans', 'Cargo']
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">List an Item</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          {/* Image Placeholder */}
          <div className="w-full h-48 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center bg-gray-50">
            <span className="text-4xl">📸</span>
            <p className="text-sm text-gray-500 mt-2">Upload or Take Photo</p>
            <input type="file" accept="image/*" className="opacity-0 absolute h-48 w-full cursor-pointer" />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Item Title</label>
            <input name="title" type="text" onChange={handleChange} placeholder="e.g. Vintage Polo Shirt" className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          {/* Category Logic */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select name="category" onChange={handleChange} className="w-full border rounded-lg p-2.5">
                <option value="">Select</option>
                {Object.keys(categories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Sub-Category</label>
              <select name="subCategory" onChange={handleChange} disabled={!formData.category} className="w-full border rounded-lg p-2.5 bg-gray-50 disabled:opacity-50">
                <option value="">Select</option>
                {formData.category && categories[formData.category].map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price and Condition */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Price ($)</label>
              <input name="price" type="number" onChange={handleChange} placeholder="0.00" className="w-full border rounded-lg p-2.5" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Condition</label>
              <select name="condition" onChange={handleChange} className="w-full border rounded-lg p-2.5">
                <option>New</option>
                <option>Like New</option>
                <option>Gently Used</option>
                <option>Worn</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-700 transition shadow-lg">
            Post Listing
          </button>
        </div>
      </div>
    </div>
  );
};
const handleUpload = async () => {
  const { data, error } = await supabase
    .from('products')
    .insert([
      { 
        title: formData.title, 
        category: formData.category, 
        price: formData.price, 
        condition: formData.condition 
      }
    ]);

  if (error) alert("Error uploading!");
  else alert("Item posted successfully!");
};
export default SellPage;