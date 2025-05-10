import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function ProfileHeader() {
  // Mock user data - in a real app, this would come from your auth system
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "",
    initials: "JD",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Card className="p-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src={user.avatarUrl || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback className="text-lg">{user.initials}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-1">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>

          <Button variant="outline" size="sm" className="gap-1">
            <Upload className="h-4 w-4" />
            Change Avatar
          </Button>
        </div>
      </Card>
    </div>
  );
}
