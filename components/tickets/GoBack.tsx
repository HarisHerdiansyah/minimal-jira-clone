"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <div
      className="flex gap-2 mb-3 cursor-pointer"
      onClick={() => router.back()}
    >
      <ChevronLeft className="text-muted-foreground" />
      <p className="text-muted-foreground hover:underline">Back to Board</p>
    </div>
  );
}
