import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TooltipContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const TooltipContext = React.createContext<TooltipContextType | null>(null);

/* ---------------------------------
   Provider
---------------------------------- */
export const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      {children}
    </TooltipContext.Provider>
  );
};

/* ---------------------------------
   Root
---------------------------------- */
export const Tooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

/* ---------------------------------
   Trigger
---------------------------------- */
export const TooltipTrigger = ({ children }: { children: React.ReactNode }) => {
  const ctx = React.useContext(TooltipContext);
  if (!ctx) throw new Error("TooltipTrigger must be used inside TooltipProvider");

  return (
    <span
      onMouseEnter={() => ctx.setOpen(true)}
      onMouseLeave={() => ctx.setOpen(false)}
      className="inline-flex"
    >
      {children}
    </span>
  );
};

/* ---------------------------------
   Content
---------------------------------- */
export const TooltipContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ctx = React.useContext(TooltipContext);
  if (!ctx) throw new Error("TooltipContent must be used inside TooltipProvider");

  return (
    <AnimatePresence>
      {ctx.open && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className={cn(
            "absolute z-50 mt-2 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
            className
          )}  
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
