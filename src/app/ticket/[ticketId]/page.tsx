import {initialTicket} from "@/app/data";
import { PlaceHolder } from "@/components/placeholder";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {ticketsPath} from "@/app/path";
type Props = {
  params: {
    ticketId: string;
  };
};
const Ticketpage = async ({params}: Props) => {
  const ticket = initialTicket.find((ticket) => ticket.id == params.ticketId);
  if(!ticket) return (
    <div className="flex flex-1 gap-4">
      <PlaceHolder label="Ticket not found" button={
        <Button asChild variant="outline"> 
          <Link href={ticketsPath()}>Back to ticket</Link>
        </Button>
      }>
      </PlaceHolder>
    </div>
  );
  return (
    <div>
      <h1 className="text-3xl font-bold">{ticket?.title}</h1>
      <h1 className="text-3xl font-bold">{ticket?.content}</h1>
    </div>
  );
}

export default Ticketpage;
