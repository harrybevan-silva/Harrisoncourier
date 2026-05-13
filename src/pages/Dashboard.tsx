import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Package, 
  MapPin, 
  History, 
  CreditCard, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  Navigation,
  CheckCircle2,
  Clock,
  Truck,
  Phone
} from "lucide-react";
import { cn } from "../lib/utils";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("book");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: "book", name: "Book Delivery", icon: Package },
    { id: "tracking", name: "Active Tracking", icon: Navigation },
    { id: "history", name: "Delivery History", icon: History },
    { id: "billing", name: "Billing & M-Pesa", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center fixed top-0 w-full z-30">
        <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-secondary text-sm">H</div>
            <span className="font-bold text-lg leading-none text-secondary">Harrison</span>
        </Link>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex-shrink-0 z-20 transform transition-transform duration-200 ease-in-out md:translate-x-0 pt-16 md:pt-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Link to="/" className="p-6 hidden md:flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-secondary text-xl">H</div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-secondary tracking-tight">Harrison</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Logistics</span>
            </div>
        </Link>
        
        <div className="px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                  activeTab === item.id 
                    ? "bg-secondary text-white" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-secondary"
                )}
              >
                <Icon className={cn("h-5 w-5", activeTab === item.id ? "text-primary" : "text-gray-400")} />
                {item.name}
              </button>
            )
          })}
        </div>

        <div className="absolute bottom-6 w-full px-4 text-xs font-medium">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 transition-colors rounded-xl hover:bg-red-50">
            <LogOut className="h-5 w-5" /> Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 pt-20 md:pt-8 w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8 hidden md:flex">
          <div>
            <h1 className="text-3xl font-bold text-secondary">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, John.</p>
          </div>
          <button className="relative p-2 bg-white rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </button>
        </div>

        {activeTab === "book" && <BookingForm />}
        {activeTab === "tracking" && <ActiveTracking />}
        {activeTab === "history" && <DeliveryHistory />}
        {activeTab === "billing" && <BillingView />}
      </div>
    </div>
  );
};

const BookingForm = () => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Package className="h-5 w-5 text-primary" /> New Delivery
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Pickup Details</h3>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Pickup Address</label>
              <input type="text" placeholder="House 4, Kilimani Rd, Nairobi" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Sender Phone</label>
              <input type="tel" defaultValue="0700 000 000" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none bg-gray-50" readOnly />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">Drop-off Details</h3>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Drop-off Address</label>
              <input type="text" placeholder="The Mall, Westlands, Nairobi" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Receiver Phone</label>
              <input type="tel" placeholder="e.g. 0712 345 678" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="pt-4 space-y-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider pb-2">Package Details</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                 <input type="radio" name="size" className="text-primary w-4 h-4 focus:ring-primary" defaultChecked />
                 <div><p className="font-bold text-sm">Small</p><p className="text-xs text-gray-500">Fits in small bag</p></div>
               </label>
               <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                 <input type="radio" name="size" className="text-primary w-4 h-4 focus:ring-primary" />
                 <div><p className="font-bold text-sm">Medium</p><p className="text-xs text-gray-500">Fits in box</p></div>
               </label>
               <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                 <input type="radio" name="size" className="text-primary w-4 h-4 focus:ring-primary" />
                 <div><p className="font-bold text-sm">Large</p><p className="text-xs text-gray-500">Requires van</p></div>
               </label>
             </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <div>
            <p className="text-sm text-gray-500 font-medium font-sans">Total Estimated Cost</p>
            <p className="text-3xl font-extrabold text-secondary mt-1">KES 350</p>
          </div>
          <button type="button" onClick={() => alert("Proceeding to M-Pesa prompt")} className="w-full md:w-auto bg-primary text-secondary font-bold px-8 py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
            Pay & Request Pick-up
          </button>
        </div>
      </form>
    </div>
  );
};

