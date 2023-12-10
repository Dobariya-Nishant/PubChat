"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface ActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

export default function ActionTooltip({
    label,
    children,
    side,
    align
}:
    ActionTooltipProps
) {
    return (
        <div>ActionTooltip</div>
    )
}
