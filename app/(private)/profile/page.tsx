import { Separator } from "@/components/ui/separator";
import {
  ProfileHeader,
  PersonalInfoForm,
  ChangePasswordForm,
} from "@/components/profile";

export default function ProfilePage() {
  return (
    <div className="container max-w-4xl py-10 mx-auto">
      <ProfileHeader />
      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p className="text-sm text-muted-foreground">
            Update your personal details here.
          </p>
          <Separator className="my-4" />
          <PersonalInfoForm />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="text-sm text-muted-foreground">
            Update your password here.
          </p>
          <Separator className="my-4" />
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
