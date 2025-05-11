"use client";

import { useDraggable } from "@dnd-kit/core";

type TicketCard = {
  id: string;
  title: string;
  statusId: string;
};

export default function TicketCard({ id, title, statusId }: TicketCard) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      ticketId: id,
      title,
      statusId,
    },
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      className="w-full h-[150px] bg-white p-3 rounded-md flex flex-col justify-between cursor-grab"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <h3 className="line-clamp-2 hover:underline cursor-pointer">{title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p>Assignee:</p>
          <div className="w-[38px] h-[38px] bg-red-300 rounded-full"></div>
        </div>
        <p>Critical</p>
      </div>
    </div>
  );
}
