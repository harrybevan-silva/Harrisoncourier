import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  MapPin, 
  TrendingUp,
  PackageSearch,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
  LogOut,
  Map as MapIcon,
  Search
} from "lucide-react";
import { cn } from "../lib/utils";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const navigation = [
    { id: "overview", name: "Overview", icon: TrendingUp },
    { id: "orders", name: "Live Orders", icon: MapPin },
    { id: "riders", name: "Rider Management", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center fixed top-0 w-full z-30">
        <Link to="/" className="flex items-center gap-2">
            <div className="bg-secondary text-primary px-2 py-0.5 rounded font-bold text-xs uppercase">Admin</div>
        </Link>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed md:sticky top-0 left-0 h-screen w-64 bg-secondary flex-shrink-0 z-20 transform transition-transform duration-200 ease-in-out md:translate-x-0 pt-16 md:pt-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Link to="/" className="p-6 hidden md:flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-secondary text-xl">H</div>
            <div className="flex flex-col text-white">
              <span className="font-bold text-xl leading-none tracking-tight">Harrison</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Admin Station</span>
            </div>
        </Link>
        
        <div className="px-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                  activeTab === item.id 
                    ? "bg-primary text-secondary" 
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className={cn("h-5 w-5")} />
                {item.name}
              </button>
            )
          })}
        </div>

        <div className="absolute bottom-6 w-full px-4 text-xs font-medium">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 transition-colors rounded-xl hover:bg-red-500/10">
            <LogOut className="h-5 w-5" /> Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 pt-20 md:pt-8 w-full max-w-6xl mx-auto">
         {activeTab === "overview" && <AdminOverview />}
         {activeTab === "orders" && <LiveOrders />}
      </div>
    </div>
  );
};

const AdminOverview = () => {
   return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-secondary mb-8">Hello, Operations Manager</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
            <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider text-xs">Today's Revenue</p>
            <p className="text-3xl font-extrabold">KES 45.2K</p>
            <div className="mt-4 flex items-center gap-2 text-green-600 text-xs font-bold bg-green-50 w-max px-2 py-1 rounded">
              <TrendingUp className="w-3 h-3" /> +12.5%
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
            <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider text-xs">Active Riders</p>
            <p className="text-3xl font-extrabold">34/40</p>
            <div className="mt-4 w-full bg-gray-100 h-2 rounded-full overflow-hidden">
               <div className="bg-primary h-full w-[85%]"></div>
            </div>
          </div>
          <div className="bg-secondary p-6 rounded-3xl border border-gray-800 shadow-sm flex flex-col text-white">
            <p className="text-gray-400 font-medium text-sm mb-1 uppercase tracking-wider text-xs">Pending Orders</p>
            <p className="text-3xl font-extrabold">12</p>
            <p className="mt-4 text-xs text-primary font-semibold">Requires immediate dispatch</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
            <p className="text-gray-500 font-medium text-sm mb-1 uppercase tracking-wider text-xs">Completed Today</p>
            <p className="text-3xl font-extrabold">142</p>
            <div className="mt-4 flex items-center gap-2 text-green-600 text-xs font-bold">
              98% Success Rate
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
           <div className="md:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Action Required</h3>
                <Link to="#" className="text-sm text-primary font-bold">View all</Link>
              </div>
              <div className="space-y-4">
                 {[
                   { id: "HC-701", from: "Karen", to: "CBD", time: "10 mins ago" },
                   { id: "HC-702", from: "Ruaka", to: "Westlands", time: "15 mins ago" },
                 ].map(o => (
                   <div key={o.id} className="flex justify-between items-center p-4 border border-red-100 bg-red-50/50 rounded-2xl">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                         <AlertCircle className="w-5 h-5" />
                       </div>
                       <div>
                         <p className="font-bold text-sm">Order {o.id}</p>
                         <p className="text-xs text-gray-500">{o.from} to {o.to}</p>
                       </div>
                     </div>
                     <div className="flex flex-col items-end gap-2">
                       <p className="text-xs font-bold text-red-600">{o.time}</p>
                       <button className="text-xs bg-secondary text-white px-3 py-1.5 rounded-lg font-bold">Assign Rider</button>
                     </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-lg mb-6">Rider Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-semibold">Available</span>
                  </div>
                  <span className="font-bold">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-semibold">In Transit</span>
                  </div>
                  <span className="font-bold">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <span className="text-sm font-semibold">Offline</span>
                  </div>
                  <span className="font-bold">8</span>
                </div>
              </div>
           </div>
        </div>
      </div>
   )
}

const LiveOrders = () => {
   return (
     <div className="space-y-6">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-secondary">Live Orders</h1>
            <div className="relative">
               <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search by ID, Phone..." className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-primary" />
            </div>
        </div>
        
        <div className="bg-white border text-sm border-gray-100 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500">
                  <th className="py-3 px-6 font-semibold uppercase text-xs tracking-wider">Order ID</th>
                  <th className="py-3 px-6 font-semibold uppercase text-xs tracking-wider">Route</th>
                  <th className="py-3 px-6 font-semibold uppercase text-xs tracking-wider">Rider</th>
                  <th className="py-3 px-6 font-semibold uppercase text-xs tracking-wider">Status</th>
                  <th className="py-3 px-6 font-semibold uppercase text-xs tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {id: "HC-189", route: "Westlands - CBD", rider: "Samuel K.", s: "transit", color: "blue"},
                  {id: "HC-190", route: "Kilimani - Ngong", rider: "John D.", s: "picked", color: "yellow"},
                  {id: "HC-191", route: "Karen - Lavington", rider: "None", s: "pending", color: "red"},
                  {id: "HC-192", route: "Thika - CBD", rider: "Evans M.", s: "delivered", color: "green"},
                ].map((item) => (
                  <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-4 px-6 font-mono font-bold text-secondary">{item.id}</td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{item.route}</td>
                    <td className="py-4 px-6">
                       <span className={cn("text-xs font-bold px-2 py-1 rounded", item.rider === "None" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-700")}>
                         {item.rider}
                       </span>
                    </td>
                    <td className="py-4 px-6">
                       <span className={cn(`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`, `bg-${item.color}-50 text-${item.color}-700`)}>
                         {item.s}
                       </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                       <button className="text-secondary hover:text-primary font-semibold text-sm">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
     </div>
   )
}

export default AdminDashboard;
