
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart2, Download, Filter, TrendingUp, TrendingDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";

const attendanceVsMarksData = [
  { class: "CS-501", attendance: 88, marks: 85, students: 45 },
  { class: "CS-502", attendance: 85, marks: 82, students: 52 },
  { class: "CS-503", attendance: 92, marks: 89, students: 48 },
  { class: "CS-601", attendance: 87, marks: 84, students: 41 },
  { class: "CS-602", attendance: 90, marks: 87, students: 46 },
  { class: "CS-701", attendance: 85, marks: 83, students: 45 }
];

const semesterPerformance = [
  { semester: "5th Sem", avgAttendance: 87, avgMarks: 83, passRate: 94 },
  { semester: "6th Sem", avgAttendance: 89, avgMarks: 85, passRate: 96 },
  { semester: "7th Sem", avgAttendance: 86, avgMarks: 84, passRate: 93 },
  { semester: "8th Sem", avgAttendance: 88, avgMarks: 86, passRate: 97 }
];

const performanceDistribution = [
  { name: "Excellent (90-100%)", value: 25, color: "#10b981" },
  { name: "Good (80-89%)", value: 35, color: "#3b82f6" },
  { name: "Average (70-79%)", value: 28, color: "#f59e0b" },
  { name: "Below Average (<70%)", value: 12, color: "#ef4444" }
];

const monthlyTrends = [
  { month: "Aug", attendance: 85, marks: 82 },
  { month: "Sep", attendance: 87, marks: 84 },
  { month: "Oct", attendance: 88, marks: 85 },
  { month: "Nov", attendance: 86, marks: 83 },
  { month: "Dec", attendance: 89, marks: 87 },
  { month: "Jan", attendance: 88, marks: 86 }
];

export function Performance() {
  const [selectedView, setSelectedView] = useState("overview");
  const [selectedSemester, setSelectedSemester] = useState("all");

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BarChart2 className="w-8 h-8 text-green-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Performance Analytics</h1>
        </div>
        <p className="text-green-300 font-light">Comprehensive academic performance insights</p>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center space-x-4">
        <div className="flex space-x-2 flex-1">
          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger className="glass border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-white/20">
              <SelectItem value="overview">Overview</SelectItem>
              <SelectItem value="detailed">Detailed Analysis</SelectItem>
              <SelectItem value="trends">Trends</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="glass border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-white/20">
              <SelectItem value="all">All Semesters</SelectItem>
              <SelectItem value="5th">5th Semester</SelectItem>
              <SelectItem value="6th">6th Semester</SelectItem>
              <SelectItem value="7th">7th Semester</SelectItem>
              <SelectItem value="8th">8th Semester</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="bg-green-600 hover:bg-green-700 text-white glow-green">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="mobile-card glow-green">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <p className="text-xl font-bold text-green-400">87.5%</p>
            </div>
            <p className="text-xs text-green-300">Avg Attendance</p>
            <p className="text-xs text-gray-400 mt-1">+2.3% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart2 className="w-5 h-5 text-blue-400 mr-2" />
              <p className="text-xl font-bold text-blue-400">84.2%</p>
            </div>
            <p className="text-xs text-blue-300">Avg Marks</p>
            <p className="text-xs text-gray-400 mt-1">+1.8% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Based on Selected View */}
      {selectedView === "overview" && (
        <>
          {/* Attendance vs Marks Comparison */}
          <Card className="chart-container glow-green">
            <CardHeader>
              <CardTitle className="text-white font-semibold">Attendance vs Internal Marks by Class</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceVsMarksData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="class" stroke="#a5b4fc" />
                  <YAxis stroke="#a5b4fc" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="attendance" fill="#10b981" name="Attendance %" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="marks" fill="#3b82f6" name="Avg Marks %" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Distribution */}
          <Card className="chart-container glow-blue">
            <CardHeader>
              <CardTitle className="text-white font-semibold">Overall Performance Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={performanceDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {performanceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </>
      )}

      {selectedView === "detailed" && (
        <>
          {/* Semester-wise Performance */}
          <Card className="chart-container glow-purple">
            <CardHeader>
              <CardTitle className="text-white font-semibold">Semester-wise Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={semesterPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="semester" stroke="#a5b4fc" />
                  <YAxis stroke="#a5b4fc" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="avgAttendance" fill="#10b981" name="Avg Attendance %" />
                  <Bar dataKey="avgMarks" fill="#3b82f6" name="Avg Marks %" />
                  <Bar dataKey="passRate" fill="#a855f7" name="Pass Rate %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Detailed Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="mobile-card glow-green">
              <CardContent className="p-4 text-center">
                <p className="text-xl font-bold text-green-400">95.0%</p>
                <p className="text-xs text-green-300">Overall Pass Rate</p>
              </CardContent>
            </Card>
            <Card className="mobile-card glow-yellow">
              <CardContent className="p-4 text-center">
                <p className="text-xl font-bold text-yellow-400">23</p>
                <p className="text-xs text-yellow-300">Students at Risk</p>
              </CardContent>
            </Card>
            <Card className="mobile-card glow-purple">
              <CardContent className="p-4 text-center">
                <p className="text-xl font-bold text-purple-400">142</p>
                <p className="text-xs text-purple-300">High Performers</p>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {selectedView === "trends" && (
        <>
          {/* Monthly Trends */}
          <Card className="chart-container glow-cyan">
            <CardHeader>
              <CardTitle className="text-white font-semibold">6-Month Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#a5b4fc" />
                  <YAxis stroke="#a5b4fc" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                    name="Attendance %"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="marks" 
                    stroke="#06b6d4" 
                    strokeWidth={3}
                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
                    name="Marks %"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Trend Insights */}
          <div className="space-y-4">
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-semibold text-white">Positive Trend</p>
                    <p className="text-sm text-green-300">Attendance has improved by 3.5% over the last 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white">Steady Growth</p>
                    <p className="text-sm text-blue-300">Internal marks showing consistent improvement across all subjects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Class-wise Performance Table */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Class-wise Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {attendanceVsMarksData.map((classData, index) => (
              <div key={index} className="glass p-4 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-white">{classData.class}</h3>
                  <Badge variant="outline" className="border-gray-500 text-gray-400">
                    {classData.students} students
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Attendance:</span>
                    <span className={`font-semibold ${
                      classData.attendance >= 85 ? 'text-green-400' : 
                      classData.attendance >= 75 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {classData.attendance}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Marks:</span>
                    <span className={`font-semibold ${
                      classData.marks >= 85 ? 'text-green-400' : 
                      classData.marks >= 75 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {classData.marks}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
