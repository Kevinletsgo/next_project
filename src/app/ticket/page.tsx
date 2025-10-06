import { initialTicket } from "@/app/data";
import {TicketItem} from "@/features/ticket/components/ticket-item"

import {Heading} from "@/components/heading"

const Ticketspage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4">
      <Heading
        title="Tickets"
        description="Welcome to the Ticket Page"
      />
      <div className="flex-1 flex flex-col gap-y-4 items-center animate-fade-in-up">
        {initialTicket.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} isDetail={false} />
        ))}
      </div>
    </div>
  )
}

export default Ticketspage;
