import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Linkedin, ArrowRight } from 'lucide-react';
import profileImage from '../assets/IMG_20200826_172307.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content Card */}
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Profile Section - Horizontal Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-8">
            {/* Left Side - Name and Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Vivian Mutanu
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 font-light mb-6">
                Data Analyst
              </p>
              
              {/* Contact Links - Moved here */}
              <div className="flex justify-center md:justify-start gap-4">
                <a 
                  href="mailto:vivian.mutanu@email.com"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 group"
                >
                  <Mail className="w-6 h-6 text-white group-hover:text-purple-200" />
                </a>
                <a 
                  href="https://discord.com/users/vivianmutanu"
                 target="_blank"
                 rel="noopener noreferrer"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 group"
                >
                  <MessageCircle className="w-6 h-6 text-white group-hover:text-purple-200" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vivian-mutanu-wambua-64b25b112/"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 group"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:text-purple-200" />
                </a>
              </div>
            </div>
            
            {/* Right Side - Profile Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src={profileImage}
                  alt="Vivian Mutanu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Section Title */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
              A Curious Architect
            </h2>
          </div>

          {/* About Section */}
          <div className="mb-10">
            <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
              Passionate data analyst with a keen eye for transforming raw data into actionable insights. 
              Currently building expertise in Python, SQL, and data visualization tools to help 
              organizations make data-driven decisions.
            </p>
          </div>

          {/* Projects Button */}
          <div className="text-center md:text-left">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              My Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HomePage;