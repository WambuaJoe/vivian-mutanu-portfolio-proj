import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'sales-dashboard',
      title: "Sales Performance Dashboard",
      description: "Interactive dashboard analyzing quarterly sales data with trend visualization and KPI tracking using Python and Tableau.",
    },
    {
      id: 'customer-segmentation',
      title: "Customer Segmentation Analysis", 
      description: "Market segmentation study using clustering algorithms to identify customer groups and optimize marketing strategies.",
    },
    {
      id: 'inventory-optimization',
      title: "Inventory Optimization Model",
      description: "Data-driven approach to optimize inventory levels, reducing costs by 15% while maintaining service quality standards.",
    },
    {
      id: 'social-media-analytics',
      title: "Social Media Analytics Tool",
      description: "Automated tool for tracking engagement metrics and sentiment analysis across multiple social media platforms.",
    },
    {
      id: 'financial-visualization',
      title: "Financial Data Visualization",
      description: "Comprehensive financial reporting system with interactive charts and automated monthly performance summaries.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            MY PROJECTS
          </h1>
          
          {/* Back to Home Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20 mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/10 rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
              <Link 
                to={`/project/${project.id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProjectsPage;