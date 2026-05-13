import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Package,
  Truck,
  Clock,
  ShieldCheck,
  Search,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  TrendingUp,
  Box,
  Star
} from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

// Make sure to add WhatsApp link later
const WHATSAPP_NUMBER = "254741878383";

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ 
        y: [0, 30, 0],
        x: [0, -20, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl"
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-white text-xl">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight">Harrison <span className="text-blue-600 font-black italic">Courier</span></span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">
            <a href="#services" className="text-blue-600 hover:text-black transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-black transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a>
            <div className="h-4 w-px bg-gray-200 ml-6 mr-2"></div>
            <Link to="/login" className="text-sm font-bold ml-4">Log In</Link>
            <Link to="/login" className="bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/10 ml-4">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-6 space-y-4 text-center flex flex-col">
            <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium">How it Works</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
            <Link to="/login" className="text-lg font-medium pt-4 border-t border-gray-100">Sign In</Link>
            <Link to="/login" className="bg-primary text-white font-bold text-lg px-6 py-3 rounded-full inline-flex items-center justify-center">
              Book Delivery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative overflow-hidden min-h-[90vh] flex items-center bg-blue-800">
      {/* Background Image Elements */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.65, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7a?q=80&w=2070&auto=format&fit=crop" 
          alt="Delivery truck in Nairobi" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/95 via-blue-800/70 to-blue-600/30 z-10" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-max backdrop-blur-sm"
          >
            🚀 Same-day Delivery in Nairobi
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-white drop-shadow-2xl">
            Fast, Reliable <br />
            <span className="text-primary italic drop-shadow-lg">Fulfillment</span> & <br />
            Logistics.
          </h1>
          
          <p className="text-gray-200 text-xl max-w-md font-medium leading-relaxed drop-shadow-lg">
            E-commerce fulfillment, warehousing, & courier services tailored for Kenyan SMEs and enterprise clients.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col gap-4 mt-6 max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">Pickup Point</label>
                <select className="w-full bg-white/5 border border-white/10 text-white rounded-lg p-3 text-sm font-medium outline-none [&>option]:text-secondary">
                  <option>Warehouse, Nairobi</option>
                  <option>Mombasa Port</option>
                  <option>CBD</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">Drop-off Point</label>
                <select className="w-full bg-white/5 border border-white/10 text-white rounded-lg p-3 text-sm font-medium outline-none [&>option]:text-secondary">
                  <option>Customer Doorstep</option>
                  <option>Retail Store</option>
                  <option>Upcountry</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-lg">KES</div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Pricing</div>
                  <div className="text-lg font-black tracking-tight text-white drop-shadow-sm">Custom Quote</div>
                </div>
              </div>
              <Link to="/login" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 w-full sm:w-auto text-center border border-primary-dark/50">Request Quote</Link>
            </div>
          </div>
          
          <div className="flex gap-6 sm:gap-8 items-center pt-8 overflow-x-auto whitespace-nowrap pb-4 sm:pb-0">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white drop-shadow-md">1M+</span>
              <span className="text-xs font-bold text-blue-300 uppercase">Parcels</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white drop-shadow-md">99%</span>
              <span className="text-xs font-bold text-blue-300 uppercase">On-Time</span>
            </div>
            <div className="h-8 w-[1px] bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0 shadow-lg">✓</div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase leading-tight whitespace-normal max-w-[80px]">Fully Insured</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 w-full flex items-center justify-center mt-8 lg:mt-0"
        >
          <div className="w-full bg-white/10 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl relative border border-white/20 text-white max-w-md mx-auto lg:ml-auto overflow-hidden">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-32 h-32 bg-primary/30 blur-3xl rounded-full pointer-events-none" 
            />
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="font-bold text-lg tracking-tight">System Status</div>
              <div className="text-[10px] text-green-400 font-mono bg-green-400/10 border border-green-400/20 px-2 py-1 rounded">ALL SYSTEMS NOMINAL</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10 relative z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Active Dispatch #BX-882</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> In Transit</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-3/4 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-300 mt-2 font-bold tracking-wider uppercase">
                    <span>Nairobi West</span>
                    <span>Msa Road</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mt-6 relative z-10">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5 border-b border-white/10 pb-2">Fleet Activity</div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="text-xs font-semibold">Truck #KDG-321</div>
                <div className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Unloading</div>
                <div className="text-xs font-bold text-gray-300 font-mono tracking-tighter">HQ Hub</div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="text-xs font-semibold">Van #KCW-912</div>
                <div className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Out for Delivery</div>
                <div className="text-xs font-bold text-gray-300 font-mono tracking-tighter">Route 4</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-6 relative z-10">
              <div className="bg-primary/20 border border-primary/30 p-4 rounded-2xl flex flex-col gap-1 hover:bg-primary/30 transition-colors cursor-pointer" onClick={() => alert("Warehouse tracking.")}>
                <span className="text-[10px] font-black uppercase text-blue-200">Management</span>
                <span className="text-sm font-bold text-white">Client Portal</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col gap-1 hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-[10px] font-black uppercase text-gray-400">Support</span>
                <span className="text-sm font-bold text-white">Contact Us</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white border-y border-gray-200 py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624445330880-92716a4feee6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15 pointer-events-none z-0"></div>
      <AnimatedBackground />
      
      <div className="flex gap-8 md:gap-12 flex-wrap justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 items-center w-max"
        >
          <div className="w-8 h-8 bg-secondary text-white rounded-lg flex flex-shrink-0 items-center justify-center font-bold">1</div>
          <div>
            <div className="text-xs font-bold leading-tight">BOOK</div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Online or App</div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 items-center w-max"
        >
          <div className="w-8 h-8 bg-secondary text-white rounded-lg flex flex-shrink-0 items-center justify-center font-bold">2</div>
          <div>
            <div className="text-xs font-bold leading-tight">PICKUP</div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Instant Rider</div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3 items-center w-max"
        >
          <div className="w-8 h-8 bg-secondary text-white rounded-lg flex flex-shrink-0 items-center justify-center font-bold">3</div>
          <div>
            <div className="text-xs font-bold leading-tight">DELIVER</div>
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Real-time Map</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center gap-6 grayscale flex-wrap justify-center relative z-10"
      >
        <span className="text-[10px] font-bold text-secondary uppercase">Trusted By:</span>
        <div className="text-sm md:text-lg font-bold">SHOPIFY</div>
        <div className="text-sm md:text-lg font-bold italic underline">JUMIA</div>
        <div className="text-sm md:text-lg font-bold">WHATSAPP</div>
      </motion.div>
    </section>
  );
};

