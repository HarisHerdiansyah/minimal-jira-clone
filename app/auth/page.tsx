"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm, RegisterForm } from "@/components/auth";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12 dark:bg-slate-900">
      <div className="w-full max-w-md px-4">
        <Tabs
          defaultValue="login"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm onSuccess={() => {}} />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm onSuccess={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
