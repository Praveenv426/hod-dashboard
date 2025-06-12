
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, AlertTriangle, TrendingUp, TrendingDown, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const proctorData = [
  {
    id: 1,
    proctor: "Dr. Rajesh Kumar",
    mentees: [
      { name: "Rahul Kumar", usn: "1RV19CS001", attendance: 88, marks: 85, status: "good" },
      { name: "Priya Sharma", usn: "1RV19CS015", attendance: 72, marks: 78, status: "warning" },
      { name: "Amit Singh", usn: "1RV19CS023", attendance: 65, marks: 70, status: "critical" }
    ]
  },
  {
    id: 2,
    proctor: "Prof. Meera Sharma",
    mentees: [
      { name: "Sneha Reddy", usn: "1RV19CS031", attendance: 90, marks: 88, status: "good" },
      { name: "Vikram Patel", usn: "1RV19CS045", attendance: 87, marks: 82, status: "good" },
      { name: "Anita Gupta", usn: "1RV19CS052", attendance: 94, marks: 91, status: "excellent" }
    ]
  },
  {
    id: 3,
    proctor: "Dr. Amit Patel",
    mentees: [
      { name: "Rohan Das", usn: "1RV19CS067", attendance: 78, marks: 75, status: "warning" },
      { name: "Kavya Nair", usn: "1RV19CS078", attendance: 91, marks: 89, status: "good" },
      { name: "Arjun Menon", usn: "1RV19CS089", attendance: 68, marks: 72, status: "critical" }
    ]
  },
  {
    id: 4,
    proctor: "Prof. Priya Singh",
    mentees: [
      { name: "Deepika Rao", usn: "1RV19CS095", attendance: 86, marks: 84, status: "good" },
      { name: "Karthik Bhat", usn: "1RV19CS103", attendance: 74, marks: 77, status: "warning" },
      { name: "Meera Joshi", usn: "1RV19CS111", attendance: 92, marks: 87, status: "good" }
    ]
  }
];

export function Proctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProctor, setSelectedProctor] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "border-green-500 text-green-400";
      case "good": return "border-blue-500 text-blue-400";
      case "warning": return "border-yellow-500 text-yellow-400";
      case "critical": return "border-red-500 text-red-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
      case "good": return <TrendingUp className="w-4 h-4" />;
      case "warning": return <AlertTriangle className="w-4 h-4" />;
      case "critical": return <TrendingDown className="w-4 h-4" />;
      default: return null;
    }
  };

  const filteredProctors = proctorData.filter(proctor =>
    proctor.proctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    proctor.mentees.some(mentee => 
      mentee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentee.usn.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalMentees = proctorData.reduce((sum, p) => sum + p.mentees.length, 0);
  const atRiskStudents = proctorData.reduce((sum, p) => 
    sum + p.mentees.filter(m => m.status === "critical" || m.status === "warning").length, 0);
  const excellentStudents = proctorData.reduce((sum, p) => 
    sum + p.mentees.filter(m => m.status === "excellent").length, 0);

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Eye className="w-8 h-8 text-cyan-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Proctors</h1>
        </div>
        <p className="text-cyan-300 font-light">Mentee monitoring and support system</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input 
          placeholder="Search proctors or mentees..." 
          className="pl-10 glass border-white/20 text-white placeholder-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-cyan">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-cyan-400">{totalMentees}</p>
            <p className="text-xs text-cyan-300">Total Mentees</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-red">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-red-400">{atRiskStudents}</p>
            <p className="text-xs text-red-300">At Risk</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-green">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-green-400">{excellentStudents}</p>
            <p className="text-xs text-green-300">Excellent</p>
          </CardContent>
        </Card>
      </div>

      {/* Proctors List */}
      <div className="space-y-4">
        {filteredProctors.map((proctorGroup) => (
          <Card key={proctorGroup.id} className="chart-container">
            <CardHeader 
              className="cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => setSelectedProctor(
                selectedProctor === proctorGroup.id ? null : proctorGroup.id
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-cyan-600 text-white">
                      {proctorGroup.proctor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white font-semibold">{proctorGroup.proctor}</CardTitle>
                    <p className="text-sm text-cyan-300">Proctor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-cyan-500 text-cyan-400">
                    <Users className="w-3 h-3 mr-1" />
                    {proctorGroup.mentees.length} mentees
                  </Badge>
                  <Badge variant="outline" className="border-red-500 text-red-400">
                    {proctorGroup.mentees.filter(m => m.status === "critical" || m.status === "warning").length} alerts
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            {selectedProctor === proctorGroup.id && (
              <CardContent className="space-y-4">
                {proctorGroup.mentees.map((mentee, index) => (
                  <div key={index} className="glass p-4 rounded-xl hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-white">{mentee.name}</h3>
                        <p className="text-sm text-gray-300">{mentee.usn}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(mentee.status)}>
                        {getStatusIcon(mentee.status)}
                        <span className="ml-1">{mentee.status}</span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Attendance:</span>
                        <span className={`font-semibold ${
                          mentee.attendance >= 85 ? 'text-green-400' : 
                          mentee.attendance >= 75 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {mentee.attendance}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Marks:</span>
                        <span className={`font-semibold ${
                          mentee.marks >= 85 ? 'text-green-400' : 
                          mentee.marks >= 75 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {mentee.marks}%
                        </span>
                      </div>
                    </div>

                    {(mentee.status === "critical" || mentee.status === "warning") && (
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          <span className="text-red-400 font-semibold text-sm">Alert Required</span>
                        </div>
                        <p className="text-red-300 text-xs">
                          {mentee.status === "critical" 
                            ? "Student needs immediate attention - low attendance and marks"
                            : "Monitor closely - performance below expectations"
                          }
                        </p>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                      >
                        View Full Profile
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="glass border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                      >
                        Contact Student
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredProctors.length === 0 && (
        <Card className="mobile-card">
          <CardContent className="p-8 text-center">
            <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No proctors found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
