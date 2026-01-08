import React from "react";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/30 via-gray-400 to-blue-800/40">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ABOUT US
          </h1>
          <p className="text-xl text-white-700 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a premier destination, Travel
            Lodge has been creating unforgettable experiences for decades. What
            started as a small family-owned inn has blossomed into a luxury
            retreat where comfort meets elegance, and every guest is treated
            like family.
          </p>
        </div>
      </section>

      {/* Stats and Images Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Images and Stats */}
            <div className="space-y-8">
              {/* Stats Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      30,000+
                    </h3>
                    <p className="text-gray-600 text-sm">Happy Guests Served</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      25+
                    </h3>
                    <p className="text-gray-600 text-sm">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      150+
                    </h3>
                    <p className="text-gray-600 text-sm">Luxury Rooms</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      4.9★
                    </h3>
                    <p className="text-gray-600 text-sm">Guest Rating</p>
                  </div>
                </div>
              </div>

              {/* Hotel Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-64 rounded-2xl shadow-lg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="h-64 rounded-2xl shadow-lg"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>

              {/* Guest Avatars */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <p className="text-gray-700 font-medium mb-4">
                  Loved by travelers worldwide
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-3">
                    {[
                      "bg-indigo-500",
                      "bg-pink-500",
                      "bg-green-500",
                      "bg-yellow-500",
                      "bg-blue-500",
                      "bg-purple-500",
                    ].map((color, index) => (
                      <div
                        key={index}
                        className={`w-10 h-10 ${color} rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-4">
                    +30,000 guests
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Travel Lodge was founded with a simple vision: to create a
                  home away from home where travelers could find comfort,
                  luxury, and genuine hospitality. What began as a modest
                  20-room inn has grown into a premier destination resort, but
                  our core values remain unchanged.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe that every guest deserves exceptional service,
                  attention to detail, and experiences that create lasting
                  memories. From our award-winning spa to our world-class
                  dining, every aspect of Travel Lodge is designed with your
                  comfort in mind.
                </p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all inline-flex items-center shadow-lg">
                  EXPLORE MORE
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
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16  px-16">
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-7">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-white">
              What makes Travel Lodge special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for perfection in every detail, ensuring your stay
                exceeds expectations.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Luxury & Comfort
              </h3>
              <p className="text-gray-700">
                Every element is thoughtfully designed to provide the ultimate
                comfort and sophisticated elegance.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We're committed to protecting our environment for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