const FleetShowcase = () => {
  return (
    <section className="py-24 bg-secondary text-white relative border-b border-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1563206267-8e6d2b4b2ac6?q=80&w=2070&auto=format&fit=crop" 
          alt="Fleet of Vans"
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent z-10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-xl">
           <div className="inline-flex items-center text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-max mb-6 border border-primary/20 bg-primary/10">
             Our Fleet
           </div>
           <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Built for <span className="text-primary italic">Scale</span>.</h2>
           <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
             From agile delivery vans for efficient city maneuvering to robust logistics trucks for scalable warehouse operations, we possess the right vehicle for your payload. 
           </p>
           <div className="flex gap-4">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md flex-1">
                <div className="text-3xl font-black text-primary">150+</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Delivery Vans</div>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md flex-1">
                <div className="text-3xl font-black text-primary">45+</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Logistics Trucks</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Same-Day Delivery",
      desc: "Instant dispatch inside Nairobi. Perfect for urgent documents, electronics, and fast-moving retail.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Next-Day Delivery",
      desc: "Affordable countrywide shipping. Reliable next-day drops to Mombasa, Kisumu, Nakuru, and beyond.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "E-commerce Fulfillment",
      desc: "Designed for SMEs & Brands. We pick, pack, and deliver. Pay-on-delivery collection included.",
      icon: <Box className="h-6 w-6" />,
    },
    {
      title: "Medical Courier",
      desc: "Secure, temperature-tracked transport for pharmaceuticals, specimens, and medical supplies.",
      icon: <ShieldCheck className="h-6 w-6" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F5F5F5] relative border-b border-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none z-0"></div>
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary">Our Services</h2>
          </div>
          <Link to="/login" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-secondary hover:text-blue-600 transition-colors">
            View All <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-2 border-gray-100 p-6 rounded-2xl hover:border-secondary hover:shadow-lg transition-all group flex flex-col relative text-secondary"
            >
              <div className="absolute top-6 right-6 text-gray-200 group-hover:text-blue-600 transition-colors">
                <ArrowRight className="h-5 w-5 -rotate-45" />
              </div>
              <div className="w-12 h-12 bg-[#F5F5F5] text-secondary rounded-xl border border-gray-200 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2 leading-tight">{service.title}</h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed font-medium flex-grow">{service.desc}</p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-auto">SYS_MODULE_0{idx + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCalculator = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [weight, setWeight] = useState("small");

  const [price, setPrice] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    if(pickup && dropoff) {
      let base = 250;
      if (weight === "medium") base += 150;
      if (weight === "large") base += 400;
      
      // Faux calculation just to show estimate
      setPrice(base + Math.floor(Math.random() * 100));
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15 pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">Cost Estimation</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary mb-6">Transparent,<br/>Affordable Pricing.</h2>
            <p className="text-lg font-medium text-gray-500 mb-8 leading-relaxed">
              No hidden fees. We price fairly based on distance and parcel weight. Calculate your exact delivery cost before you commit.
            </p>
            <ul className="space-y-4 font-bold text-sm text-secondary">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5" /> Integration with M-Pesa & Cards</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5" /> Free insurance up to KES 5,000</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-primary h-5 w-5" /> Discounts for daily bulk sellers</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#F5F5F5] rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            <h3 className="text-xl font-black tracking-tight mb-6 text-secondary">Get an Instant Quote</h3>
            <form onSubmit={calculate} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Pickup Location (Nairobi)</label>
                <input required value={pickup} onChange={e => setPickup(e.target.value)} type="text" placeholder="e.g. Westlands, CBD, Kilimani" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-medium text-secondary" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Drop-off Location</label>
                <input required value={dropoff} onChange={e => setDropoff(e.target.value)} type="text" placeholder="e.g. Karen, Ngong Road, Thika" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-medium text-secondary" />
              </div>
              <div>
                 <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Parcel Size</label>
                 <div className="grid grid-cols-3 gap-3">
                   <button type="button" onClick={() => setWeight("small")} className={cn("py-3 px-3 border-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all", weight === "small" ? "bg-secondary text-primary border-secondary" : "bg-white text-gray-500 hover:border-gray-400 border-gray-200")}>
                     S (0-2kg)
                   </button>
                   <button type="button" onClick={() => setWeight("medium")} className={cn("py-3 px-3 border-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all", weight === "medium" ? "bg-secondary text-primary border-secondary" : "bg-white text-gray-500 hover:border-gray-400 border-gray-200")}>
                     M (2-5kg)
                   </button>
                   <button type="button" onClick={() => setWeight("large")} className={cn("py-3 px-3 border-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all", weight === "large" ? "bg-secondary text-primary border-secondary" : "bg-white text-gray-500 hover:border-gray-400 border-gray-200")}>
                     L (+5kg)
                   </button>
                 </div>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-black tracking-wide uppercase text-sm py-4 rounded-xl mt-4 hover:bg-primary-dark transition-colors">
                Calculate Cost
              </button>
            </form>
            
            {price !== null && (
              <div className="mt-6 p-4 bg-white border-2 border-primary rounded-xl flex items-center justify-between animate-in fade-in zoom-in duration-300">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Estimated Cost</p>
                  <p className="text-2xl font-black text-secondary tracking-tight">KES {price}.00</p>
                </div>
                <Link to="/login" className="bg-secondary text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-secondary-light transition shadow-md">
                  Book Now
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
   return (
      <section className="py-24 bg-[#F5F5F5] border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none z-0"></div>
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2">Testimonials</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-secondary">Trusted By 10,000+</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Wanjiku N.", role: "Boutique Owner", text: "Harrison logistics changed my business. My customers in Nairobi now get their dresses within 3 hours. Best courier service hands down." },
                { name: "David Ochieng", role: "E-commerce Mgr", text: "We shifted all our Jumia fulfillment to Harrison. Their warehousing is secure and their rider network is incredibly reliable." },
                { name: "Sarah M.", role: "Regular Sender", text: "Sent a laptop to my brother in Nakuru. I could track it the entire way on the web app. Very professional and fast." }
              ].map((t, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 border-2 border-gray-100 rounded-2xl bg-white text-left relative flex flex-col hover:border-secondary hover:shadow-lg transition-all"
                >
                  <div className="text-primary mb-4 flex gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-gray-600 mb-6 font-medium leading-relaxed flex-grow text-sm">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-bold text-primary text-xs">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-secondary text-xs tracking-wide">{t.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>
   )
}

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-8 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white text-lg">H</div>
              <span className="font-bold text-xl tracking-tight">Harrison <span className="text-primary italic font-black">Courier</span></span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed font-medium">
              Kenya's fastest-growing logistics and fulfillment partner. Ensuring same-day delivery with trust and transparency.
            </p>
          </div>
          
          <div>
            <h4 className="font-black mb-4 uppercase text-[10px] tracking-widest text-gray-500">Services</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Same-Day Delivery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bulk Logistics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-commerce Fulfillment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warehousing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-4 uppercase text-[10px] tracking-widest text-gray-500">Company</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tracking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Driver Portal</a></li>
            </ul>
          </div>
          
          <div>
             <h4 className="font-black mb-4 uppercase text-[10px] tracking-widest text-gray-500">Contact Us</h4>
             <ul className="space-y-4 text-sm font-bold text-gray-300">
               <li className="flex items-start gap-3">
                 <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-xs">Commercial Street, Industrial Area<br />Nairobi, Kenya</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-xs">+254 741 878 383</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-xs">hzs25@gmail.com</span>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} Harrison Courier & Fulfillment Services. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-wider text-[10px]">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Harrison%20Courier,%20I%20would%20like%20to%20book%20a%20delivery`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center group"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium group-hover:ml-2 group-hover:block hidden md:block">
        Message us
      </span>
    </a>
  );
};

// Main Sticky CTA for mobile booking
const StickyMobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-40 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <Link to="/login" className="w-full bg-primary text-white font-bold text-lg py-3.5 rounded-xl flex items-center justify-center transition-transform active:scale-95">
        Start Your Delivery Now
      </Link>
    </div>
  );
}


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FleetShowcase />
      <Services />
      <PricingCalculator />
      <SocialProof />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
