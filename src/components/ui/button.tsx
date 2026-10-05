import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/90",
        outline:
          "border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm hover:border-primary hover:bg-background",
        quiet: "px-0 text-foreground hover:text-primary",
        cream:
          "bg-background text-foreground shadow-soft hover:-translate-y-0.5 hover:bg-background/90",
        ghost: "text-foreground hover:bg-muted",
      },
      size: { default: "h-12", sm: "h-10 px-5 text-xs", lg: "h-14 px-8", icon: "size-11 p-0" },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
