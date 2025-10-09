//  想让浏览器触发服务端的逻辑（删除数据库数据）,需要一个 Server Action
 "use server";

import { ticketsPath } from "@/app/path";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const deleteTicket = async (id: string) =>{
  
  await prisma.ticket.delete({
    where: {
      id,
    },
  });
  redirect(ticketsPath());
}
