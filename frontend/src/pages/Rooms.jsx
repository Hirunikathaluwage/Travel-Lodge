import React, { useState } from "react";
import Header from "../components/Header";

const RoomsPage = () => {
  const [expandedRoom, setExpandedRoom] = useState(null);
  const [filters, setFilters] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    roomType: "all",
    priceRange: "all",
  });

  const rooms = [
    {
      id: 1,
      name: "Hill View Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
      shortDescription:
        "Elegant room with breathtaking views of misty mountains and tea estates",
      price: 180,
      availability: "Available",
      roomType: "Deluxe Room",
      size: "40 m²",
      capacity: 2,
      bedType: "King Size Bed",
      amenities: [
        "Free WiFi",
        "Balcony with Mountain View",
        "Ceiling Fan",
        "Hot Water",
        "Tea & Coffee Facilities",
        "Wooden Furnishings",
        "Work Desk",
      ],
      fullDescription:
        "Wake up to cool mountain air and sweeping views of lush tea plantations. This hill-view deluxe room blends modern comfort with traditional Sri Lankan design, featuring warm wooden interiors, a private balcony, and a peaceful atmosphere ideal for relaxation.",
    },
    {
      id: 2,
      name: "Tea Estate View Room",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
      shortDescription:
        "Comfortable room overlooking rolling tea gardens and valleys",
      price: 160,
      availability: "Available",
      roomType: "Standard Room",
      size: "32 m²",
      capacity: 2,
      bedType: "Queen Size Bed",
      amenities: [
        "Free WiFi",
        "Tea Estate View",
        "Hot Water",
        "Tea Maker",
        "Ceiling Fan",
        "Natural Ventilation",
      ],
      fullDescription:
        "Surrounded by endless green tea fields, this cozy room offers a serene hill-country experience. Ideal for couples or solo travelers seeking calm, nature, and authentic Sri Lankan hospitality.",
    },
    {
      id: 3,
      name: "Mountain Family Suite",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
      shortDescription:
        "Spacious suite perfect for families, surrounded by mountain views",
      price: 260,
      availability: "Available",
      roomType: "Family Suite",
      size: "60 m²",
      capacity: 5,
      bedType: "King Bed + Twin Beds",
      amenities: [
        "Free WiFi",
        "Private Balcony",
        "Separate Living Area",
        "Hot Water",
        "Dining Space",
        "Tea & Coffee Facilities",
        "Extra Storage",
      ],
      fullDescription:
        "Designed for families, this spacious suite provides comfort, privacy, and stunning hill views. Enjoy cool evenings on the balcony while surrounded by the peaceful beauty of Sri Lanka’s central highlands.",
    },
    {
      id: 4,
      name: "Private Hill Cottage",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
      shortDescription:
        "Standalone cottage offering privacy amidst nature and fresh mountain air",
      price: 300,
      availability: "Limited",
      roomType: "Villa",
      size: "55 m²",
      capacity: 3,
      bedType: "King Size Bed",
      amenities: [
        "Free WiFi",
        "Private Garden",
        "Outdoor Seating Area",
        "Fireplace (on request)",
        "Hot Water",
        "Tea & Coffee Facilities",
      ],
      fullDescription:
        "Hidden among trees and misty hills, this private cottage is ideal for couples seeking a quiet retreat. Enjoy unmatched privacy, cool climate, and a deep connection with nature in the heart of the hill country.",
    },
    {
      id: 5,
      name: "Budget Hill Country Room",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
      shortDescription:
        "Simple and comfortable room for travelers exploring the highlands",
      price: 120,
      availability: "Available",
      roomType: "Standard Room",
      size: "25 m²",
      capacity: 2,
      bedType: "Double Bed",
      amenities: [
        "Free WiFi",
        "Hot Water",
        "Ceiling Fan",
        "Natural Lighting",
        "Tea Maker",
      ],
      fullDescription:
        "A budget-friendly option for travelers who spend their days exploring waterfalls, hiking trails, and tea estates. Clean, simple, and comfortable with all essential amenities.",
    },
    {
      id: 6,
      name: "Honeymoon Mountain Suite",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      shortDescription:
        "Romantic suite with panoramic mountain views and cozy interiors",
      price: 280,
      availability: "Available",
      roomType: "Suite",
      size: "50 m²",
      capacity: 2,
      bedType: "King Size Bed",
      amenities: [
        "Free WiFi",
        "Private Balcony",
        "Mountain View",
        "Decorated Room on Request",
        "Hot Water",
        "Tea & Coffee Facilities",
      ],
      fullDescription:
        "Perfect for honeymooners, this romantic suite offers panoramic views of mist-covered mountains, warm lighting, and a calm atmosphere designed for unforgettable moments in Sri Lanka’s hill country.",
    },
  ];

  const toggleRoom = (roomId) => {
    setExpandedRoom(expandedRoom === roomId ? null : roomId);
  };

  const handleFilterChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  const filteredRooms = rooms.filter((room) => {
    // Filter by guest capacity
    if (room.capacity < filters.guests) {
      return false;
    }

    // Filter by room type
    if (filters.roomType !== "all" && room.roomType !== filters.roomType) {
      return false;
    }

    if (filters.priceRange !== "all") {
      if (filters.priceRange === "budget" && room.price > 200) return false;
      if (
        filters.priceRange === "mid" &&
        (room.price < 200 || room.price > 300)
      )
        return false;
      if (filters.priceRange === "luxury" && room.price < 300) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800/30 via-gray-400 to-blue-800/40">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-400 mb-6">
            OUR ROOMS
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect retreat. From cozy standard rooms to lavish
            suites, each accommodation is designed to provide comfort, luxury,
            and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Check-in Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  value={filters.checkIn}
                  onChange={(e) =>
                    handleFilterChange("checkIn", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  value={filters.checkOut}
                  onChange={(e) =>
                    handleFilterChange("checkOut", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <select
                  value={filters.guests}
                  onChange={(e) =>
                    handleFilterChange("guests", parseInt(e.target.value))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Room Type
                </label>
                <select
                  value={filters.roomType}
                  onChange={(e) =>
                    handleFilterChange("roomType", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                >
                  <option value="all">All Types</option>
                  <option value="Standard Room">Standard Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Suite">Suite</option>
                  <option value="Executive Suite">Executive Suite</option>
                  <option value="Family Suite">Family Suite</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget (Under $200)</option>
                  <option value="mid">Mid-range ($200-$300)</option>
                  <option value="luxury">Luxury ($300+)</option>
                </select>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredRooms.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {rooms.length}
                </span>{" "}
                rooms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredRooms.length === 0 ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No rooms match your criteria
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters to see more options
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {filteredRooms.map((room) => (
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
                              {room.capacity}{" "}
                              {room.capacity === 1 ? "Guest" : "Guests"}
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
                                {room.capacity}{" "}
                                {room.capacity === 1 ? "Guest" : "Guests"}
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
          )}
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
