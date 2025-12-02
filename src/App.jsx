import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Globe, 
  Zap, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin,
  Stars,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

// 1. Navbar

const Navbar = ({ navigateTo, activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => navigateTo('home')}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition"
        >
          Project by <span className="text-white">HASSAN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => navigateTo(item.toLowerCase())}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activePage === item.toLowerCase() 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
              {activePage === item.toLowerCase() && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              )}
            </button>
          ))}
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 border-b border-white/10 p-6 flex flex-col gap-4">
          <button onClick={() => {navigateTo('home'); setMobileMenuOpen(false)}} className="text-white text-left">Home</button>
          <button onClick={() => {navigateTo('about'); setMobileMenuOpen(false)}} className="text-white text-left">About</button>
        </div>
      )}
    </nav>
  );
};

// 2. Loading Screen

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center z-50">
    <div className="relative">
      <div className="w-20 h-20 rounded-full border-2 border-cyan-500/30 animate-ping absolute inset-0"></div>
      <div className="w-20 h-20 rounded-full border-t-2 border-cyan-400 animate-spin"></div>
    </div>
    <p className="mt-8 text-cyan-400/80 font-mono text-sm tracking-widest uppercase animate-pulse">Initializing System...</p>
  </div>
);

// 3. Counter Component (Neon Style)
const NeonCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 bg-gray-800/50 p-2 pr-6 rounded-full border border-white/5 backdrop-blur-sm">
      <button 
        onClick={() => setCount(count + 1)}
        className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95"
      >
        <Zap size={18} fill="currentColor" />
      </button>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Energy Level</span>
        <span className="text-white font-mono font-bold text-lg leading-none">{count}%</span>
      </div>
    </div>
  );
};

// 4. Home Page
const HomePage = ({ navigateTo }) => {
  
  const cards = [
    { title: "React Core", desc: "Powered by the latest fiber architecture.", icon: <Cpu className="text-cyan-400" /> },
    { title: "Global Scale", desc: "Deployed on edge networks worldwide.", icon: <Globe className="text-purple-400" /> },
    { title: "Lightning Fast", desc: "Optimized for sub-second interactions.", icon: <Zap className="text-yellow-400" /> },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            SYSTEM ONLINE v2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Design beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">boundaries.</span>
          </h1>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Designed by Hassan Welcome to a digital experience where code meets creativity. This project explores the boundaries of modern UI using the "Cosmic Dark" design system. It is built to be fast, responsive, and visually immersive, utilizing the full power of the modern React ecosystem.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => navigateTo('about')}
              className="group px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-cyan-50 transition-colors flex items-center gap-2"
            >
              Explore Mission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <NeonCounter />
          </div>
        </div>

        
        <div className="relative h-[500px] w-full hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 border border-white/10 rounded-2xl backdrop-blur-sm bg-gray-900/40 p-8 transform rotate-6 hover:rotate-3 transition-transform duration-700">
             <div className="h-full w-full border border-dashed border-white/10 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                   <Stars size={48} className="mx-auto text-yellow-200" />
                   <div className="text-2xl font-bold text-white">Future UI</div>
                   <div className="text-sm text-gray-500 font-mono">renders_per_sec: 60</div>
                </div>
             </div>
          </div>
        </div>
      </div>

     
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="group p-8 rounded-2xl bg-gray-800/30 border border-white/5 hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. About Page
const AboutPage = () => {
  const stats = [
    { label: "Lines of Code", val: "15k+" },
    { label: "Components", val: "200+" },
    { label: "Design System", val: "v3.0" },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-cyan-400 font-mono text-sm mb-4 tracking-widest uppercase">About The Project</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Crafting digital <span className="text-purple-500">masterpieces</span></h1>
      
      <p className="text-xl text-gray-400 leading-relaxed mb-16">
        We are a collective of digital artisans. We don't just write code; we compose digital symphonies using the latest web technologies.
      </p>

      
      <div className="grid grid-cols-3 gap-4 mb-20">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
            <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
            <div className="text-sm text-gray-500 font-mono">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Connect with us</h3>
          <p className="text-gray-400">Join our community of developers.</p>
        </div>
        <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white text-gray-400 flex items-center justify-center transition-all border border-white/5">
                    <Icon size={20} />
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
          <div className="relative z-10">
            <Navbar navigateTo={setCurrentPage} activePage={currentPage} />
            
            {currentPage === 'home' && <HomePage navigateTo={setCurrentPage} />}
            {currentPage === 'about' && <AboutPage />}
            
            <footer className="border-t border-white/5 py-8 text-center text-gray-600 text-sm">
              <p>&copy; 2024 Nebula Project. Design by Hassan.</p>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}