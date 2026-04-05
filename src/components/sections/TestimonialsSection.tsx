import { TESTIMONIALS } from '@/data';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { renderStars } from '@/utils';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps): JSX.Element {
  const stars = renderStars(testimonial.rating);

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:border-primary-200 hover:shadow-soft transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {stars.map((star, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            {star}
          </span>
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 italic">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection(): JSX.Element {
  return (
    <SectionWrapper id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimoni"
          title="Apa Kata Pelanggan Kami"
          subtitle="Kepuasan pelanggan adalah prioritas utama kami. Inilah yang mereka rasakan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-2 bg-primary-50 border border-primary-200 rounded-2xl px-8 py-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-4xl font-bold font-display text-primary-700">5.0</p>
            <p className="text-sm text-gray-600">Rating rata-rata dari pelanggan kami</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
