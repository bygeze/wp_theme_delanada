import * as React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // clsx + twMerge

type ToastVariant = "default" | "destructive";

type ToastItem = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastContextType = {
  showToast: (toast: Omit<ToastItem, "id">) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

// ------------------------------------
// ToastProvider
// ------------------------------------
export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const showToast = (toast: Omit<ToastItem, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    // Auto-dismiss after 4s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map(({ id, title, description, variant = "default" }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "group relative flex w-80 items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg",
                variant === "default"
                  ? "border bg-background text-foreground"
                  : "border-destructive bg-destructive text-destructive-foreground"
              )}
            >
              <div className="flex flex-col space-y-1">
                <span className="font-semibold">{title}</span>
                {description && <span className="text-sm opacity-90">{description}</span>}
              </div>
              <button
                className="absolute top-2 right-2 text-foreground/50 hover:text-foreground"
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== id))}
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
