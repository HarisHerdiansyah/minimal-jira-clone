"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useImmer } from "use-immer";
import TicketContainer from "./TicketContainer";

const INITIAL = [
  {
    id: "31796567-f404-4bf0-a9c7-6df68257f266",
    label: "TO DO",
    tickets: [
      {
        statusId: "31796567-f404-4bf0-a9c7-6df68257f266",
        id: "a095fd00-b0f8-4bba-ac17-09963997ec28",
        title: "[MEP-101] API Integration Java",
      },
    ],
  },
  {
    id: "d63e5119-11bf-4cde-8fcc-c3417a4d217b",
    label: "IN PROGRESS",
    tickets: [
      {
        statusId: "d63e5119-11bf-4cde-8fcc-c3417a4d217b",
        id: "0b95839a-99e7-4740-a53f-3306efd95dcd",
        title: "[MEP-121] Cron Job Setup",
      },
    ],
  },
  {
    id: "e06e2f40-34b5-4491-8549-636e9d689f54",
    label: "IN REVIEW",
    tickets: [
      {
        statusId: "e06e2f40-34b5-4491-8549-636e9d689f54",
        id: "b76b29c6-42f9-437c-8901-9070e1e2a147",
        title: "[MEP-130] Data Stream",
      },
    ],
  },
  {
    id: "b1c38ec6-cbf1-452b-a49e-ccc769afda72",
    label: "DONE",
    tickets: [
      {
        statusId: "b1c38ec6-cbf1-452b-a49e-ccc769afda72",
        id: "5a339048-c6d8-49e1-8e04-c963628de717",
        title: "[MEP-151] PubSub API",
      },
    ],
  },
];

type TicketCard = {
  id: string;
  title: string;
  statusId: string;
};

export default function KanbanBoard() {
  const [initialKanban, setInitialKanban] = useImmer(INITIAL);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const currentTaskId = active.id;
    const currentBoardId = active.data.current?.statusId;
    const targetBoardId = over.id as string;

    if (currentBoardId === targetBoardId) return;

    setInitialKanban((draft) => {
      const currentBoardIndex = draft.findIndex(
        (dr) => dr.id === currentBoardId
      );
      const targetBoardIndex = draft.findIndex((dr) => dr.id === targetBoardId);

      const currentTaskIndex = draft[currentBoardIndex].tickets.findIndex(
        (tx) => tx.id === currentTaskId
      );

      const [movedTicket] = draft[currentBoardIndex].tickets.splice(
        currentTaskIndex,
        1
      );
      
      movedTicket.statusId = targetBoardId;
      draft[targetBoardIndex].tickets.push(movedTicket);
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="overflow-x-auto px-4 md:px-6 lg:px-12 py-6 mb-20">
        <div className="grid grid-cols-4 gap-6">
          {initialKanban.map((init) => (
            <TicketContainer
              key={init.id}
              id={init.id}
              label={init.label}
              tickets={init.tickets}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
}
