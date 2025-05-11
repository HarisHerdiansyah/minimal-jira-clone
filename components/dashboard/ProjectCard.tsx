import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, Users } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  totalTickets: number;
  totalMembers: number;
  status?: "active" | "completed" | "on-hold";
}

export default function ProjectCard({
  id,
  title,
  totalTickets,
  totalMembers,
  status = "active",
}: ProjectCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "on-hold":
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/projects/${id}`}>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            {status && (
              <Badge variant="outline" className={statusColors[status]}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Ticket className="h-4 w-4" />
              <span>{totalTickets} tickets</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{totalMembers} members</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
