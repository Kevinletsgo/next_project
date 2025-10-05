
import Link from 'next/link';
import {ticketsPath} from "@/app/path"; 

const Ticketpage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 h-20">
      <h1 className="text-3xl font-bold tracking-tight">Home Page</h1>
      <p className="text-lg text-muted-foreground">Welcome to the Home Page</p>
      <div className="flex-l flex flex-col items-center">
        <Link href={ticketsPath()} className="underline text-lg">
          <p>Go to Ticket Page</p>
        </Link>
      </div>
    </div>
  )
}

export default Ticketpage;
