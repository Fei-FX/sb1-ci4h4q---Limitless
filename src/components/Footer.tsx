import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Camera className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Limitless Media Labs</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional drone services in the Tri-state area. FAA Part 107 certified and fully insured.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">Services</Link>
              <Link to="/booking" className="block text-gray-400 hover:text-white">Book Now</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link to="/services#construction" className="block text-gray-400 hover:text-white">Construction</Link>
              <Link to="/services#real-estate" className="block text-gray-400 hover:text-white">Real Estate</Link>
              <Link to="/services#film" className="block text-gray-400 hover:text-white">Film Production</Link>
              <Link to="/services#events" className="block text-gray-400 hover:text-white">Events</Link>
              <Link to="/services#mapping" className="block text-gray-400 hover:text-white">Drone Mapping</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">Brooklyn, NY</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">info@limitlessmedialabs.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Limitless Media Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;