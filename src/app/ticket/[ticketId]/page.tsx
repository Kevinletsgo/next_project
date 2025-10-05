import {initialTicket} from "@/app/data";
type Props = {
  params: {
    ticketId: string;
  };
};
const Ticketpage = async ({params}: Props) => {
  const ticket = initialTicket.find((ticket) => ticket.id == params.ticketId);
  if(!ticket) return <p>Ticket not found</p>;
  return (
    <div>
      <h1 className="text-3xl font-bold">{ticket?.title}</h1>
      <h1 className="text-3xl font-bold">{ticket?.content}</h1>
    </div>
  );
}

export default Ticketpage;
