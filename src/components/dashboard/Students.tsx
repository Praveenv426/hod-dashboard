
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Search, Plus, Edit, Trash2, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const students = [
  {
    id: 1,
    name: "Rahul Kumar",
    usn: "1RV19CS001",
    semester: "7th",
    email: "rahul.kumar@example.com",
    phone: "+91 9876543210",
    attendance: 88,
    cgpa: 8.5,
    status: "active"
  },
  {
    id: 2,
    name: "Priya Sharma",
    usn: "1RV19CS015",
    semester: "5th",
    email: "priya.sharma@example.com",
    phone: "+91 9876543211",
    attendance: 92,
    cgpa: 9.1,
    status: "active"
  },
  {
    id: 3,
    name: "Amit Singh",
    usn: "1RV19CS023",
    semester: "6th",
    email: "amit.singh@example.com",
    phone: "+91 9876543212",
    attendance: 85,
    cgpa: 8.2,
    status: "active"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    usn: "1RV19CS031",
    semester: "7th",
    email: "sneha.reddy@example.com",
    phone: "+91 9876543213",
    attendance: 90,
    cgpa: 8.8,
    status: "active"
  },
  {
    id: 5,
    name: "Vikram Patel",
    usn: "1RV19CS045",
    semester: "8th",
    email: "vikram.patel@example.com",
    phone: "+91 9876543214",
    attendance: 87,
    cgpa: 8.6,
    status: "active"
  },
  {
    id: 6,
    name: "Anita Gupta",
    usn: "1RV19CS052",
    semester: "6th",
    email: "anita.gupta@example.com",
    phone: "+91 9876543215",
    attendance: 94,
    cgpa: 9.3,
    status: "active"
  }
];

export function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.usn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return "border-green-500 text-green-400";
    if (attendance >= 80) return "border-yellow-500 text-yellow-400";
    return "border-red-500 text-red-400";
  };

  const getCGPAColor = (cgpa: number) => {
    if (cgpa >= 9.0) return "text-green-400";
    if (cgpa >= 8.0) return "text-blue-400";
    if (cgpa >= 7.0) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-blue-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Students</h1>
        </div>
        <p className="text-blue-300 font-light">Manage department students</p>
      </div>

      {/* Search and Add */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search by name, USN, or email..." 
            className="pl-10 glass border-white/20 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white glow-blue">
          <Plus className="w-4 h-4 mr-2" />
          Add New Student
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-blue-400">{students.length}</p>
            <p className="text-xs text-blue-300">Total Students</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-green">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-green-400">
              {students.filter(s => s.attendance >= 85).length}
            </p>
            <p className="text-xs text-green-300">Good Attendance</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-purple">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-purple-400">
              {students.filter(s => s.cgpa >= 8.5).length}
            </p>
            <p className="text-xs text-purple-300">High Performers</p>
          </CardContent>
        </Card>
      </div>

      {/* Students List */}
      <div className="space-y-4">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="chart-container hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-blue-600 text-white font-semibold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg">{student.name}</h3>
                    <p className="text-sm text-gray-300">{student.usn}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300 truncate">{student.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{student.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <Badge variant="outline" className="border-indigo-500 text-indigo-400">
                        {student.semester} Sem
                      </Badge>
                      <Badge variant="outline" className={getAttendanceColor(student.attendance)}>
                        {student.attendance}% Attendance
                      </Badge>
                      <Badge variant="outline" className={`border-gray-500 ${getCGPAColor(student.cgpa)}`}>
                        {student.cgpa} CGPA
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                    >
                      View Profile
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass border-green-500/30 text-green-400 hover:bg-green-500/10"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="glass border-red-500/30 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card className="mobile-card">
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No students found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
