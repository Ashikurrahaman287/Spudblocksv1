export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4" data-testid="text-why-choose-title">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center" data-testid="text-why-choose-intro">
            Choosing SpudBlocks means partnering with a team of Web3 experts dedicated to helping your business thrive in the digital landscape. We specialize in innovative blockchain and decentralized technologies, providing tailored solutions that align with your unique needs and objectives.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center" data-testid="text-why-choose-track-record">
            Our proven track record of high client satisfaction—94% in 2021, 96% in 2022, and 97% in 2023—reflects our commitment to delivering exceptional results.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-center" data-testid="text-why-choose-approach">
            With a focus on innovation and excellence, we offer forward-thinking strategies that enhance efficiency and drive growth. Our collaborative approach ensures transparent communication and strategic guidance throughout every project, making SpudBlocks a trusted partner for your success in the Web3 space.
          </p>
        </div>
      </div>
    </section>
  );
}
