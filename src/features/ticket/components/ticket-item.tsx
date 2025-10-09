"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {TicketIcons} from "@/features/ticket/constants"

import Link from 'next/link';
import {ticketPath} from "@/app/path"
import {LucideSquareArrowOutUpRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import { Ticket } from "@prisma/client";
import {LucideTrash2} from "lucide-react"
import { prisma } from "@/lib/prisma";
import {deleteTicket} from "@/features/ticket/actions/delete-ticket"
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
  const handleDeleteTicket = async () =>{
    await deleteTicket(ticket.id);
  }

  const DeleteButton = (
    <Button asChild variant="outline" size="icon" onClick={() => handleDeleteTicket()}>
      <Link href={ticketPath(ticket.id)} className="text-sm">
          <LucideTrash2/>
      </Link>
    </Button>
  )
  return (
    <div className="flex flex-1 gap-x-2 w-full max-w-[420px]">
      <Card className="w-full">
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
        {isDetail? (<div className="flex flex-1 flex-col gap-y-1">
          {DeleteButton}
        </div>) : (
          <div className="flex flex-1 flex-col gap-y-1">
            {DetailButton}
          </div>
        )}
    </div>
  )
}

export {TicketItem};
