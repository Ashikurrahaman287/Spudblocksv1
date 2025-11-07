export default function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-benefits-title">
            Benefits With Us
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center" data-testid="text-benefits-intro">
            Partnering with us at SpudBlocks offers a myriad of benefits for your project. Our seasoned experts bring a wealth of experience and a deep understanding of the Web3 landscape, ensuring that your venture is in capable hands.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center" data-testid="text-benefits-description">
            With our collaborative approach and tailored solutions, you can expect seamless integration, innovative strategies, and a forward-thinking mindset that propels your project toward success. Together, we can transform your vision into a reality that resonates with your audience and drives meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}