const ActiveTracking = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> In Transit
          </div>
          <h2 className="text-xl font-bold">Order #HC-784829</h2>
          <p className="text-gray-500 text-sm mt-1">Kilimani → Westlands</p>
        </div>
        <div className="text-left md:text-right">
           <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Estimated Drop-off</p>
           <p className="text-2xl font-extrabold">2:15 PM</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gray-200 rounded-3xl min-h-[400px] border border-gray-300 relative overflow-hidden flex items-center justify-center isolate">
           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
           <p className="font-bold text-gray-500 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-gray-300">Nairobi Interactive Map Placeholder</p>
           
           {/* Mock Map UI elements */}
           <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-black rounded-full border-4 border-white flex items-center justify-center z-10 shadow-lg transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-2 h-2 bg-primary rounded-full"></div>
           </div>
           
           <div className="absolute top-1/3 left-2/3 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center z-10 shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
             <div className="w-6 h-6 bg-primary rounded-full shadow-lg border-2 border-white flex justify-center items-center">
               <Truck className="w-3 h-3 text-secondary" />
             </div>
           </div>

           {/* dashed line */}
           <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-current text-primary border-black" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'}}>
             <path d="M 25% 50% Q 40% 45%, 66% 33%" fill="none" strokeWidth="4" strokeDasharray="8 8" />
           </svg>

        </div>
        
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-6">Delivery Updates</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent hidden md:block"></div>
            
            <div className="relative pl-6 pb-6 border-l w-[2px] border-gray-200 ml-3">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></span>
              <p className="font-bold text-sm">Rider Assigned</p>
              <p className="text-xs text-gray-500">1:05 PM</p>
            </div>
            
            <div className="relative pl-6 pb-6 border-l w-[2px] border-primary ml-3">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></span>
              <p className="font-bold text-sm">Package Picked Up</p>
              <p className="text-xs text-gray-500">1:30 PM</p>
            </div>
            
            <div className="relative pl-6 border-l w-[2px] border-transparent ml-3">
              <span className="absolute -left-[11px] -top-1 w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                 <span className="w-2 h-2 rounded-full bg-primary"></span>
              </span>
              <p className="font-bold text-sm text-primary">In Transit</p>
              <p className="text-xs text-gray-500">Currently heading to Westlands</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
             <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
               <div>
                 <p className="font-bold text-sm">Samuel K.</p>
                 <p className="text-xs text-gray-500">KBA 123X • Motorcycle</p>
               </div>
               <button className="ml-auto w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                 <Phone className="w-4 h-4" />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DeliveryHistory = () => {
   return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-sm">
        <h2 className="text-xl font-bold mb-6">Recent Deliveries</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500">
                <th className="py-4 font-semibold p-4">Tracking ID</th>
                <th className="py-4 font-semibold">Date</th>
                <th className="py-4 font-semibold">Route</th>
                <th className="py-4 font-semibold">Cost</th>
                <th className="py-4 font-semibold text-right p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5].map((item) => (
                <tr key={item} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 p-4 font-mono font-medium">HC-902{item}1</td>
                  <td className="py-4 text-gray-600">May {item + 1}, 2026</td>
                  <td className="py-4 text-gray-600">CBD → Karen</td>
                  <td className="py-4 font-bold">KES 400</td>
                  <td className="py-4 text-right p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase">
                      Delivered
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
   )
}

const BillingView = () => {
   return (
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Payment Methods</h2>
            <div className="space-y-4">
              <div className="border border-green-500 bg-green-50 rounded-xl p-4 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                   <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs uppercase">M-PESA</div>
                   <div>
                     <p className="font-bold text-sm">M-Pesa Express</p>
                     <p className="text-xs text-gray-500">Default</p>
                   </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="border border-gray-200 rounded-xl p-4 flex justify-between items-center opacity-60">
                <div className="flex gap-4 items-center">
                   <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-white font-bold text-xs uppercase">VISA</div>
                   <div>
                     <p className="font-bold text-sm">•••• 4242</p>
                     <p className="text-xs text-gray-500">Expires 04/28</p>
                   </div>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full py-3 rounded-xl border border-gray-200 bg-gray-50 font-semibold text-sm hover:bg-gray-100 transition-colors">
              Add New Payment Method
            </button>
         </div>
       </div>
   )
}

export default UserDashboard;
