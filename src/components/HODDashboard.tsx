
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  X
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function HODDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: TrendingUp },
    { id: "attendance", label: "Low Attendance", icon: Clock },
    { id: "academic", label: "Academic Structure", icon: BookOpen },
    { id: "students", label: "Students", icon: Users },
    { id: "faculty", label: "Faculty Assignments", icon: UserCheck },
    { id: "timetable", label: "Timetable", icon: Calendar },
    { id: "notices", label: "Notices", icon: Bell },
    { id: "proctors", label: "Proctors", icon: Users },
    { id: "performance", label: "Performance", icon: TrendingUp },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: Settings },
  ];

  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Faculty Members",
      value: "89",
      change: "+3%",
      icon: UserCheck,
      color: "text-green-600"
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+8%",
      icon: BookOpen,
      color: "text-purple-600"
    },
    {
      title: "Attendance Rate",
      value: "92.5%",
      change: "+2.1%",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const recentActivities = [
    {
      title: "New student admission approved",
      time: "2 hours ago",
      type: "success"
    },
    {
      title: "Faculty meeting scheduled",
      time: "4 hours ago",
      type: "info"
    },
    {
      title: "Low attendance alert for CS-301",
      time: "6 hours ago",
      type: "warning"
    },
    {
      title: "Exam schedule updated",
      time: "1 day ago",
      type: "info"
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Dr. Sarah Johnson</p>
              </div>
              <Button className="w-fit">
                <Bell className="w-4 h-4 mr-2" />
                View All Notifications
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className={`text-xs ${stat.color}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'warning' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Add New Student
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-2" />
                    Send Notice
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Manage Courses
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {menuItems.find(item => item.id === activeSection)?.label}
            </h2>
            <p className="text-muted-foreground">
              This section is under development
            </p>
          </div>
        );
    }
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-foreground">HOD Portal</h2>
        <p className="text-sm text-muted-foreground">Computer Science Dept.</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activeSection === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <item.icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Dr. Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">Head of Department</p>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-card">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Mobile Header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b bg-card px-4 shadow-sm lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">HOD Portal</h1>
        </div>

        {/* Page Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
