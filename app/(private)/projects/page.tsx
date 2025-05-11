import { KanbanBoard, TicketDialog } from "@/components/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-12 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Project Board</h1>
        <TicketDialog />
      </div>
      <KanbanBoard />
    </>
  );
}
