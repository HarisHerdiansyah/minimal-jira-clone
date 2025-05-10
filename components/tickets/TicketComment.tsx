"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: string;
  author: {
    name: string;
    email: string;
    avatar: string;
  };
  content: string;
  created: string;
}

interface TicketCommentsProps {
  comments: Comment[];
}

export default function TicketComments({
  comments: initialComments,
}: TicketCommentsProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const comment = {
        id: `comment-${Date.now()}`,
        author: {
          name: "John Doe",
          email: "john.doe@example.com",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: newComment,
        created: new Date().toISOString(),
      };

      setComments([...comments, comment]);
      setNewComment("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={comment.author.avatar || "/placeholder.svg"}
                  alt={comment.author.name}
                />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(comment.created), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Your avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <div className="flex justify-end">
                <Button
                  onClick={handleSubmitComment}
                  disabled={!newComment.trim() || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Comment"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
