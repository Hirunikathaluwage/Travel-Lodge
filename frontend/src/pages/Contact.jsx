import React, { useState } from "react";
import Header from "../components/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/30 via-gray-400 to-blue-800/40">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
            CONTACT US
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have a question about our
            services, need assistance with your booking, or just want to say
            hello, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all border border-gray-200">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Call Us</h3>
              <p className="text-gray-700 mb-2 text-lg">+1 (555) 123-4567</p>
              <p className="text-gray-700 text-lg">+1 (555) 987-6543</p>
            </div>

            {/* Email Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all border border-gray-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Email Us
              </h3>
              <p className="text-gray-700 mb-2 text-lg">info@travellodge.com</p>
              <p className="text-gray-700 text-lg">
                reservations@travellodge.com
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all border border-gray-200">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Visit Us
              </h3>
              <p className="text-gray-700 mb-2 text-lg">123 Luxury Avenue</p>
              <p className="text-gray-700 text-lg">Paradise City, PC 12345</p>
            </div>
          </div>

          {/* Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-all shadow-lg transform hover:scale-105"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Find Us Here
              </h2>
              <div className="w-full h-[500px] bg-gray-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467137654!2d79.83732631477!3d6.914722995009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25913c93a7d47%3A0x3b70dfbc0d2a1b5!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are your check-in/check-out times?
              </h3>
              <p className="text-gray-700">
                Check-in is from 3:00 PM and check-out is until 11:00 AM. Early
                check-in and late check-out may be available upon request.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer airport transportation?
              </h3>
              <p className="text-gray-700">
                Yes! We provide complimentary airport shuttle service. Please
                inform us of your arrival time at least 24 hours in advance.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is parking available?
              </h3>
              <p className="text-gray-700">
                We offer both valet and self-parking options. Valet parking is
                $25/day and self-parking is complimentary for all guests.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are pets allowed?
              </h3>
              <p className="text-gray-700">
                Yes, we are a pet-friendly hotel! We welcome dogs and cats up to
                50 lbs with a $50 per stay pet fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
