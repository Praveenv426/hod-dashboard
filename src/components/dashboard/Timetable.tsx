
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Edit, Save, Clock, Users } from "lucide-react";
import { useState } from "react";

const timeSlots = [
  "09:00-10:00",
  "10:00-11:00", 
  "11:15-12:15",
  "12:15-01:15",
  "02:15-03:15",
  "03:15-04:15",
  "04:30-05:30"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const initialTimetable = {
  "Monday": {
    "09:00-10:00": { subject: "Machine Learning", faculty: "Dr. Rajesh Kumar", room: "CS-301" },
    "10:00-11:00": { subject: "Database Systems", faculty: "Prof. Meera Sharma", room: "CS-302" },
    "11:15-12:15": { subject: "Web Technologies", faculty: "Dr. Amit Patel", room: "CS-301" },
    "12:15-01:15": { subject: "Lunch Break", faculty: "", room: "" },
    "02:15-03:15": { subject: "Software Engineering", faculty: "Prof. Priya Singh", room: "CS-303" },
    "03:15-04:15": { subject: "Computer Networks", faculty: "Dr. Vikram Reddy", room: "CS-302" },
    "04:30-05:30": { subject: "Tutorial", faculty: "All Faculty", room: "CS-301" }
  },
  "Tuesday": {
    "09:00-10:00": { subject: "Artificial Intelligence", faculty: "Dr. Anjali Gupta", room: "CS-304" },
    "10:00-11:00": { subject: "Cloud Computing", faculty: "Dr. Vikram Reddy", room: "CS-301" },
    "11:15-12:15": { subject: "Mobile Computing", faculty: "Prof. Priya Singh", room: "CS-302" },
    "12:15-01:15": { subject: "Lunch Break", faculty: "", room: "" },
    "02:15-03:15": { subject: "Machine Learning Lab", faculty: "Dr. Rajesh Kumar", room: "CS-Lab1" },
    "03:15-04:15": { subject: "Machine Learning Lab", faculty: "Dr. Rajesh Kumar", room: "CS-Lab1" },
    "04:30-05:30": { subject: "Project Work", faculty: "Guide Teachers", room: "Various" }
  },
  "Wednesday": {
    "09:00-10:00": { subject: "Database Systems", faculty: "Prof. Meera Sharma", room: "CS-301" },
    "10:00-11:00": { subject: "Software Engineering", faculty: "Prof. Priya Singh", room: "CS-302" },
    "11:15-12:15": { subject: "Computer Networks", faculty: "Dr. Vikram Reddy", room: "CS-303" },
    "12:15-01:15": { subject: "Lunch Break", faculty: "", room: "" },
    "02:15-03:15": { subject: "Web Technologies Lab", faculty: "Dr. Amit Patel", room: "CS-Lab2" },
    "03:15-04:15": { subject: "Web Technologies Lab", faculty: "Dr. Amit Patel", room: "CS-Lab2" },
    "04:30-05:30": { subject: "Seminar", faculty: "HOD", room: "Seminar Hall" }
  },
  "Thursday": {
    "09:00-10:00": { subject: "Machine Learning", faculty: "Dr. Rajesh Kumar", room: "CS-301" },
    "10:00-11:00": { subject: "Artificial Intelligence", faculty: "Dr. Anjali Gupta", room: "CS-302" },
    "11:15-12:15": { subject: "Cloud Computing", faculty: "Dr. Vikram Reddy", room: "CS-301" },
    "12:15-01:15": { subject: "Lunch Break", faculty: "", room: "" },
    "02:15-03:15": { subject: "Database Lab", faculty: "Prof. Meera Sharma", room: "CS-Lab1" },
    "03:15-04:15": { subject: "Database Lab", faculty: "Prof. Meera Sharma", room: "CS-Lab1" },
    "04:30-05:30": { subject: "Industry Expert Talk", faculty: "Guest Speaker", room: "Auditorium" }
  },
  "Friday": {
    "09:00-10:00": { subject: "Software Engineering", faculty: "Prof. Priya Singh", room: "CS-301" },
    "10:00-11:00": { subject: "Mobile Computing", faculty: "Prof. Priya Singh", room: "CS-302" },
    "11:15-12:15": { subject: "Computer Networks", faculty: "Dr. Vikram Reddy", room: "CS-303" },
    "12:15-01:15": { subject: "Lunch Break", faculty: "", room: "" },
    "02:15-03:15": { subject: "Project Presentation", faculty: "All Faculty", room: "CS-301" },
    "03:15-04:15": { subject: "Project Presentation", faculty: "All Faculty", room: "CS-301" },
    "04:30-05:30": { subject: "Faculty Meeting", faculty: "All Faculty", room: "Conference Room" }
  }
};

export function Timetable() {
  const [timetable, setTimetable] = useState(initialTimetable);
  const [isEditMode, setIsEditMode] = useState(false);

  const getSlotColor = (subject: string) => {
    if (subject.includes("Lab")) return "bg-purple-900/30 border-purple-500/50";
    if (subject.includes("Break")) return "bg-gray-900/30 border-gray-500/50";
    if (subject.includes("Tutorial") || subject.includes("Seminar")) return "bg-teal-900/30 border-teal-500/50";
    if (subject.includes("Project")) return "bg-orange-900/30 border-orange-500/50";
    return "bg-blue-900/30 border-blue-500/50";
  };

  const getTextColor = (subject: string) => {
    if (subject.includes("Lab")) return "text-purple-300";
    if (subject.includes("Break")) return "text-gray-400";
    if (subject.includes("Tutorial") || subject.includes("Seminar")) return "text-teal-300";
    if (subject.includes("Project")) return "text-orange-300";
    return "text-blue-300";
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-indigo-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Timetable</h1>
        </div>
        <p className="text-indigo-300 font-light">Weekly class schedule - 7th Semester CSE</p>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Badge variant="outline" className="border-blue-500 text-blue-400">
            7th Semester
          </Badge>
          <Badge variant="outline" className="border-teal-500 text-teal-400">
            Section A
          </Badge>
        </div>
        
        <Button 
          onClick={() => setIsEditMode(!isEditMode)}
          className={`${isEditMode ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white`}
        >
          {isEditMode ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              Edit Mode
            </>
          )}
        </Button>
      </div>

      {/* Timetable Grid */}
      <Card className="chart-container overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Header Row */}
              <div className="grid grid-cols-6 border-b border-white/10">
                <div className="p-4 border-r border-white/10">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span className="font-semibold text-white">Time</span>
                  </div>
                </div>
                {days.map((day) => (
                  <div key={day} className="p-4 border-r border-white/10 last:border-r-0">
                    <p className="font-semibold text-white text-center">{day}</p>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {timeSlots.map((slot) => (
                <div key={slot} className="grid grid-cols-6 border-b border-white/10 last:border-b-0">
                  <div className="p-4 border-r border-white/10 bg-slate-800/50">
                    <p className="text-sm font-medium text-indigo-300">{slot}</p>
                  </div>
                  {days.map((day) => {
                    const classData = timetable[day]?.[slot];
                    return (
                      <div key={`${day}-${slot}`} className="p-2 border-r border-white/10 last:border-r-0">
                        {classData && (
                          <div className={`p-3 rounded-lg border ${getSlotColor(classData.subject)} hover:scale-105 transition-transform cursor-pointer`}>
                            <p className={`font-semibold text-xs ${getTextColor(classData.subject)}`}>
                              {classData.subject}
                            </p>
                            {classData.faculty && (
                              <p className="text-xs text-gray-400 mt-1">{classData.faculty}</p>
                            )}
                            {classData.room && (
                              <p className="text-xs text-gray-500 mt-1">{classData.room}</p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-blue-900/50 border border-blue-500/50"></div>
              <span className="text-sm text-gray-300">Theory Classes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-purple-900/50 border border-purple-500/50"></div>
              <span className="text-sm text-gray-300">Lab Sessions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-teal-900/50 border border-teal-500/50"></div>
              <span className="text-sm text-gray-300">Tutorials/Seminars</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-orange-900/50 border border-orange-500/50"></div>
              <span className="text-sm text-gray-300">Project Work</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-blue-400">28</p>
            <p className="text-xs text-blue-300">Theory Hours</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-purple">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-purple-400">12</p>
            <p className="text-xs text-purple-300">Lab Hours</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-teal">
          <CardContent className="p-4 text-center">
            <p className="text-xl font-bold text-teal-400">5</p>
            <p className="text-xs text-teal-300">Special Sessions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
