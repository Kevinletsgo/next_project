import { homePath, ticketsPath } from "@/app/path";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';
import { LucideKanban } from "lucide-react";
const Header = () => {
  return (
    <nav 
      className="
        supports-backdrop-blur:bg-secondary/60
        fixed le0 right-0 top-0 z-20
        border-b bg-white/60 backdrop-blur
        w-full flex py-2.5 px-5 justify-between"
    > 
      <div> 
        <Link href={homePath()} className={buttonVariants({ variant: "ghost"})}>
          <LucideKanban />
          <h1 className="text-lg font-semi">TicketBonus</h1>
        </Link>
      </div>
      <div> 
        <Link href={ticketsPath()} className={buttonVariants({ variant: "default"})}>
        <h1 className="text-lg font-semi">Tickets</h1>
        </Link>
      </div>
    </nav>
  )
}
export {Header};