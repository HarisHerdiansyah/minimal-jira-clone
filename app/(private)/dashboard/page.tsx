import { ProjectCard, ProjectDialog } from "@/components/dashboard";

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
    <div className="px-4 md:px-6 lg:px-12 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ProjectDialog />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-6">
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
    </div>
  );
}
