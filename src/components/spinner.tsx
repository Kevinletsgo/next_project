import { LucideLoaderCircle } from "lucide-react";

export const Spinner = () => {
  return (
    <div className="flex flex-1 items-center justify-center self-center animate-spin">
      <LucideLoaderCircle />
    </div>
  )
}