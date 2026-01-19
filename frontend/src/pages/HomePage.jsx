import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const HomePage = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const hotelImages = [
    {
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Luxury Suites",
      description:
        "Experience ultimate comfort in our elegantly designed rooms featuring king-sized beds, premium linens, and panoramic city views. Each suite is equipped with modern amenities including smart TVs, high-speed WiFi, and marble bathrooms with rainfall showers.",
    },
    {
      url: "https://images.unsplash.com/photo-1727994964977-137247f19086?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Infinity Pool ",
      description:
        "Dive into luxury at our temperature-controlled infinity pool overlooking stunning vistas. Our full-service spa offers rejuvenating treatments, sauna, steam room, and a state-of-the-art fitness center available 24/7 for your wellness needs.",
    },
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      title: "Gourmet Dining Experience",
      description:
        "Indulge in world-class cuisine at our signature restaurant featuring international flavors and local specialties. From sunrise breakfast buffets to candlelit dinners, our award-winning chefs create memorable culinary experiences using the finest ingredients.",
    },
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      title: "Grand Lobby & Lounge",
      description:
        "Step into elegance in our magnificent lobby adorned with contemporary art and designer furniture. Enjoy afternoon tea in our sophisticated lounge bar, featuring craft cocktails, fine wines, and live music performances on weekends.",
    },
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f29da8fd14?auto=format&fit=crop&q=80",
      title: "Event & Conference Facilities",
      description:
        "Host your perfect event in our versatile spaces accommodating 10 to 500 guests. Featuring cutting-edge audio-visual technology, customizable layouts, and dedicated event planners to ensure your meetings, weddings, or celebrations are flawlessly executed.",
    },
  ];

  const reviews = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      comment:
        "Absolutely stunning! The service was impeccable and the views were breathtaking. Every detail was perfect from check-in to check-out.",
      location: "New York, USA",
      date: "December 2024",
    },
    {
      name: "James Rodriguez",
      rating: 5,
      comment:
        "Best hotel experience ever. The attention to detail is remarkable and the staff went above and beyond to make our stay memorable.",
      location: "London, UK",
      date: "November 2024",
    },
    {
      name: "Emily Chen",
      rating: 5,
      comment:
        "A true paradise! The rooms are luxurious, staff incredibly friendly, and the amenities exceeded all expectations. Will definitely return!",
      location: "Singapore",
      date: "December 2024",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotelImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    console.log("Search:", { checkIn, checkOut, guests });
    alert(
      `Searching for rooms\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotelImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + hotelImages.length) % hotelImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/150 to-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Experience Comfort &<br />
            Adventure in One Place
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Book rooms, explore tours, and manage your stay effortlessly
          </p>

          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                />
              </div>

              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r black text-white py-3 rounded-lg  hover:text-indigo-700 font-bold text-lg transition-all shadow-lg transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>

            <button className="text-white-600 font-semibold hover:text-indigo-700 transition mt-4">
              Explore Tours →
            </button>
          </div>
        </div>
      </section>

      {/* Hotel Overview Carousel */}
      <section className="py-24 bg-gradient-to-b from-gray-500 via-gray-300 to-gray-700">
        <div className="max-w-8xl mx-auto px-9">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Discover Our Paradise
            </h2>
            <p className="text-2xl text-gray-700">Where luxury meets comfort</p>
          </div>

          {/* Carousel */}
          <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full">
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <div className="p-12 text-white max-w-3xl">
                        <h3 className="text-4xl font-bold mb-4">
                          {image.title}
                        </h3>
                        <p className="text-lg text-gray-200 leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-4 rounded-full transition-all shadow-lg"
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
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-4 rounded-full transition-all shadow-lg"
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

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {hotelImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-12" : "bg-white/50 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        className="relative py-24"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/40 via-gray-400/48 to-gray-900/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-md px-8 py-4 rounded-full mb-6 border border-gray-300 shadow-lg">
              <div className="flex text-yellow-400 text-3xl mr-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-gray-900 text-xl font-bold">4.9 / 5.0</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-gray-900">
              Hear from travelers who've stayed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/75 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-white/85"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-900 font-bold text-lg">
                        {review.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{review.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg mr-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{review.date}</span>
                </div>

                <p className="text-gray-800 leading-relaxed text-base">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-00 text-lg font-medium">
              Based on 2,847 verified reviews
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 bg-gradient-to-b from-gray-200 via-gray-00 to-gray-600/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-indigo-600 font-semibold text-l uppercase tracking-wide mb-2">
              EXPERIENCES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unforgettable Stay, Exceptional Experiences
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl">
              Dive into a world of endless possibilities. Whether you're lacing
              up your tennis shoes, exploring our lush surroundings, or setting
              sail on a sunset cruise, the adventure never ends at Travel Lodge.
              We offer thrilling on-site activities and curated excursions -
              we've got something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className="h-96 rounded-2xl shadow-xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-300 p-10 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Explore Local Culture: Guided City Tours
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your journey begins with our expert guides taking you through
                the city's most iconic landmarks, hidden gems, and vibrant local
                markets. Experience authentic cuisine, meet local artisans, and
                immerse yourself in the rich cultural tapestry that makes our
                destination truly special.
              </p>
              <button className="border-2 border-indigo-600 text-white-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all inline-flex items-center">
                Explore more
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
      </section>
    </div>
  );
};

export default HomePage;
