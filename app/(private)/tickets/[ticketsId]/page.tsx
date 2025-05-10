import {
  TicketComment,
  TicketDescription,
  TicketHeader,
  TicketSidebar,
} from "@/components/tickets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

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
  const ticket = ticketData;

  return (
    <main className="flex-1 bg-slate-50 dark:bg-slate-900">
      <div className="container py-6">
        <TicketHeader ticket={ticket} />

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="attachments">Attachments</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <TicketDescription description={ticket.description} />
                <Separator className="my-6" />
                <TicketComment comments={ticket.comments} />
              </TabsContent>
              <TabsContent value="activity">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-medium">Activity Log</h3>
                  <p className="text-sm text-muted-foreground">
                    This would show a chronological history of all changes and
                    updates to this ticket.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="attachments">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-medium">Attachments</h3>
                  <ul className="mt-4 space-y-3">
                    {ticket.attachments.map((attachment) => (
                      <li
                        key={attachment.name}
                        className="flex items-center justify-between rounded-md border p-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {attachment.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({attachment.size})
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(attachment.uploaded).toLocaleDateString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="md:col-span-1">
            <TicketSidebar ticket={ticket} />
          </div>
        </div>
      </div>
    </main>
  );
}
