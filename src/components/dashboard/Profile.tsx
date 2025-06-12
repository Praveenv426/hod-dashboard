
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Edit, Save, Mail, Phone, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { useState } from "react";

const profileData = {
  name: "Dr. Sarah Johnson",
  title: "Head of Department",
  department: "Computer Science Engineering",
  email: "sarah.johnson@university.edu",
  phone: "+91 9876543210",
  address: "Department of CSE, University Campus, Bangalore - 560001",
  joinDate: "August 15, 2018",
  experience: "12 years",
  qualification: "Ph.D. in Computer Science",
  specialization: "Machine Learning, Data Science, AI",
  about: "Experienced academic leader with over 12 years in computer science education and research. Specialized in machine learning and artificial intelligence with a passion for student development and innovative teaching methodologies."
};

const achievements = [
  { title: "Best HOD Award", year: "2023", description: "Outstanding leadership in department management" },
  { title: "Research Excellence", year: "2022", description: "Published 15+ papers in international journals" },
  { title: "Teaching Innovation", year: "2021", description: "Implemented new curriculum for AI/ML courses" },
  { title: "Student Mentorship", year: "2020", description: "Guided 50+ students to successful placements" }
];

const statistics = [
  { label: "Years of Experience", value: "12+", icon: Calendar },
  { label: "Students Mentored", value: "500+", icon: BookOpen },
  { label: "Research Papers", value: "25", icon: Award },
  { label: "Department Rank", value: "#3", icon: Award }
];

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profileData);

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile:", editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profileData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Settings className="w-8 h-8 text-gray-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Profile</h1>
        </div>
        <p className="text-gray-300 font-light">Manage your profile information</p>
      </div>

      {/* Profile Header */}
      <Card className="chart-container glow">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-indigo-600 text-white text-2xl font-bold">
                  SJ
                </AvatarFallback>
              </Avatar>
              <Button 
                size="sm" 
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-blue-600 hover:bg-blue-700"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
              <p className="text-indigo-300 font-medium">{profileData.title}</p>
              <p className="text-gray-400 text-sm">{profileData.department}</p>
            </div>

            <div className="flex space-x-2">
              <Badge variant="outline" className="border-indigo-500 text-indigo-400">
                {profileData.experience} Experience
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                {profileData.qualification}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4">
        {statistics.map((stat, index) => (
          <Card key={index} className="mobile-card glow-blue">
            <CardContent className="p-4 text-center">
              <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-xs text-blue-300">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Controls */}
      <div className="flex space-x-2">
        {!isEditing ? (
          <Button 
            onClick={() => setIsEditing(true)}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white glow"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        ) : (
          <>
            <Button 
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white glow-green"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button 
              onClick={handleCancel}
              variant="outline"
              className="flex-1 glass border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              Cancel
            </Button>
          </>
        )}
      </div>

      {/* Personal Information */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Full Name</label>
              {isEditing ? (
                <Input 
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                  className="glass border-white/20 text-white"
                />
              ) : (
                <div className="flex items-center space-x-3 p-3 glass rounded-lg">
                  <p className="text-white">{profileData.name}</p>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">Email Address</label>
              {isEditing ? (
                <Input 
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                  className="glass border-white/20 text-white"
                />
              ) : (
                <div className="flex items-center space-x-3 p-3 glass rounded-lg">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <p className="text-white">{profileData.email}</p>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">Phone Number</label>
              {isEditing ? (
                <Input 
                  value={editedProfile.phone}
                  onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                  className="glass border-white/20 text-white"
                />
              ) : (
                <div className="flex items-center space-x-3 p-3 glass rounded-lg">
                  <Phone className="w-4 h-4 text-green-400" />
                  <p className="text-white">{profileData.phone}</p>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">Address</label>
              {isEditing ? (
                <Textarea 
                  value={editedProfile.address}
                  onChange={(e) => setEditedProfile({...editedProfile, address: e.target.value})}
                  className="glass border-white/20 text-white min-h-[80px]"
                />
              ) : (
                <div className="flex items-center space-x-3 p-3 glass rounded-lg">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <p className="text-white">{profileData.address}</p>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">About Me</label>
              {isEditing ? (
                <Textarea 
                  value={editedProfile.about}
                  onChange={(e) => setEditedProfile({...editedProfile, about: e.target.value})}
                  className="glass border-white/20 text-white min-h-[100px]"
                />
              ) : (
                <div className="p-3 glass rounded-lg">
                  <p className="text-white text-sm leading-relaxed">{profileData.about}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle className="text-white font-semibold">Professional Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <span className="text-gray-300">Department:</span>
              <span className="text-white font-semibold">{profileData.department}</span>
            </div>
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <span className="text-gray-300">Join Date:</span>
              <span className="text-white font-semibold">{profileData.joinDate}</span>
            </div>
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <span className="text-gray-300">Qualification:</span>
              <span className="text-white font-semibold">{profileData.qualification}</span>
            </div>
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <span className="text-gray-300">Specialization:</span>
              <span className="text-white font-semibold">{profileData.specialization}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="chart-container">
        <CardHeader>
          <CardTitle className="text-white font-semibold flex items-center">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            Achievements & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass p-4 rounded-xl hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">{achievement.title}</h3>
                <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                  {achievement.year}
                </Badge>
              </div>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
