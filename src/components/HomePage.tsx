import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content Card */}
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Profile Section */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-300 to-pink-300 flex items-center justify-center text-white text-4xl font-bold">
                SA
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Vivian Mutanu
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 font-light">
              Data Analyst
            </p>
          </div>

          {/* About Section */}
          <div className="mb-10">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate data analyst with a keen eye for transforming raw data into actionable insights. 
              Currently building expertise in Python, SQL, and data visualization tools to help 
              organizations make data-driven decisions.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-4 mb-10">
            <a 
              href="mailto:sarah.anderson@email.com"
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-purple-200" />
            </a>
            <a 
              href="https://discord.com/users/sarahanderson"
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <MessageCircle className="w-6 h-6 text-white group-hover:text-purple-200" />
            </a>
            <a 
              href="https://t.me/sarahanderson"
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <Send className="w-6 h-6 text-white group-hover:text-purple-200" />
            </a>
          </div>

          {/* Projects Button */}
          <Link 
            to="/projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            My Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HomePage;