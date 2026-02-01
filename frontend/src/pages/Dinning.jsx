import React, { useState } from "react";
import Header from "../components/Header";

const DiningPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("signature");

  const restaurants = [
    {
      id: 1,
      name: "Ocean Breeze Restaurant",
      type: "Beachfront Dining",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      description:
        "Experience fine dining with your toes in the sand. Our signature oceanfront restaurant offers fresh seafood, traditional Sri Lankan cuisine, and international favorites with stunning sunset views.",
      cuisine: "Sri Lankan & International",
      timings:
        "Breakfast: 7:00 AM - 10:30 AM | Lunch: 12:30 PM - 3:00 PM | Dinner: 6:30 PM - 10:30 PM",
      specialties: [
        "Fresh Seafood",
        "Rice & Curry",
        "Grilled Prawns",
        "Tropical Cocktails",
      ],
    },
    {
      id: 2,
      name: "Spice Garden",
      type: "Traditional Sri Lankan",
      image:
        "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80",
      description:
        "Immerse yourself in authentic Sri Lankan flavors. Our master chefs prepare traditional dishes using locally sourced spices and age-old recipes passed down through generations.",
      cuisine: "Authentic Sri Lankan",
      timings: "Lunch: 12:00 PM - 3:00 PM | Dinner: 7:00 PM - 10:00 PM",
      specialties: ["Hoppers", "Kottu Roti", "Lamprais", "Deviled Dishes"],
    },
    {
      id: 3,
      name: "Sunset Bar & Grill",
      type: "Poolside Lounge",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
      description:
        "Relax by the infinity pool with refreshing drinks and light bites. Perfect for casual dining throughout the day with spectacular ocean views.",
      cuisine: "International & Bar Food",
      timings: "Open Daily: 11:00 AM - 11:00 PM",
      specialties: [
        "BBQ Seafood",
        "Burgers & Wraps",
        "Craft Cocktails",
        "Smoothie Bowls",
      ],
    },
  ];

  const menuCategories = {
    signature: {
      title: "Signature Dishes",
      items: [
        {
          name: "Negombo Crab Curry",
          description: "Fresh local crab in traditional Sri Lankan spices",
          price: "LKR 3,500",
        },
        {
          name: "Grilled Lobster",
          description: "Whole lobster grilled to perfection with garlic butter",
          price: "LKR 5,800",
        },
        {
          name: "Seafood Platter",
          description: "Prawns, squid, fish, and mussels with rice",
          price: "LKR 4,200",
        },
        {
          name: "Traditional Rice & Curry",
          description:
            "Choice of fish, chicken or vegetable with 7 accompaniments",
          price: "LKR 1,800",
        },
        {
          name: "Kottu Roti",
          description:
            "Chopped roti with vegetables, egg, and your choice of meat",
          price: "LKR 1,200",
        },
        {
          name: "Hoppers with Curry",
          description:
            "Sri Lankan bowl-shaped pancakes with chicken or fish curry",
          price: "LKR 900",
        },
      ],
    },
    breakfast: {
      title: "Breakfast Menu",
      items: [
        {
          name: "Sri Lankan Breakfast",
          description:
            "String hoppers, coconut sambol, dhal curry, and pol roti",
          price: "LKR 1,200",
        },
        {
          name: "Continental Breakfast",
          description: "Fresh pastries, fruits, yogurt, cereals, and toast",
          price: "LKR 1,500",
        },
        {
          name: "American Breakfast",
          description: "Eggs your way, bacon, sausage, hash browns, and toast",
          price: "LKR 1,800",
        },
        {
          name: "Egg Hoppers",
          description: "Traditional egg hoppers with lunu miris and sambol",
          price: "LKR 600",
        },
        {
          name: "Tropical Fruit Bowl",
          description: "Fresh seasonal fruits with honey and coconut",
          price: "LKR 850",
        },
        {
          name: "Pancake Stack",
          description: "Fluffy pancakes with maple syrup and butter",
          price: "LKR 950",
        },
      ],
    },
    beverages: {
      title: "Beverages & Cocktails",
      items: [
        {
          name: "Ceylon Tea Selection",
          description: "Premium black, green, or white tea from local estates",
          price: "LKR 400",
        },
        {
          name: "Fresh King Coconut",
          description: "Chilled tender coconut water straight from the tree",
          price: "LKR 300",
        },
        {
          name: "Tropical Smoothie",
          description: "Mango, papaya, pineapple with yogurt",
          price: "LKR 750",
        },
        {
          name: "Arrack Cocktail",
          description: "Local arrack with lime, ginger, and soda",
          price: "LKR 950",
        },
        {
          name: "Sunset Paradise",
          description: "Rum, passion fruit, lime, and tropical juices",
          price: "LKR 1,100",
        },
        {
          name: "Ceylon Coffee",
          description: "Locally roasted coffee, hot or iced",
          price: "LKR 450",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-300 to-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Savor the authentic flavors of Sri Lanka and international cuisine
            in stunning beachfront settings
          </p>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Restaurants
            </h2>
            <p className="text-xl text-gray-700">
              Three unique dining experiences await you
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div
                    className="h-96 lg:h-full"
                    style={{
                      backgroundImage: `url(${restaurant.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "400px",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-center">
                    <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-2">
                      {restaurant.type}
                    </span>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {restaurant.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Timings</p>
                          <p className="text-gray-600">{restaurant.timings}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-indigo-600 mr-3 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-gray-900">Cuisine</p>
                          <p className="text-gray-600">{restaurant.cuisine}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {restaurant.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all inline-flex items-center w-fit">
                      Reserve a Table
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Menu
            </h2>
            <p className="text-xl text-gray-700">
              Explore our carefully curated selection
            </p>
          </div>

          {/* Menu Category Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedMenu("signature")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                selectedMenu === "signature"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Signature Dishes
            </button>
            <button
              onClick={() => setSelectedMenu("breakfast")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                selectedMenu === "breakfast"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Breakfast
            </button>
            <button
              onClick={() => setSelectedMenu("beverages")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                selectedMenu === "beverages"
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Beverages
            </button>
          </div>

          {/* Menu Items */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {menuCategories[selectedMenu].title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuCategories[selectedMenu].items.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-indigo-600 font-bold text-lg ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;
