import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
    {
        title: "Ticket 1",
        content: "It's the first ticket from db。",
        status: "OPEN" as const,
    },
    {
        title: "Ticket 2",
        content: "It's the second ticket from db。",
        status: "DONE" as const,
    },
    {
        title: "Ticket 3",
        content: "It's the third ticket from db。",
        status: "IN_PROGRESS" as const,
    },
];

const seed = async() => {
    await prisma.ticket.deleteMany();
    await prisma.ticket.createMany({
        data: tickets,
    });
}

seed()