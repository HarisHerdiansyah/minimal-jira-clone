"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar,
  ChevronDown,
  ChevronsUp,
  ChevronUp,
  Clock,
  Minus,
} from "lucide-react";

interface TicketSidebarProps {
  ticket: {
    priority: string;
    type: string;
    reporter: {
      name: string;
      email: string;
      avatar: string;
    };
    assignee: {
      name: string;
      email: string;
      avatar: string;
    };
    created: string;
    updated: string;
    labels: string[];
    watchers: number;
    epic: string;
    sprint: string;
    storyPoints: number;
  };
}

export default function TicketSidebar({ ticket }: TicketSidebarProps) {
  const [priority, setPriority] = useState(ticket.priority);
  const [assignee, setAssignee] = useState(ticket.assignee);

  const priorityIcons = {
    Critical: <ChevronsUp className="h-4 w-4 text-red-500" />,
    High: <ChevronUp className="h-4 w-4 text-orange-500" />,
    Medium: <Minus className="h-4 w-4 text-yellow-500" />,
    Low: <ChevronDown className="h-4 w-4 text-blue-500" />,
  };

  const priorityOptions = ["Critical", "High", "Medium", "Low"];

  // Mock team members for assignee dropdown
  const teamMembers = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <Card>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Assignee</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 h-auto p-1 cursor-pointer"
                  >
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={assignee.avatar || "/placeholder.svg"}
                        alt={assignee.name}
                      />
                      <AvatarFallback>{assignee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{assignee.name}</span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {teamMembers.map((member) => (
                    <DropdownMenuItem
                      key={member.email}
                      onClick={() => setAssignee(member)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                        />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{member.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Reporter</span>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={ticket.reporter.avatar || "/placeholder.svg"}
                    alt={ticket.reporter.name}
                  />
                  <AvatarFallback>
                    {ticket.reporter.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{ticket.reporter.name}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Priority</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 h-auto p-1 cursor-pointer"
                  >
                    {priorityIcons[priority as keyof typeof priorityIcons]}
                    <span className="text-sm">{priority}</span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {priorityOptions.map((option) => (
                    <DropdownMenuItem
                      key={option}
                      onClick={() => setPriority(option)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      {priorityIcons[option as keyof typeof priorityIcons]}
                      <span>{option}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Dates</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Created</span>
              </div>
              <span className="text-sm">
                {new Date(ticket.created).toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Updated</span>
              </div>
              <span className="text-sm">
                {new Date(ticket.updated).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
