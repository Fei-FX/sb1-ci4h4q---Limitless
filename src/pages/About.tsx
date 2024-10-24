import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About Limitless Media Labs</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Brooklyn's premier drone service provider, delivering exceptional aerial imagery across the Tri-state area
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">FAA Licensed</h3>
              <p className="text-gray-600">
                All our pilots are FAA Part 107 certified, ensuring safe and legal operations
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Comprehensive insurance coverage for all operations and equipment
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to delivering exceptional results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Limitless Media Labs, we're passionate about elevating perspectives through cutting-edge drone technology. 
            Our mission is to provide innovative aerial solutions that help our clients achieve their creative and 
            technical objectives while maintaining the highest standards of safety and professionalism.
          </p>
        </div>
      </div>

      {/* Team Image */}
      <div className="relative h-[50vh] bg-cover bg-center"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl max-w-2xl">
              We're always looking for talented professionals to join our growing team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;