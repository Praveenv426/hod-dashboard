
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, Smile, Paperclip, Users, Search, Plus } from "lucide-react";
import { useState } from "react";

const chatChannels = [
  { id: 1, name: "General Discussion", type: "channel", unread: 3, lastMessage: "Tomorrow's faculty meeting at 2 PM", time: "10:30 AM" },
  { id: 2, name: "CS Department", type: "channel", unread: 0, lastMessage: "New project guidelines uploaded", time: "Yesterday" },
  { id: 3, name: "7th Semester", type: "channel", unread: 5, lastMessage: "Assignment deadline extended", time: "2:15 PM" },
  { id: 4, name: "Faculty Coordination", type: "channel", unread: 1, lastMessage: "Lab schedule changes", time: "11:45 AM" }
];

const directMessages = [
  { id: 5, name: "Dr. Rajesh Kumar", type: "dm", unread: 2, lastMessage: "Can we discuss the ML syllabus?", time: "9:30 AM", status: "online" },
  { id: 6, name: "Prof. Meera Sharma", type: "dm", unread: 0, lastMessage: "Thanks for the feedback", time: "Yesterday", status: "offline" },
  { id: 7, name: "Dr. Amit Patel", type: "dm", unread: 1, lastMessage: "Project evaluation criteria", time: "1:20 PM", status: "online" },
  { id: 8, name: "Rahul Kumar (Student)", type: "dm", unread: 0, lastMessage: "Thank you for the guidance", time: "Monday", status: "offline" }
];

const messages = [
  { id: 1, sender: "Dr. Rajesh Kumar", message: "Good morning everyone! Hope you're all doing well.", time: "9:00 AM", avatar: "RK" },
  { id: 2, sender: "Prof. Meera Sharma", message: "Good morning! Ready for today's faculty meeting.", time: "9:15 AM", avatar: "MS" },
  { id: 3, sender: "You", message: "Good morning! Yes, I have the agenda ready.", time: "9:20 AM", avatar: "SJ" },
  { id: 4, sender: "Dr. Amit Patel", message: "Perfect! Looking forward to discussing the new curriculum changes.", time: "9:25 AM", avatar: "AP" },
  { id: 5, sender: "Prof. Priya Singh", message: "I'll join you all in 5 minutes. Just wrapping up a student consultation.", time: "9:55 AM", avatar: "PS" }
];

export function Chat() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle send message logic here
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const allChats = [...chatChannels, ...directMessages];
  const selectedChatData = allChats.find(chat => chat.id === selectedChat);

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <MessageSquare className="w-8 h-8 text-sky-400 mr-3" />
          <h1 className="text-3xl font-bold text-white">Chat</h1>
        </div>
        <p className="text-sky-300 font-light">Department communication hub</p>
      </div>

      {/* Search and New Chat */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input 
            placeholder="Search conversations..." 
            className="pl-10 glass border-white/20 text-white placeholder-gray-400"
          />
        </div>
        
        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white glow-sky">
          <Plus className="w-4 h-4 mr-2" />
          Start New Conversation
        </Button>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 gap-4">
        {/* Chat List */}
        <Card className="chart-container">
          <CardHeader>
            <CardTitle className="text-white font-semibold flex items-center">
              <Users className="w-5 h-5 text-sky-400 mr-2" />
              Channels & Direct Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 max-h-64 overflow-y-auto">
            {/* Channels */}
            <div className="mb-4">
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Channels</p>
              {chatChannels.map((channel) => (
                <div
                  key={channel.id}
                  onClick={() => setSelectedChat(channel.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                    selectedChat === channel.id ? 'glass glow-sky' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">#</span>
                        <p className="font-semibold text-white text-sm">{channel.name}</p>
                        {channel.unread > 0 && (
                          <Badge variant="outline" className="border-sky-500 text-sky-400 text-xs">
                            {channel.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 truncate mt-1">{channel.lastMessage}</p>
                    </div>
                    <p className="text-xs text-gray-500">{channel.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Messages */}
            <div>
              <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Direct Messages</p>
              {directMessages.map((dm) => (
                <div
                  key={dm.id}
                  onClick={() => setSelectedChat(dm.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                    selectedChat === dm.id ? 'glass glow-sky' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-sky-600 text-white text-xs">
                          {dm.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-800 ${
                        dm.status === 'online' ? 'bg-green-400' : 'bg-gray-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-white text-sm">{dm.name}</p>
                        <div className="flex items-center space-x-2">
                          {dm.unread > 0 && (
                            <Badge variant="outline" className="border-sky-500 text-sky-400 text-xs">
                              {dm.unread}
                            </Badge>
                          )}
                          <p className="text-xs text-gray-500">{dm.time}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 truncate">{dm.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card className="chart-container">
          <CardHeader className="border-b border-white/10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white font-semibold">
                {selectedChatData?.type === 'channel' ? `# ${selectedChatData.name}` : selectedChatData?.name}
              </CardTitle>
              {selectedChatData?.type === 'dm' && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs text-green-400">Online</span>
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Messages */}
            <div className="max-h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-indigo-600 text-white text-xs">
                      {message.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-semibold text-white text-sm">{message.sender}</p>
                      <p className="text-xs text-gray-400">{message.time}</p>
                    </div>
                    <p className="text-gray-300 text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gray-600 text-white text-xs">...</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm italic">Someone is typing...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="border-t border-white/10 p-4">
              <div className="flex space-x-2 items-end">
                <div className="flex-1 relative">
                  <Input 
                    placeholder="Type a message..."
                    className="glass border-white/20 text-white placeholder-gray-400 pr-20"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-sky-600 hover:bg-sky-700 text-white h-10 w-10 p-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Online Users */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white font-semibold text-sm">Online Now</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-3 overflow-x-auto">
            {directMessages.filter(dm => dm.status === 'online').map((user) => (
              <div key={user.id} className="flex flex-col items-center space-y-1 min-w-0">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-sky-600 text-white text-sm">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-800"></div>
                </div>
                <p className="text-xs text-gray-300 truncate max-w-16">{user.name.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
