"use client"
import { PlaceHolder } from "@/components/placeholder";
import { LucideMessageSquareWarning } from "lucide-react";

export default function Error({error}: {error:Error}) {
    return (
        <PlaceHolder
            label={error.message || "Something goes wrong!"}
            icon={<LucideMessageSquareWarning />}
        />
    )
};