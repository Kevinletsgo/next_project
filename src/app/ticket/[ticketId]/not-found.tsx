import { PlaceHolder } from "@/components/placeholder";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {ticketsPath} from "@/app/path";

export default function NotFound() {
  return (
    <div className="flex flex-1 gap-4">
      <PlaceHolder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Back to ticket</Link>
          </Button>
        }
      />
    </div>
  );
}

