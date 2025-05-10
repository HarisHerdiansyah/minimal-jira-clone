import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

interface TicketDescriptionProps {
  description: string;
}

export default function TicketDescription({
  description,
}: TicketDescriptionProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}
