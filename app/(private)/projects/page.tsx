import KanbanBoard from "@/components/projects/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-12 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Project Board</h1>
        <Button className="cursor-pointer">
          <Plus />
          Create Issue
        </Button>
      </div>
      <KanbanBoard />
    </>
  );
}
