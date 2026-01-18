import * as React from "react";
import { Toaster, toast as sonnerToast } from "sonner";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

// ------------------------------------
// Toast provider / viewport
// ------------------------------------
const ToastProvider = Toaster;

// Para estilos de viewport tipo Radix, puedes crear un contenedor fijo:
const ToastViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed top-0 right-0 z-[100] flex flex-col p-4 md:max-w-sm",
        className
      )}
      {...props}
    />
  )
);
ToastViewport.displayName = "ToastViewport";

// ------------------------------------
// Variants y clases
// ------------------------------------
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ------------------------------------
// Componente Toast
// ------------------------------------
type ToastProps = VariantProps<typeof toastVariants> & {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};

const Toast = ({ title, description, variant = "default" }: ToastProps) => {
  React.useEffect(() => {
    sonnerToast.custom(
      ({ id }) => (
        <div className={cn(toastVariants({ variant }))}>
          <div className="flex flex-col space-y-1">
            <span className="font-semibold">{title}</span>
            {description && <span className="text-sm opacity-90">{description}</span>}
          </div>
          <button
            className="absolute top-2 right-2 text-foreground/50 hover:text-foreground"
            onClick={() => sonnerToast.dismiss(id)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )
    );
  }, [title, description, variant]);

  return null; // este componente no renderiza nada directo
};

// ------------------------------------
// Export
// ------------------------------------
export {
  type ToastProps,
  ToastProvider,
  ToastViewport,
  Toast,
  sonnerToast as toast, // export para usar toast() directamente
};