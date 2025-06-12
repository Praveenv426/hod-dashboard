
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Megaphone, Plus, Pin, Users, Clock, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const notices = [
  {
    id: 1,
    title: "Mid-term Examination Schedule",
    message: "Mid-term examinations for 7th semester will be conducted from March 15-25, 2024. All students are required to report 30 minutes before the exam time.",
    target: "Students",
    date: "2024-01-10",
    time: "10:30 AM",
    author: "Dr. Sarah Johnson",
    pinned: true,
    priority: "high"
  },
  {
    id: 2,
    title: "Faculty Meeting - Project Evaluation",
    message: "All faculty members are requested to attend the project evaluation meeting on January 20th at 2:00 PM in the conference room.",
    target: "Faculty",
    date: "2024-01-08",
    time: "02:15 PM",
    author: "Dr. Sarah Johnson",
    pinned: false,
    priority: "medium"
  },
  {
    id: 3,
    title: "Industry Expert Session",
    message: "Mr. Rahul Sharma from TCS will be conducting a session on 'Future of AI in Software Development' on January 25th for final year students.",
    target: "Students",
    date: "2024-01-05",
    time: "11:00 AM",
    author: "Dr. Sarah Johnson",
    pinned: true,
    priority: "medium"
  },
  {
    id: 4,
    title: "Lab Equipment Maintenance",
    message: "Computer Lab 1 will be under maintenance from January 15-17. Please schedule your lab sessions in other available labs.",
    target: "Faculty",
    date: "2024-01-03",
    time: "09:00 AM",
    author: "Dr. Sarah Johnson",
    pinned: false,
    priority: "low"
  }
];

export function Notices() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: "",
    message: "",
    target: "Students"
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-red-500 text-red-400";
      case "medium": return "border-yellow-500 text-yellow-400";
      case "low": return "border-green-500 text-green-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getTargetColor = (target: string) => {
    return target === "Students" ? "border-blue-500 text-blue-400" : "border-teal-500 text-teal-400";
  };

  const handleCreateNotice = () => {
    // Handle notice creation logic here
    console.log("Creating notice:", newNotice);
    setNewNotice({ title: "", message: "", target: "Students" });
    setShowCreateForm(false);
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Megaphone className="w-8 h-8 text-pink-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Notices</h1>
        </div>
        <p className="text-pink-300 font-light">Create and manage department notices</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-pink">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-pink-400">{notices.length}</p>
            <p className="text-xs text-pink-300">Total Notices</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-blue-400">
              {notices.filter(n => n.target === "Students").length}
            </p>
            <p className="text-xs text-blue-300">For Students</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-teal">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-teal-400">
              {notices.filter(n => n.target === "Faculty").length}
            </p>
            <p className="text-xs text-teal-300">For Faculty</p>
          </CardContent>
        </Card>
      </div>

      {/* Create Notice Button */}
      <Button 
        onClick={() => setShowCreateForm(!showCreateForm)}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white glow-pink"
      >
        <Plus className="w-4 h-4 mr-2" />
        Create New Notice
      </Button>

      {/* Create Notice Form */}
      {showCreateForm && (
        <Card className="chart-container glow-pink">
          <CardHeader>
            <CardTitle className="text-white font-semibold">Create New Notice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Title</label>
              <Input 
                placeholder="Notice title..."
                className="glass border-white/20 text-white placeholder-gray-400"
                value={newNotice.title}
                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Message</label>
              <Textarea 
                placeholder="Notice message..."
                className="glass border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                value={newNotice.message}
                onChange={(e) => setNewNotice({...newNotice, message: e.target.value})}
              />
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Target Audience</label>
              <Select value={newNotice.target} onValueChange={(value) => setNewNotice({...newNotice, target: value})}>
                <SelectTrigger className="glass border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  <SelectItem value="Students">Students</SelectItem>
                  <SelectItem value="Faculty">Faculty</SelectItem>
                  <SelectItem value="Both">Both Students & Faculty</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleCreateNotice}
                className="flex-1 bg-pink-600 hover:bg-pink-700 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Publish Notice
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowCreateForm(false)}
                className="glass border-gray-500/30 text-gray-400 hover:bg-gray-500/10"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notices List */}
      <div className="space-y-4">
        {notices
          .sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .map((notice) => (
          <Card key={notice.id} className="chart-container hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {notice.pinned && <Pin className="w-4 h-4 text-yellow-400" />}
                      <h3 className="font-semibold text-white text-lg">{notice.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{notice.message}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className={getTargetColor(notice.target)}>
                    <Users className="w-3 h-3 mr-1" />
                    {notice.target}
                  </Badge>
                  <Badge variant="outline" className={getPriorityColor(notice.priority)}>
                    {notice.priority} priority
                  </Badge>
                  {notice.pinned && (
                    <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                      <Pin className="w-3 h-3 mr-1" />
                      Pinned
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 pt-2 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{notice.date} at {notice.time}</span>
                    </div>
                    <span>by {notice.author}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                    >
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
                    >
                      <Pin className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {notices.length === 0 && (
        <Card className="mobile-card">
          <CardContent className="p-8 text-center">
            <Megaphone className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No notices found. Create your first notice!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
