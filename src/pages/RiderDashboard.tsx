import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Check,
  X,
  Navigation,
  CheckCircle2,
  PhoneCall,
  User,
  Truck,
  Menu,
  Bell
} from "lucide-react";
import { cn } from "../lib/utils";

const RiderDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden">
      {/* App Bar Pattern */}
      <div className="bg-secondary text-white px-4 py-4 flex justify-between items-center z-10 sticky top-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border-2 border-primary overflow-hidden">
            <User className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <p className="font-bold text-sm leading-none">Samuel K.</p>
            <p className="text-xs text-gray-400 mt-1">KBA 123X</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           {/* Online Toggle */}
           <div className="flex items-center gap-2 bg-gray-800 rounded-full p-1 border border-gray-700">
              <button 
                onClick={() => setIsOnline(false)} 
                className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", !isOnline ? "bg-red-500 text-white" : "text-gray-400")}
              >
                OFF
              </button>
              <button 
                onClick={() => setIsOnline(true)} 
                className={cn("px-3 py-1 rounded-full text-xs font-bold transition-all", isOnline ? "bg-green-500 text-white" : "text-gray-400")}
              >
                ON
              </button>
           </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 p-4 pb-24 overflow-y-auto">
        {!isOnline ? (
          <div className="h-full flex flex-col items-center justify-center text-center pt-24">
             <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
               <Truck className="w-8 h-8 text-gray-400" />
             </div>
             <h2 className="text-xl font-bold text-gray-700">You are currently offline</h2>
             <p className="text-gray-500 mt-2 max-w-xs">Toggle your status to ON to start receiving delivery requests.</p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* New Request Modal/Card pattern */}
            <div className="bg-white rounded-3xl border border-primary ring-4 ring-primary/20 p-5 shadow-xl animate-in slide-in-from-bottom-5">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                 <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-yellow-100 text-yellow-800 text-xs font-bold uppercase">
                   New Request
                 </div>
                 <span className="font-mono font-bold text-sm text-gray-500">HC-193</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-3 h-3 rounded-full border-2 border-secondary bg-white"></div>
                    <div className="w-0.5 h-10 bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Pickup • 1.2km away</p>
                      <p className="font-bold">Kilimani, House 4</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Drop-off • 4.5km</p>
                      <p className="font-bold">Westlands, The Mall</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">Earnings</p>
                    <p className="font-bold text-green-700 text-lg">KES 250</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Size</p>
                    <p className="font-bold text-secondary">Small</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                 <button className="bg-gray-100 text-gray-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 active:scale-95 transition-transform">
                   <X className="w-5 h-5" /> Decline
                 </button>
                 <button className="bg-primary text-secondary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-dark active:scale-95 transition-transform shadow-lg shadow-primary/30">
                   <Check className="w-5 h-5" /> Accept
                 </button>
              </div>
            </div>

            {/* Active Delivery */}
            <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm opacity-80 pointer-events-none">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                 <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase">
                   In Transit
                 </div>
                 <span className="font-mono font-bold text-sm text-gray-500">HC-189</span>
              </div>
              
              <div className="flex gap-4 items-center bg-blue-50/50 p-3 rounded-xl mb-4 border border-blue-100">
                <Navigation className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-sm font-semibold text-blue-900">Navigate to recipient (The Mall, Westlands)</p>
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                     <User className="w-5 h-5 text-gray-500" />
                   </div>
                   <div>
                     <p className="font-bold text-sm">Jane Roe</p>
                     <p className="text-xs text-gray-500">Receiver</p>
                   </div>
                 </div>
                 <button className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                   <PhoneCall className="w-4 h-4" />
                 </button>
              </div>

              {/* Status Action */}
              <button disabled className="w-full mt-6 bg-secondary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
                 Mark as Delivered <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>

          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-gray-200 fixed bottom-0 w-full max-w-md pb-safe">
        <div className="flex justify-around py-3 px-2">
          <button className="flex flex-col items-center text-primary">
            <Truck className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">Deliveries</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
            <CheckCircle2 className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">History</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
            <User className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
