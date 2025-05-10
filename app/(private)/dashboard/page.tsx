import { ProjectCard } from "@/components/dashboard";

const projects = [
  {
    id: "1",
    title: "Website Redesign",
    description:
      "Redesign the company website with new branding and improved user experience.",
    totalTickets: 24,
    totalMembers: 5,
    status: "active" as const,
  },
  {
    id: "2",
    title: "Mobile App Development",
    description:
      "Create a new mobile app for both iOS and Android platforms with React Native.",
    totalTickets: 32,
    totalMembers: 8,
    status: "active" as const,
  },
  {
    id: "3",
    title: "CRM Integration",
    description:
      "Integrate our existing systems with the new CRM platform for better customer management.",
    totalTickets: 18,
    totalMembers: 4,
    status: "on-hold" as const,
  },
  {
    id: "4",
    title: "Marketing Campaign",
    description:
      "Plan and execute Q3 marketing campaign across digital and traditional channels.",
    totalTickets: 12,
    totalMembers: 6,
    status: "completed" as const,
  },
  {
    id: "5",
    title: "Data Migration",
    description:
      "Migrate data from legacy systems to the new cloud-based platform.",
    totalTickets: 15,
    totalMembers: 3,
    status: "active" as const,
  },
  {
    id: "6",
    title: "Security Audit",
    description:
      "Conduct a comprehensive security audit of all systems and implement recommendations.",
    totalTickets: 9,
    totalMembers: 2,
    status: "active" as const,
  },
];

export default function DashboardPage() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Projects Dashboard</h1>
        <p className="text-muted-foreground">
          Manage and monitor your active projects
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            totalTickets={project.totalTickets}
            totalMembers={project.totalMembers}
            status={project.status}
          />
        ))}
      </div>
    </main>
  );
}
