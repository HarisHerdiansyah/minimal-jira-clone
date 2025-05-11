import { TicketComment, TicketSidebar } from "@/components/tickets";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const ticketData = {
  id: "PROJ-123",
  title: "Implement user authentication flow",
  status: "In Progress",
  priority: "High",
  type: "Feature",
  reporter: {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  assignee: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  created: "2023-05-10T09:43:51Z",
  updated: "2023-05-15T14:22:07Z",
  description: `
    ## Objective
    Implement a secure user authentication flow that includes registration, login, password reset, and account verification.
    
    ## Requirements
    - User registration with email verification
    - Login with email and password
    - "Remember me" functionality
    - Password reset flow
    - OAuth integration with Google and GitHub
    
    ## Acceptance Criteria
    - All forms must have proper validation
    - Security best practices must be followed
    - Must be responsive on all devices
    - Must pass all automated security tests
  `,
  comments: [
    {
      id: "1",
      author: {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "I've started working on the registration form. Will push initial code by EOD.",
      created: "2023-05-12T10:15:22Z",
    },
    {
      id: "2",
      author: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "Make sure to implement CSRF protection and rate limiting.",
      created: "2023-05-12T11:32:45Z",
    },
    {
      id: "3",
      author: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "I've created a design for the auth pages in Figma. Please check and provide feedback.",
      created: "2023-05-13T09:05:18Z",
    },
  ],
  labels: ["authentication", "security", "frontend"],
  watchers: 5,
  epic: "User Management",
  sprint: "Sprint 4",
  storyPoints: 8,
  attachments: [
    {
      name: "auth-flow-diagram.png",
      size: "245 KB",
      uploaded: "2023-05-11T15:22:07Z",
    },
    {
      name: "auth-requirements.pdf",
      size: "1.2 MB",
      uploaded: "2023-05-10T09:45:12Z",
    },
  ],
};

export default function TicketDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-6">
      <div className="flex gap-2 mb-3 cursor-pointer">
        <ChevronLeft className="text-muted-foreground" />
        <p className="text-muted-foreground hover:underline">Back to Board</p>
      </div>
      <h1 className="text-3xl font-semibold">MEA Project</h1>
      <div className="my-16 grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>
              <h2 className="text-2xl font-semibold">
                [MEP-123] Project Subscription API
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3>Description:</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              et molestias tempora nam repellat doloremque illo aperiam. Odio,
              praesentium dignissimos? Repudiandae assumenda distinctio
              voluptate cupiditate rerum voluptatum provident, delectus odit?
            </p>
          </CardContent>
        </Card>
        <TicketSidebar ticket={ticketData} />
        <TicketComment comments={ticketData.comments} />
      </div>
    </div>
  );
}
