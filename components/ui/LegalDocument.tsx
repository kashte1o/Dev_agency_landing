import type { LegalBlock, LegalDoc } from '@/content/siteCopy'

/** Renders a structured legal document (Privacy / Terms) inside a modal. */
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <div className="mt-4 flex flex-col gap-5 text-[0.95rem] leading-relaxed text-text-secondary">
      <p className="text-[0.85rem] text-text-secondary/70">
        Effective date: {doc.effectiveDate}
      </p>

      {doc.intro.map((block, i) => (
        <Block key={`intro-${i}`} block={block} />
      ))}

      {doc.sections.map((section, i) => (
        <section key={`section-${i}`} className="flex flex-col gap-2.5">
          <h4 className="text-[1.05rem] font-semibold text-text-primary">{section.heading}</h4>
          {section.blocks.map((block, j) => (
            <Block key={`section-${i}-block-${j}`} block={block} />
          ))}
        </section>
      ))}
    </div>
  )
}

function Block({ block }: { block: LegalBlock }) {
  if ('ul' in block) {
    return (
      <ul className="flex list-disc flex-col gap-1 pl-5">
        {block.ul.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }
  return <p>{block.p}</p>
}
