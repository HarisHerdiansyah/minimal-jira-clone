"use client";

import { useDroppable } from "@dnd-kit/core";
import TicketCard from "./TicketCard";

type TicketContainer = {
  id: string;
  label: string;
  tickets: { id: string; title: string; statusId: string }[];
};

export default function TicketContainer({
  id,
  label,
  tickets,
}: TicketContainer) {
  const { setNodeRef } = useDroppable({
    id,
    data: {
      statusId: id,
      label,
    },
  });

  return (
    <div ref={setNodeRef} className="bg-gray-200 p-2 h-screen space-y-2">
      <div className="bg-primary w-full p-2">
        <p className="text-white font-semibold">{label}</p>
      </div>
      {tickets.map((tx) => (
        <TicketCard
          key={tx.id}
          id={tx.id}
          title={tx.title}
          statusId={tx.statusId}
        />
      ))}
    </div>
  );
}
