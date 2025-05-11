import { ProjectDetailForm, ProjectMember } from "@/components/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectDetail() {
  return (
    <div className="px-4 md:px-6 lg:px-12 py-6">
      <h1 className="text-3xl font-semibold">Project Detail</h1>
      <Tabs defaultValue="information" className="my-8">
        <TabsList>
          <TabsTrigger value="information">Information</TabsTrigger>
          <TabsTrigger value="member">Member</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <ProjectDetailForm />
        </TabsContent>
        <TabsContent value="member">
          <ProjectMember />
        </TabsContent>
      </Tabs>
    </div>
  );
}
