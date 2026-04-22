import { cn } from '../../lib/cn'

type FaqItemProps = {
  question: string
  answer: string
  className?: string
  defaultOpen?: boolean
}

export function FaqItem({
  question,
  answer,
  className,
  defaultOpen = false,
}: FaqItemProps) {
  return (
    <details
      className={cn(
        'group rounded-[30px] border border-[#e6dbcf] bg-white p-6 shadow-[0_20px_70px_rgba(23,51,45,0.06)] transition hover:border-[#d9c8b7]',
        className,
      )}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
        <span className="max-w-xl text-lg font-semibold tracking-[-0.03em] text-[#17332d] md:text-[1.35rem]">
          {question}
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e6dbcf] bg-[#f8f2eb] text-2xl font-light text-[#7f5f4b] transition group-open:rotate-45 group-open:border-[#d8c0ac]">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-2xl pr-3 text-sm leading-7 text-[#61726d] md:text-base">
        {answer}
      </p>
    </details>
  )
}
