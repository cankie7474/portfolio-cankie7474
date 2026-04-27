import AnimateIn from "@/components/ui/AnimateIn";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <AnimateIn direction="left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
        {title ? (
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {title}
          </h2>
        ) : null}
      </AnimateIn>
      {description ? (
        <AnimateIn delay={0.08} direction="up">
          <p className="mt-5 text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            {description}
          </p>
        </AnimateIn>
      ) : null}
    </div>
  );
}
