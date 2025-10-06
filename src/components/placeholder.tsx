import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceHolderProps = {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactNode;
}
const PlaceHolder = ({label, icon = <LucideMessageSquareWarning />, button}: PlaceHolderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col gap-y-4 items-center justify-center">
      {cloneElement(icon, 
        {className: "w-12 h-12",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  )
}

export {PlaceHolder}