import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Home } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData = {
    'sales-dashboard': {
      title: "Sales Performance Dashboard",
      subtitle: "Interactive quarterly sales analysis with KPI tracking and trend visualization",
      description: "This comprehensive dashboard transforms raw sales data into actionable business insights. Built using Python for data processing and Tableau for visualization, it provides real-time tracking of key performance indicators, quarterly trends, and sales team performance metrics. The dashboard enables stakeholders to make data-driven decisions and identify growth opportunities.",
      techStack: ["Python", "Tableau", "Pandas", "SQL", "Excel"],
      images: [
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      hasWorkflow: true,
      liveDemo: true
    },
    'customer-segmentation': {
      title: "Customer Segmentation Analysis",
      subtitle: "Market segmentation using clustering algorithms to optimize marketing strategies",
      description: "Advanced customer segmentation project utilizing machine learning clustering algorithms to identify distinct customer groups based on purchasing behavior, demographics, and engagement patterns. This analysis enables targeted marketing campaigns and personalized customer experiences, resulting in improved conversion rates and customer satisfaction.",
      techStack: ["Python", "Scikit-learn", "K-Means", "Matplotlib", "Seaborn"],
      images: [
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      hasWorkflow: true,
      liveDemo: false
    },
    'inventory-optimization': {
      title: "Inventory Optimization Model",
      subtitle: "Data-driven approach reducing costs by 15% while maintaining service quality",
      description: "Developed a sophisticated inventory optimization model that analyzes historical sales data, seasonal trends, and supplier lead times to determine optimal stock levels. The model successfully reduced inventory costs by 15% while maintaining 99% service level, preventing stockouts and minimizing carrying costs.",
      techStack: ["Python", "NumPy", "Pandas", "Linear Programming", "Plotly"],
      images: [
        "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      hasWorkflow: true,
      liveDemo: true
    },
    'social-media-analytics': {
      title: "Social Media Analytics Tool",
      subtitle: "Automated engagement tracking and sentiment analysis across platforms",
      description: "Built an automated social media analytics tool that monitors engagement metrics and performs sentiment analysis across multiple platforms. The tool provides real-time insights into brand perception, campaign performance, and audience engagement, enabling data-driven social media strategy optimization.",
      techStack: ["Python", "Twitter API", "NLTK", "TextBlob", "Streamlit"],
      images: [
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      hasWorkflow: false,
      liveDemo: true
    },
    'financial-visualization': {
      title: "Financial Data Visualization",
      subtitle: "Interactive reporting system with automated monthly performance summaries",
      description: "Comprehensive financial reporting system featuring interactive charts and automated monthly performance summaries. The system processes complex financial data and presents it through intuitive visualizations, enabling executives to quickly understand financial performance, identify trends, and make informed strategic decisions.",
      techStack: ["Python", "Dash", "Plotly", "PostgreSQL", "Pandas"],
      images: [
        "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      hasWorkflow: true,
      liveDemo: true
    }
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-purple-300 hover:text-purple-200">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 p-4">
      {/* Navigation Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-white font-bold text-xl">My Portfolio</div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Back Button - Aligned to Right */}
        <div className="mb-12">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>

        {/* Project Detail Card */}
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Project Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-purple-200">
              {project.subtitle}
            </p>
          </div>

          {/* Preview Images */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={image} 
                    alt={`${project.title} preview ${index + 1}`}
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* About This Project */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="backdrop-blur-md bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              <ExternalLink className="w-4 h-4" />
              {project.liveDemo ? 'View Live Project' : 'View on GitHub'}
            </button>
          </div>
        </div>

        {/* Floating Background Elements */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProjectDetail;