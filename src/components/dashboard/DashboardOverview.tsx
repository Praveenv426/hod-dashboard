
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, UserCheck, Calendar, TrendingUp, Clock, Bell } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const attendanceData = [
  { name: 'Week 1', faculty: 95, students: 88 },
  { name: 'Week 2', faculty: 92, students: 85 },
  { name: 'Week 3', faculty: 98, students: 90 },
  { name: 'Week 4', faculty: 94, students: 87 },
];

const leaveRequests = [
  { id: 1, name: "Dr. John Smith", date: "2024-01-15", reason: "Medical", status: "pending" },
  { id: 2, name: "Prof. Emily Chen", date: "2024-01-18", reason: "Conference", status: "pending" },
  { id: 3, name: "Dr. Michael Brown", date: "2024-01-20", reason: "Personal", status: "approved" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-indigo-300 font-light">Welcome back, Dr. Sarah Johnson</p>
      </div>

      {/* Overview Cards */}
      <div className="space-y-4">
        <Card className="mobile-card glow-blue">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-300 mb-1">Total Students</p>
                <p className="text-3xl font-bold text-white">1,247</p>
                <p className="text-xs text-blue-400 mt-1">+12% from last month</p>
              </div>
              <Users className="w-12 h-12 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="mobile-card glow-teal">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-teal-300 mb-1">Total Faculty</p>
                <p className="text-3xl font-bold text-white">89</p>
                <p className="text-xs text-teal-400 mt-1">+3% from last month</p>
              </div>
              <UserCheck className="w-12 h-12 text-teal-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="mobile-card glow-purple">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-300 mb-1">Upcoming Events</p>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-xs text-purple-400 mt-1">This week</p>
              </div>
              <Calendar className="w-12 h-12 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Trends */}
      <Card className="chart-container animate-slideInLeft">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Attendance Trends</CardTitle>
          <p className="text-indigo-300 text-sm">Faculty vs Student attendance (last 4 weeks)</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#a5b4fc" />
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
                dataKey="faculty" 
                stroke="#14b8a6" 
                strokeWidth={3}
                dot={{ fill: '#14b8a6', strokeWidth: 2, r: 6 }}
                name="Faculty (%)"
              />
              <Line 
                type="monotone" 
                dataKey="students" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                name="Students (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Leave Requests */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Leave Requests</CardTitle>
          <p className="text-indigo-300 text-sm">Pending faculty leave requests</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {leaveRequests.map((request) => (
            <div key={request.id} className="glass p-4 rounded-xl flex items-center justify-between">
              <div className="flex-1">
                <p className="font-semibold text-white">{request.name}</p>
                <p className="text-sm text-indigo-300">{request.date} • {request.reason}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="outline" 
                  className={`
                    ${request.status === 'pending' ? 'border-yellow-500 text-yellow-400' : ''}
                    ${request.status === 'approved' ? 'border-green-500 text-green-400' : ''}
                    ${request.status === 'rejected' ? 'border-red-500 text-red-400' : ''}
                  `}
                >
                  {request.status}
                </Badge>
                {request.status === 'pending' && (
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline" className="h-8 text-green-400 border-green-500/30 hover:bg-green-500/10">
                      ✓
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 text-red-400 border-red-500/30 hover:bg-red-500/10">
                      ✗
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="mobile-card">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
            <Users className="w-4 h-4 mr-2" />
            View All Students
          </Button>
          <Button variant="outline" className="w-full justify-start glass border-teal-500/30 text-teal-400 hover:bg-teal-500/10">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
          <Button variant="outline" className="w-full justify-start glass border-pink-500/30 text-pink-400 hover:bg-pink-500/10">
            <Bell className="w-4 h-4 mr-2" />
            Send Notice
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
