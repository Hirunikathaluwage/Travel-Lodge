import React, { useState } from "react";
import Header from "../components/Header";

const RoomsPage = () => {
  const [expandedRoom, setExpandedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe King Suite",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
      shortDescription: "Spacious suite with king-sized bed and city views",
      price: 250,
      availability: "Available",
      roomType: "Suite",
      size: "45 m²",
      capacity: "2 Adults",
      bedType: "King Size Bed",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Work Desk",
        "Rainfall Shower",
        "Bathrobe & Slippers",
      ],
      fullDescription:
        "Experience luxury in our Deluxe King Suite featuring elegant furnishings, a plush king-sized bed, and panoramic city views. The suite includes a separate living area, modern bathroom with rainfall shower, and all the amenities you need for a comfortable stay.",
    },
    {
      id: 2,
      name: "Ocean View Double",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
      shortDescription: "Stunning ocean views with two queen beds",
      price: 220,
      availability: "Available",
      roomType: "Deluxe Room",
      size: "38 m²",
      capacity: "4 Adults",
      bedType: "2 Queen Beds",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Balcony",
        "Coffee Maker",
        "Safe",
        "Ocean View",
        "Mini Fridge",
      ],
      fullDescription:
        "Wake up to breathtaking ocean views in our spacious double room. Perfect for families or friends traveling together, this room features two comfortable queen beds, a private balcony, and modern amenities to make your stay unforgettable.",
    },
    {
      id: 3,
      name: "Executive Suite",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      shortDescription: "Premium suite with separate living and dining areas",
      price: 400,
      availability: "Available",
      roomType: "Executive Suite",
      size: "65 m²",
      capacity: "3 Adults",
      bedType: "King Size Bed + Sofa Bed",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Living Room",
        "Dining Area",
        "Kitchenette",
        "Jacuzzi Tub",
        "Work Desk",
        "Premium Toiletries",
        "Butler Service",
      ],
      fullDescription:
        "Our most luxurious accommodation featuring separate living, dining, and sleeping areas. Perfect for extended stays or entertaining guests, this suite offers premium furnishings, a fully equipped kitchenette, and exclusive butler service.",
    },
    {
      id: 4,
      name: "Garden Villa",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
      shortDescription: "Private villa with garden access and outdoor shower",
      price: 350,
      availability: "Limited",
      roomType: "Villa",
      size: "55 m²",
      capacity: "2 Adults + 1 Child",
      bedType: "King Size Bed",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Private Garden",
        "Outdoor Shower",
        "Mini Bar",
        "Coffee Maker",
        "Safe",
        "Bathrobes",
        "Garden View",
      ],
      fullDescription:
        "Escape to your own private paradise in our Garden Villa. Featuring direct garden access, an outdoor shower, and a tranquil atmosphere, this villa is perfect for couples seeking privacy and relaxation in a natural setting.",
    },
    {
      id: 5,
      name: "Standard Queen",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
      shortDescription: "Cozy room with queen bed and modern amenities",
      price: 180,
      availability: "Available",
      roomType: "Standard Room",
      size: "28 m²",
      capacity: "2 Adults",
      bedType: "Queen Size Bed",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Coffee Maker",
        "Safe",
        "Work Desk",
        "Shower",
      ],
      fullDescription:
        "Our comfortable Standard Queen room offers everything you need for a pleasant stay. Featuring a cozy queen-sized bed, modern amenities, and thoughtful touches, this room provides excellent value without compromising on comfort.",
    },
    {
      id: 6,
      name: "Family Suite",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
      shortDescription:
        "Spacious suite ideal for families with connecting rooms",
      price: 320,
      availability: "Available",
      roomType: "Family Suite",
      size: "58 m²",
      capacity: "4 Adults + 2 Children",
      bedType: "King Bed + 2 Twin Beds",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Connecting Rooms",
        "Mini Fridge",
        "Coffee Maker",
        "Safe",
        "Kids Welcome Kit",
        "Extra Bathroom",
      ],
      fullDescription:
        "Perfect for families, our Family Suite features connecting rooms with a king bed in the master bedroom and two twin beds in the adjoining room. Enjoy the space and privacy your family needs while staying together.",
    },
  ];

  const toggleRoom = (roomId) => {
    setExpandedRoom(expandedRoom === roomId ? null : roomId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/30 via-gray-400 to-blue-800/40">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            OUR ROOMS
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect retreat. From cozy standard rooms to lavish
            suites, each accommodation is designed to provide comfort, luxury,
            and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
              >
                {/* Room Card Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                  {/* Room Image */}
                  <div className="lg:col-span-1">
                    <div
                      className="h-64 lg:h-full rounded-xl"
                      style={{
                        backgroundImage: `url(${room.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "250px",
                      }}
                    ></div>
                  </div>

                  {/* Room Info */}
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {room.name}
                          </h2>
                          <p className="text-gray-600 text-lg">
                            {room.shortDescription}
                          </p>
                        </div>
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            room.availability === "Available"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {room.availability}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Room Type</p>
                          <p className="font-semibold text-gray-900">
                            {room.roomType}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Size</p>
                          <p className="font-semibold text-gray-900">
                            {room.size}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Capacity</p>
                          <p className="font-semibold text-gray-900">
                            {room.capacity}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Price per night
                          </p>
                          <p className="font-semibold text-indigo-600 text-xl">
                            ${room.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleRoom(room.id)}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all inline-flex items-center"
                      >
                        {expandedRoom === room.id
                          ? "Show Less"
                          : "View Details"}
                        <svg
                          className={`w-5 h-5 ml-2 transition-transform ${
                            expandedRoom === room.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedRoom === room.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Room Details
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {room.fullDescription}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center">
                            <span className="text-gray-600 font-medium w-32">
                              Bed Type:
                            </span>
                            <span className="text-gray-900">
                              {room.bedType}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-600 font-medium w-32">
                              Room Size:
                            </span>
                            <span className="text-gray-900">{room.size}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-600 font-medium w-32">
                              Max Capacity:
                            </span>
                            <span className="text-gray-900">
                              {room.capacity}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Amenities
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {room.amenities.map((amenity, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-700">{amenity}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 p-6 bg-indigo-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-2">
                            Special Offer
                          </h4>
                          <p className="text-gray-700 mb-4">
                            Book 3 nights or more and get 15% off your total
                            stay!
                          </p>
                          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all w-full">
                            Book with Discount
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our team is here to help you find the perfect room for your stay
          </p>
          <button className="bg-white text-indigo-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
