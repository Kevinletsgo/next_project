import { getTicket } from "@/features/ticket/queries/get-ticket";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { notFound } from "next/navigation";
type Props = {
  params: {
    ticketId: string;
  };
};
const Ticketpage = async  ({ params }: Props) => {
  const { ticketId } = await params; 
  const ticket = await getTicket(ticketId);

  if(!ticket) return (
    //notFound() 会调用自定义的 not-found.tsx 页面
    notFound()
  );
  return (
    <div className="flex justify-center">
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
}

export default Ticketpage;
