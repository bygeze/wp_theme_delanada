import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
};

export const Tooltip: React.FC<TooltipProps> = ({ content, children, side = "top" }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: side === "top" ? -4 : 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: side === "top" ? -4 : 4 }}
            className={cn(
              "absolute z-50 whitespace-nowrap rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
              side === "top" ? "bottom-full left-1/2 -translate-x-1/2 mb-2" : "",
              side === "bottom" ? "top-full left-1/2 -translate-x-1/2 mt-2" : "",
              side === "left" ? "right-full top-1/2 -translate-y-1/2 mr-2" : "",
              side === "right" ? "left-full top-1/2 -translate-y-1/2 ml-2" : ""
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
