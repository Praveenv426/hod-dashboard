
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Calendar,
  BookOpen,
  Bell,
  MessageSquare,
  TrendingUp,
  Clock,
  UserCheck,
  Settings,
  LogOut,
  Menu,
  X,
  AlertTriangle,
  ClipboardCheck,
  Megaphone,
  Eye,
  BarChart2
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardOverview } from "./dashboard/DashboardOverview";
import { LowAttendance } from "./dashboard/LowAttendance";
import { AcademicStructure } from "./dashboard/AcademicStructure";
import { Students } from "./dashboard/Students";
import { FacultyAssignments } from "./dashboard/FacultyAssignments";
import { Timetable } from "./dashboard/Timetable";
import { Notices } from "./dashboard/Notices";
import { Proctors } from "./dashboard/Proctors";
import { Performance } from "./dashboard/Performance";
import { Chat } from "./dashboard/Chat";
import { Profile } from "./dashboard/Profile";

export function HODDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      id: "dashboard", 
      label: "Dashboard", 
      icon: TrendingUp, 
      color: "text-indigo-400",
      glowClass: "glow"
    },
    { 
      id: "attendance", 
      label: "Low Attendance", 
      icon: AlertTriangle, 
      color: "text-orange-400",
      glowClass: "glow-orange"
    },
    { 
      id: "academic", 
      label: "Academic Structure", 
      icon: BookOpen, 
      color: "text-purple-400",
      glowClass: "glow-purple"
    },
    { 
      id: "students", 
      label: "Students", 
      icon: Users, 
      color: "text-blue-400",
      glowClass: "glow-blue"
    },
    { 
      id: "faculty", 
      label: "Faculty Assignments", 
      icon: ClipboardCheck, 
      color: "text-teal-400",
      glowClass: "glow-teal"
    },
    { 
      id: "timetable", 
      label: "Timetable", 
      icon: Calendar, 
      color: "text-indigo-400",
      glowClass: "glow"
    },
    { 
      id: "notices", 
      label: "Notices", 
      icon: Megaphone, 
      color: "text-pink-400",
      glowClass: "glow-pink"
    },
    { 
      id: "proctors", 
      label: "Proctors", 
      icon: Eye, 
      color: "text-cyan-400",
      glowClass: "glow-cyan"
    },
    { 
      id: "performance", 
      label: "Performance", 
      icon: BarChart2, 
      color: "text-green-400",
      glowClass: "glow-green"
    },
    { 
      id: "chat", 
      label: "Chat", 
      icon: MessageSquare, 
      color: "text-sky-400",
      glowClass: "glow-sky"
    },
    { 
      id: "profile", 
      label: "Profile", 
      icon: Settings, 
      color: "text-gray-400",
      glowClass: ""
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "attendance":
        return <LowAttendance />;
      case "academic":
        return <AcademicStructure />;
      case "students":
        return <Students />;
      case "faculty":
        return <FacultyAssignments />;
      case "timetable":
        return <Timetable />;
      case "notices":
        return <Notices />;
      case "proctors":
        return <Proctors />;
      case "performance":
        return <Performance />;
      case "chat":
        return <Chat />;
      case "profile":
        return <Profile />;
      default:
        return <DashboardOverview />;
    }
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-slate-900/95 to-indigo-900/95 backdrop-blur-xl">
      <div className="p-6 border-b border-white/10">
        <h2 className="text-xl font-bold text-white font-poppins">HOD Portal</h2>
        <p className="text-sm text-indigo-300 font-light">Computer Science Dept.</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeSection === item.id ? `active ${item.glowClass}` : ''}`}
            onClick={() => {
              setActiveSection(item.id);
              setIsMobileMenuOpen(false);
            }}
          >
            <item.icon className={`w-5 h-5 ${item.color}`} />
            <span className="text-white font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-3 mb-4 p-3 glass rounded-xl">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-indigo-600 text-white">SJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Dr. Sarah Johnson</p>
            <p className="text-xs text-indigo-300">Head of Department</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start glass border-red-500/30 text-red-400 hover:bg-red-500/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen font-poppins">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-80 p-0 bg-transparent border-none">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-80">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 glass border-b border-white/10 px-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold text-white">HOD Portal</h1>
        </div>

        {/* Page Content */}
        <main className="p-4 lg:p-6 max-w-md mx-auto lg:max-w-none">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
