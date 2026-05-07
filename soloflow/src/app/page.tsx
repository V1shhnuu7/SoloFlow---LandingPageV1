import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Replaces from "@/components/replaces";
import Stats from "@/components/stats";
import Features from "@/components/features";
import How from "@/components/how";
import Compare from "@/components/compare";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CtaFinal from "@/components/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Replaces />
        <Stats />
        <Features />
        <How />
        <Compare />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
