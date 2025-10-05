
import Link from 'next/link';
import {ticketsPath} from "@/app/path"; 

import {Heading} from "@/components/heading"
const Ticketpage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 h-20">
      <Heading
        title="Home Page"
        description="Welcome to the Home Page"
      />
      <div className="flex-l flex flex-col items-center">
        <Link href={ticketsPath()} className="underline text-lg">
          <p>Go to Ticket Page</p>
        </Link>
      </div>
    </div>
  )
}

export default Ticketpage;
