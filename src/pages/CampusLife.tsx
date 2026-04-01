import React from 'react';
import { motion } from 'motion/react';
import { Users, Home, Trophy, Heart, Map, Camera, ArrowRight, Play } from 'lucide-react';

export default function CampusLife() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
          alt="Campus Life" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-univ-blue/70" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Campus Life
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl">Experience a vibrant community where academic excellence meets personal growth and lifelong friendships.</p>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-univ-blue mb-6">Student Clubs & Societies</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 30 student-led organizations, there's a place for everyone at Kampala University. Whether you're interested in technology, arts, sports, or community service, you'll find a community that shares your passion.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { name: 'Tech Innovators', icon: Users },
                  { name: 'Drama Society', icon: Users },
                  { name: 'Debate Club', icon: Users },
                  { name: 'Sports Council', icon: Users },
                ].map((club) => (
                  <div key={club.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border-l-4 border-univ-gold">
                    <club.icon className="w-5 h-5 text-univ-blue" />
                    <span className="font-bold text-gray-700">{club.name}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary">EXPLORE ALL CLUBS</button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Students" className="rounded-sm shadow-lg h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop" alt="Students" className="rounded-sm shadow-lg h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Housing & Sports */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Housing */}
            <div className="group relative overflow-hidden rounded-sm shadow-2xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop" 
                alt="Housing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-univ-blue/60 group-hover:bg-univ-blue/40 transition-colors" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <Home className="w-12 h-12 text-univ-gold mb-6" />
                <h3 className="text-3xl font-serif font-bold mb-4">Housing & Accommodation</h3>
                <p className="text-white/80 mb-6">Safe, comfortable, and convenient on-campus and off-campus housing options tailored to your needs.</p>
                <button className="flex items-center gap-2 font-bold hover:text-univ-gold transition-colors">
                  View Amenities <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sports */}
            <div className="group relative overflow-hidden rounded-sm shadow-2xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop" 
                alt="Sports" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-univ-blue/60 group-hover:bg-univ-blue/40 transition-colors" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <Trophy className="w-12 h-12 text-univ-gold mb-6" />
                <h3 className="text-3xl font-serif font-bold mb-4">Sports & Recreation</h3>
                <p className="text-white/80 mb-6">From competitive inter-university tournaments to casual weekend games, our facilities are second to none.</p>
                <button className="flex items-center gap-2 font-bold hover:text-univ-gold transition-colors">
                  Meet the Teams <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-univ-blue rounded-sm p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-serif font-bold mb-6 flex items-center gap-3">
                <Heart className="w-10 h-10 text-univ-gold" />
                Health & Wellness
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Your well-being is our priority. Our campus medical center and counseling services are available to support you throughout your academic journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-secondary">BOOK APPOINTMENT</button>
                <button className="px-8 py-3 border border-white text-white font-bold hover:bg-white hover:text-univ-blue transition-all">EMERGENCY CONTACTS</button>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-16 h-16 text-univ-gold" />
              </div>
              <p className="font-bold text-univ-gold">24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-univ-blue mb-4">Explore Our Campus</h2>
            <p className="text-gray-600">Take a virtual walk through our state-of-the-art facilities.</p>
          </div>

          <div className="relative group cursor-pointer rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
              alt="Virtual Tour" 
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-univ-blue/30 group-hover:bg-univ-blue/10 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-white fill-current" />
              </div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-serif font-bold mb-2">360° Interactive Tour</h3>
              <p className="text-white/80">Experience the heart of Kampala University from anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
