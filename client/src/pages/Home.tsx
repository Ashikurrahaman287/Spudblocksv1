import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import Roadmap from "@/components/Roadmap";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Statistics from "@/components/Statistics";
import Benefits from "@/components/Benefits";
import Quote from "@/components/Quote";
import Recognition from "@/components/Recognition";
import Partners from "@/components/Partners";
import SmartContractAnimation from "@/components/SmartContractAnimation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Roadmap />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Benefits />
      <Quote />
      <Recognition />
      <Partners />
      <SmartContractAnimation />
      <Contact />
    </div>
  );
}