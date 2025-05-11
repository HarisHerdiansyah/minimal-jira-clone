import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddMemberDialog from "./AddMemberDialog";
import DeleteMemberDialog from "./DeleteMemberDialog";
import EditMemberDialog from "./EditMemberDialog";

export default function ProjectMember() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Team Member</CardTitle>
          <AddMemberDialog />
        </div>
      </CardHeader>
      <CardContent>
        <Table className="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>dummy@gmail.com</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Joined</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell className="space-x-4">
                <EditMemberDialog />
                <DeleteMemberDialog />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
