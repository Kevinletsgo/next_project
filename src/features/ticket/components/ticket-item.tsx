import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {TicketIcons} from "@/features/ticket/constants"
import {Ticket} from "@/features/ticket/types"
import Link from 'next/link';
import {ticketPath} from "@/app/path"
import {LucideSquareArrowOutUpRight} from "lucide-react"
import {Button} from "@/components/ui/button"
type TicketProps = {
    ticket: Ticket;
    isDetail?: boolean;
};

const TicketItem = ({ticket, isDetail}: TicketProps) => {
  const DetailButton = (
    <Button asChild variant="outline" size="icon">
      <Link href={ticketPath(ticket.id)} className="text-sm">
          <LucideSquareArrowOutUpRight/>
      </Link>
    </Button>
  )
  return (
    <div className="flex flex-1 gap-x-2">
      <Card className="w-full max-w-[420px]">
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
        </Card>
        {isDetail? null : (
          <div className="flex flex-1 flex-col gap-y-1">
            {DetailButton}
          </div>
        )}
    </div>
  )
}

export {TicketItem};
