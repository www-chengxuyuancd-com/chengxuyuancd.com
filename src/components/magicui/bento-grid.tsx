import { cn } from '@site/src/lib/utils'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3', className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-background p-4 shadow-input transition duration-200 dark:border-white/[0.2] dark:shadow-none',
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-3 mb-3 inline-flex items-center gap-2">
          {icon}
          <div className="font-bold font-sans text-lg text-neutral-600 dark:text-neutral-200">{title}</div>
        </div>
        <div className="font-normal font-sans text-neutral-600 text-sm dark:text-neutral-300">{description}</div>
      </div>
    </div>
  )
}
