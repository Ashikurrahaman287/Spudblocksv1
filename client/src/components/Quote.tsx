export default function Quote() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-gray-100 leading-relaxed text-center font-serif italic" data-testid="text-quote">
          "Success in business is not just about making profits, but also about creating value, fostering innovation, and leaving a positive impact on the world."
        </blockquote>
      </div>
    </section>
  );
}
