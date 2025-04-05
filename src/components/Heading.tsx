import { cn } from "@/lib/utils";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
};

function Heading({ as = "h1", className, children }: HeadingProps) {
  const Tag = as;

  const baseStyles = {
    h1: "text-xl sm:text-2xl leading-none font-light text-zinc-800 dark:text-zinc-300",
    h2: "text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light",
    h3: "text-sm sm:text-base text-zinc-800 dark:text-zinc-300",
  };

  return <Tag className={cn(baseStyles[as], className)}>{children}</Tag>;
}

export default Heading
