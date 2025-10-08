import { prisma } from "@/lib/prisma";

export const getTickets = async () => {
  // throw new Error("Failed to fetch tickets");
    return await prisma.ticket.findMany();
  
};

