import AboutSection from "./AboutSection";
import WhyChooseUs from "./WhyChooseUs";
import Impact from "./Impact";
import CoreValues from "./CoreValues";
import Process from "./Process";
import Hero from "./Hero";
import OurWork from "./OurWork";
import News from "./News";

export default function Home() {
  return (
    <>
      <Hero/>

      <AboutSection />
      <WhyChooseUs />
      <Impact />
      <OurWork/>
      <News/>
      <CoreValues />
      <Process />
    </>
  );
}