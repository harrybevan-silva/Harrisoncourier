import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Truck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to user dashboard simulating login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 justify-center mb-8 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-white text-xl">H</div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-secondary tracking-tight">Harrison</span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Logistics</span>
          </div>
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary">{isLogin ? "Welcome back" : "Create your account"}</h2>
            <p className="text-gray-500 text-sm mt-2">
              {isLogin ? "Enter your details to access your dashboard." : "Sign up to start booking deliveries."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                <input required type="text" placeholder="John Omondi" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
              <input required type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                {isLogin && <a href="#" className="text-xs text-primary font-semibold hover:underline">Forgot password?</a>}
              </div>
              <input required type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>

            <button type="submit" className="w-full bg-secondary text-white font-bold text-base py-3.5 rounded-xl mt-2 hover:bg-secondary-light transition-colors flex items-center justify-center gap-2 shadow-lg shadow-secondary/20">
              {isLogin ? "Sign In" : "Create Account"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm font-medium text-gray-600">
            {isLogin ? (
              <p>Don't have an account? <button onClick={() => setIsLogin(false)} className="text-primary font-bold hover:underline">Sign up</button></p>
            ) : (
              <p>Already have an account? <button onClick={() => setIsLogin(true)} className="text-primary font-bold hover:underline">Sign in</button></p>
            )}
          </div>
          
          {/* Quick Demo Links */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-4 uppercase tracking-wider font-bold">Demo Logins</p>
            <div className="flex gap-2 justify-center">
              <Link to="/admin" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-3 rounded-lg font-medium transition-colors">Admin Panel</Link>
              <Link to="/rider" className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-3 rounded-lg font-medium transition-colors">Rider App</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
