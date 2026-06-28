import type { CaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { industry, headline, meta, challenge, solution, results, testimonial } = caseStudy;

  // Determine badge styling based on industry
  const getBadgeStyles = () => {
    switch (industry) {
      case 'HOSPITALITY':
        return 'bg-coral text-ink';
      case 'FINANCE':
        return 'bg-sage text-ink';
      case 'OPERATIONS':
        return 'bg-ink text-cream';
      default:
        return 'bg-charcoal text-cream';
    }
  };

  return (
    <div className="bg-ink border-2 border-hairline shadow-brutal md:shadow-brutal-lg p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-8 md:mb-12 max-w-7xl mx-auto transition-all duration-300 hover:translate-x-1 hover:shadow-brutal-lg">
      {/* Industry Badge */}
      <div className={`inline-block ${getBadgeStyles()} font-sans font-bold text-xs uppercase tracking-widest px-4 md:px-5 py-2 md:py-2.5 mb-4 md:mb-6 border-2 border-hairline shadow-brutal-sm`}>
        {industry}
      </div>

      {/* Headline */}
      <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-tight-xl text-cream mb-3 leading-tight">
        {headline}
      </h3>

      {/* Meta */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted mb-6 md:mb-10">
        {meta}
      </p>

      {/* Challenge Section */}
      <div className="mb-6">
        <h4 className="font-display font-extrabold text-sm uppercase tracking-wide text-cream mb-2">
          {challenge.title}
        </h4>
        <p className="text-base md:text-lg text-body leading-relaxed">
          {challenge.description}
        </p>
      </div>

      {/* Solution Section */}
      <div className="mb-8">
        <h4 className="font-display font-extrabold text-sm uppercase tracking-wide text-cream mb-2">
          {solution.title}
        </h4>
        <p className="text-base md:text-lg text-body leading-relaxed">
          {solution.description}
        </p>
      </div>

      {/* Results Box - THE CRITICAL VISUAL ELEMENT */}
      <div className="bg-charcoal border-2 border-coral p-5 sm:p-6 md:p-7 lg:p-10 mb-8 md:mb-10 shadow-brutal-coral">
        <h4 className="font-display font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wide text-cream mb-6 md:mb-8">
          {results.title}
        </h4>

        {/* Metric Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-6 xl:gap-8 mb-8 md:mb-10 items-stretch">
          {results.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-ink border-2 border-hairline shadow-brutal-sm p-4 sm:p-5 md:p-5 lg:p-6 xl:p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal h-full"
            >
              {/* HUGE Number - More conservative scaling for narrow 3-column layouts */}
              <div className="text-5xl sm:text-[3.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-6xl 2xl:text-7xl font-display font-extrabold text-coral leading-none mb-3 md:mb-3 lg:mb-4 tracking-tighter break-words">
                {metric.number}
              </div>

              {/* Label */}
              <div className="font-sans font-bold text-[0.65rem] sm:text-xs md:text-[0.7rem] lg:text-xs xl:text-sm uppercase tracking-wide text-cream mb-2 md:mb-2 lg:mb-3 leading-tight whitespace-pre-line">
                {metric.label}
              </div>

              {/* Detail */}
              <div className="text-[0.7rem] sm:text-xs md:text-[0.7rem] lg:text-xs xl:text-sm text-muted">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="mt-6 md:mt-8">
          <h5 className="font-display font-extrabold text-xs md:text-sm uppercase tracking-wide text-cream mb-4 md:mb-5">
            Additional Benefits:
          </h5>
          <ul className="space-y-2 md:space-y-3">
            {results.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-body pl-7 md:pl-8 relative">
                <span className="absolute left-0 top-0 text-coral text-lg md:text-xl font-sans font-bold">✓</span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Illustrative disclaimer */}
      <p className="text-xs text-muted italic mb-6 md:mb-8 border-l-2 border-hairline pl-3">
        Illustrative example — figures are indicative of typical results, not a specific client engagement.
      </p>

      {/* Quote Section */}
      <div className="border-l-4 md:border-l-6 border-coral bg-charcoal p-6 md:p-8 lg:p-10 mb-8 md:mb-10 relative">
        {/* Large Quotation Mark */}
        <div className="hidden md:block absolute top-5 left-5 text-7xl font-display font-extrabold text-coral opacity-30 leading-none select-none pointer-events-none">"</div>

        <p className="text-base md:text-lg lg:text-xl text-body italic leading-relaxed mb-3 md:mb-4 relative z-10">
          "{testimonial.quote}"
        </p>
        <p className="font-sans font-bold text-xs md:text-sm lg:text-base text-cream relative z-10">
          — {testimonial.author}, {testimonial.business}
        </p>
      </div>

    </div>
  );
}
