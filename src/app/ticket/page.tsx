import {Heading} from "@/components/heading"
import { Suspense } from "react";
import {TicketList} from "@/features/ticket/components/ticket-list"
import { Spinner } from "@/components/spinner";

const Ticketspage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4">
      <Heading
        title="Tickets"
        description="Welcome to the Ticket Page"
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>   
    </div>
  )
};

export default Ticketspage;
