
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const lowAttendanceStudents = [
  { id: 1, name: "Rahul Kumar", usn: "1RV19CS001", semester: "7th", attendance: 68, subject: "Machine Learning" },
  { id: 2, name: "Priya Sharma", usn: "1RV19CS015", semester: "5th", attendance: 72, subject: "Database Systems" },
  { id: 3, name: "Amit Singh", usn: "1RV19CS023", semester: "6th", attendance: 65, subject: "Software Engineering" },
  { id: 4, name: "Sneha Reddy", usn: "1RV19CS031", semester: "7th", attendance: 70, subject: "Computer Networks" },
  { id: 5, name: "Vikram Patel", usn: "1RV19CS045", semester: "5th", attendance: 67, subject: "Operating Systems" },
];

const subjectBreakdown = [
  { subject: "Machine Learning", totalStudents: 45, lowAttendance: 8, percentage: 17.8 },
  { subject: "Database Systems", totalStudents: 52, lowAttendance: 12, percentage: 23.1 },
  { subject: "Software Engineering", totalStudents: 48, lowAttendance: 6, percentage: 12.5 },
  { subject: "Computer Networks", totalStudents: 41, lowAttendance: 9, percentage: 22.0 },
  { subject: "Operating Systems", totalStudents: 46, lowAttendance: 7, percentage: 15.2 },
];

export function LowAttendance() {
  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8 text-orange-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Low Attendance Alert</h1>
        </div>
        <p className="text-orange-300 font-light">Students with attendance below 75%</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input 
          placeholder="Search by name or USN..." 
          className="pl-10 glass border-white/20 text-white placeholder-gray-400"
        />
      </div>

      {/* Subject-wise Breakdown */}
      <Card className="chart-container glow-orange">
        <CardHeader>
          <CardTitle className="text-white font-semibold flex items-center">
            <AlertTriangle className="w-5 h-5 text-orange-400 mr-2" />
            Subject-wise Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {subjectBreakdown.map((item, index) => (
            <div key={index} className="glass p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-white">{item.subject}</h3>
                <Badge 
                  variant="outline" 
                  className={`${
                    item.percentage > 20 ? 'border-red-500 text-red-400' : 
                    item.percentage > 15 ? 'border-yellow-500 text-yellow-400' : 
                    'border-green-500 text-green-400'
                  }`}
                >
                  {item.percentage.toFixed(1)}%
                </Badge>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>{item.lowAttendance} out of {item.totalStudents} students</span>
                <span>Below 75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className={`h-2 rounded-full ${
                    item.percentage > 20 ? 'bg-red-500' : 
                    item.percentage > 15 ? 'bg-yellow-500' : 
                    'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(item.percentage * 2, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Student List */}
      <Card className="chart-container">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white font-semibold">Students List</CardTitle>
            <Button 
              size="sm" 
              className="bg-orange-600 hover:bg-orange-700 text-white glow-orange"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notify All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {lowAttendanceStudents.map((student) => (
            <div key={student.id} className="glass p-4 rounded-xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-white">{student.name}</h3>
                  <p className="text-sm text-gray-300">{student.usn}</p>
                </div>
                <Badge 
                  variant="outline" 
                  className="border-red-500 text-red-400"
                >
                  {student.attendance}%
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Semester:</span>
                  <span className="text-white ml-2">{student.semester}</span>
                </div>
                <div>
                  <span className="text-gray-400">Subject:</span>
                  <span className="text-white ml-2">{student.subject}</span>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  View Details
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 glass border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                >
                  <Bell className="w-4 h-4 mr-1" />
                  Notify
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="mobile-card glow-red">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-red-400">32</p>
            <p className="text-sm text-red-300">Critical Cases</p>
            <p className="text-xs text-gray-400 mt-1">Below 70%</p>
          </CardContent>
        </Card>
        
        <Card className="mobile-card glow-yellow">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">18</p>
            <p className="text-sm text-yellow-300">Warning Cases</p>
            <p className="text-xs text-gray-400 mt-1">70-75%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
