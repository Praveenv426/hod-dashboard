
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Edit, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const academicStructure = [
  {
    semester: "5th Semester",
    subjects: [
      { code: "CS501", name: "Database Management Systems", credits: 4, section: "A" },
      { code: "CS502", name: "Computer Networks", credits: 4, section: "A" },
      { code: "CS503", name: "Software Engineering", credits: 3, section: "A" },
      { code: "CS504", name: "Operating Systems", credits: 4, section: "A" },
      { code: "CS505", name: "Theory of Computation", credits: 3, section: "A" },
    ]
  },
  {
    semester: "6th Semester",
    subjects: [
      { code: "CS601", name: "Compiler Design", credits: 4, section: "A" },
      { code: "CS602", name: "Web Technologies", credits: 3, section: "A" },
      { code: "CS603", name: "Machine Learning", credits: 4, section: "A" },
      { code: "CS604", name: "Cryptography", credits: 3, section: "A" },
      { code: "CS605", name: "Mobile Computing", credits: 3, section: "A" },
    ]
  },
  {
    semester: "7th Semester",
    subjects: [
      { code: "CS701", name: "Artificial Intelligence", credits: 4, section: "A" },
      { code: "CS702", name: "Cloud Computing", credits: 3, section: "A" },
      { code: "CS703", name: "Data Mining", credits: 4, section: "A" },
      { code: "CS704", name: "Information Security", credits: 3, section: "A" },
      { code: "CS705", name: "Big Data Analytics", credits: 4, section: "A" },
    ]
  },
  {
    semester: "8th Semester",
    subjects: [
      { code: "CS801", name: "Project Work", credits: 6, section: "A" },
      { code: "CS802", name: "Blockchain Technology", credits: 3, section: "A" },
      { code: "CS803", name: "Internet of Things", credits: 3, section: "A" },
      { code: "CS804", name: "Digital Image Processing", credits: 4, section: "A" },
    ]
  }
];

export function AcademicStructure() {
  const [openSemesters, setOpenSemesters] = useState<string[]>(["5th Semester"]);

  const toggleSemester = (semester: string) => {
    setOpenSemesters(prev => 
      prev.includes(semester) 
        ? prev.filter(s => s !== semester)
        : [...prev, semester]
    );
  };

  const getTotalCredits = (subjects: any[]) => {
    return subjects.reduce((total, subject) => total + subject.credits, 0);
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Academic Structure</h1>
        </div>
        <p className="text-purple-300 font-light">Semester and subject management</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="mobile-card glow-purple">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">4</p>
            <p className="text-sm text-purple-300">Semesters</p>
          </CardContent>
        </Card>
        <Card className="mobile-card glow-blue">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">18</p>
            <p className="text-sm text-blue-300">Total Subjects</p>
          </CardContent>
        </Card>
      </div>

      {/* Add New Section Button */}
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white glow-purple">
        <Plus className="w-4 h-4 mr-2" />
        Add New Subject
      </Button>

      {/* Academic Structure */}
      <div className="space-y-4">
        {academicStructure.map((semesterData, index) => (
          <Card key={index} className="chart-container">
            <Collapsible 
              open={openSemesters.includes(semesterData.semester)}
              onOpenChange={() => toggleSemester(semesterData.semester)}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-white/5 transition-colors rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {openSemesters.includes(semesterData.semester) ? (
                        <ChevronDown className="w-5 h-5 text-purple-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-purple-400" />
                      )}
                      <CardTitle className="text-white font-semibold">
                        {semesterData.semester}
                      </CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="border-purple-500 text-purple-400">
                        {semesterData.subjects.length} subjects
                      </Badge>
                      <Badge variant="outline" className="border-blue-500 text-blue-400">
                        {getTotalCredits(semesterData.subjects)} credits
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {semesterData.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="glass p-4 rounded-xl hover:scale-105 transition-transform">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{subject.name}</h3>
                            <p className="text-sm text-gray-300">{subject.code}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="border-indigo-500 text-indigo-400">
                              {subject.credits} credits
                            </Badge>
                            <Badge variant="outline" className="border-teal-500 text-teal-400">
                              Sec {subject.section}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 glass border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="glass border-red-500/30 text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card className="mobile-card glow">
        <CardHeader>
          <CardTitle className="text-white font-semibold text-center">Academic Summary</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xl font-bold text-indigo-400">66</p>
              <p className="text-xs text-gray-400">Total Credits</p>
            </div>
            <div>
              <p className="text-xl font-bold text-purple-400">18</p>
              <p className="text-xs text-gray-400">Subjects</p>
            </div>
            <div>
              <p className="text-xl font-bold text-teal-400">4</p>
              <p className="text-xs text-gray-400">Semesters</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
