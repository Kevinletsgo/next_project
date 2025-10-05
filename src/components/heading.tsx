import { Separator } from "@/components/ui/separator";
import { type } from "os"

type HeadingProps = {
  title: string;
  description: string;
}
const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div>      
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Separator/>
    </>
  )
}

export {Heading}