function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-black">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 pt-6 pb-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Travel Lodge</h2>
          <p className="text-m text-gray-800">
            Smart hotel management solution for seamless reservations, guest
            services, and operations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-m text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
            <li className="hover:text-blue-600 cursor-pointer">Bookings</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Management */}
        <div>
          <h3 className="font-medium mb-3">Management</h3>
          <ul className="space-y-2 text-m text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Admin Panel</li>
            <li className="hover:text-blue-600 cursor-pointer">
              Staff Management
            </li>
            <li className="hover:text-blue-600 cursor-pointer">Reports</li>
            <li className="hover:text-blue-600 cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-m text-gray-700">
            <li>📍 Colombo, Sri Lanka</li>
            <li>📞 +94 77 123 4567</li>
            <li>✉️ support@travellodge.lk</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-2 text-center text-m text-gray-600">
        © {new Date().getFullYear()} Travel Lodge. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
