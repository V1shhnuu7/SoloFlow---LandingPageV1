import { type ComponentPropsWithoutRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        // mobile: 1-col stacked, modest height. desktop: taller rows + bigger gap for breathing room.
        "grid w-full grid-cols-3 gap-4 auto-rows-[22rem] md:auto-rows-[24rem] lg:auto-rows-[27rem] lg:gap-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  description,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "sf-bento-card group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transition-shadow duration-300",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-6 lg:p-7">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2.5 lg:gap-3 transition-all duration-300 lg:group-hover:-translate-y-10">
        <h3 className="text-[19.5px] lg:text-[22px] font-semibold tracking-tight text-neutral-800 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-md text-[13.5px] lg:text-[15px] leading-relaxed text-neutral-500">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none mt-3 flex w-full transform-gpu flex-row items-center font-mono text-[10.5px] uppercase tracking-[0.12em] text-neutral-500 lg:hidden"
        )}
      >
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          {cta}
        </span>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center px-7 pb-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">
        <span className="h-1 w-1 rounded-full bg-neutral-400" />
        {cta}
      </span>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" />
  </div>
)

export { BentoCard, BentoGrid }
