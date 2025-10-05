import Link from 'next/link';

import { ticketPath } from "@/app/path";
import { initialTicket } from "@/app/data";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Separator } from '@/components/ui/separator';
import { LucidePencil, LucideCircleCheck, LucideLoader } from 'lucide-react';

const TicketIcons = {
  "OPEN": <LucidePencil />,
  "DONE": <LucideCircleCheck />,
  "IN_PROGRESS": <LucideLoader />,
}
const Ticketpage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4">
      <div>      
        <h1 className="text-3xl font-bold tracking-tight">Tickets</h1>
        <p className="text-sm text-muted-foreground">Welcome to the Ticket Page</p>
      </div>
      <Separator/>
      <div className="flex-1 flex flex-col gap-y-4 items-center animate-fade-in-up">
        {initialTicket.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TicketIcons[ticket.status]}</span>
                <span className="text-lg font-bold truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>  
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="underline text-sm">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Ticketpage;
