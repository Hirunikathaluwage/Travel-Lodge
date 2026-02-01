import React, { useState } from "react";
import Header from "../components/Header";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "rooms", name: "Rooms & Suites" },
    { id: "dining", name: "Dining" },
    { id: "beach", name: "Beach & Pool" },
    { id: "activities", name: "Activities" },
    { id: "spa", name: "Spa & Wellness" },
  ];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
      category: "rooms",
      title: "Deluxe Ocean Suite",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
      category: "rooms",
      title: "Executive Suite",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
      category: "rooms",
      title: "Garden Villa",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
      category: "rooms",
      title: "Premium Room",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      category: "dining",
      title: "Beachfront Restaurant",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
      category: "dining",
      title: "Ocean View Dining",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80",
      category: "dining",
      title: "Sri Lankan Cuisine",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
      category: "dining",
      title: "Sunset Bar",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80",
      category: "beach",
      title: "Private Beach",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      category: "beach",
      title: "Infinity Pool",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80",
      category: "beach",
      title: "Beachfront Paradise",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      category: "beach",
      title: "Pool Deck",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80",
      category: "activities",
      title: "Water Sports",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80",
      category: "activities",
      title: "Beach Activities",
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
      category: "activities",
      title: "Island Tours",
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80",
      category: "activities",
      title: "Surfing",
    },
    {
      id: 17,
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
      category: "spa",
      title: "Spa Treatment Room",
    },
    {
      id: 18,
      url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
      category: "spa",
      title: "Wellness Center",
    },
    {
      id: 19,
      url: "https://images.unsplash.com/photo-1596178060810-948f80b39b6a?auto=format&fit=crop&q=80",
      category: "spa",
      title: "Massage Therapy",
    },
    {
      id: 20,
      url: "https://images.unsplash.com/photo-1562663389-6da9e2c0c08f?auto=format&fit=crop&q=80",
      category: "spa",
      title: "Ayurvedic Spa",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-300 to-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            GALLERY
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty of Travel Lodge through our collection of
            stunning photographs showcasing our beachfront paradise, luxurious
            accommodations, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white/90 text-gray-700 hover:bg-white shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ height: "300px" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-10"
          >
            ×
          </button>

          <div className="max-w-6xl max-h-[90vh] relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex(
                (img) => img.id === selectedImage.id,
              );
              const prevIndex =
                currentIndex === 0
                  ? filteredImages.length - 1
                  : currentIndex - 1;
              setSelectedImage(filteredImages[prevIndex]);
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-4 rounded-full transition-all"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex(
                (img) => img.id === selectedImage.id,
              );
              const nextIndex =
                currentIndex === filteredImages.length - 1
                  ? 0
                  : currentIndex + 1;
              setSelectedImage(filteredImages[nextIndex]);
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-4 rounded-full transition-all"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience This Paradise?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Book your stay and create your own unforgettable memories
          </p>
          <button className="bg-white text-indigo-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
