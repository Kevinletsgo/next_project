import {getTickets} from "@/features/ticket/queries/get-tickets"
import {TicketItem} from "@/features/ticket/components/ticket-item"

const TicketList = async () => {
  const tickets = await getTickets();
  return (
    <div className="flex-1 flex flex-col gap-y-4 items-center animate-fade-in-up">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} isDetail={false} />
      ))}
    </div>
  )
};

export {TicketList}