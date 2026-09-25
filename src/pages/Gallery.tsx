import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/ngoData';
import { Sparkles, X, ZoomIn } from 'lucide-react';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Education', 'Community', 'Volunteers', 'Events', 'Children', 'Support Activities'];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-16 lg:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Visual Storytelling
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Photo Gallery & Real Activity Archive
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto">
            Glimpses from our on-ground distribution camps, educational sessions, health checkups, and community interactions in Dhanbad.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                activeCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 group hover:shadow-xl transition cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-blue-950 shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </span>
                </div>
                <span className="absolute top-4 left-4 bg-blue-900/90 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs text-stone-400 block">📅 {item.date}</span>
                <h3 className="font-bold text-stone-900 text-base leading-snug">{item.title}</h3>
                <span className="text-[10px] text-amber-600 font-semibold block pt-1">World Help Foundation • Real Photographic Record</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[60vh] overflow-hidden bg-stone-900 flex items-center justify-center">
              <img src={selectedImage.image} alt={selectedImage.title} className="max-h-[60vh] object-contain w-full" />
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-stone-500">📅 {selectedImage.date}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900">{selectedImage.title}</h3>
              <p className="text-xs text-stone-500">World Help Foundation • Reg. No.: 2026/DHAN/1126/BK4/107 • Dhanbad, Jharkhand</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
