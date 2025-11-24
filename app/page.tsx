import Contact from "@/components/contact/Contact";
import Feedbacks from "@/components/feedbacks/Feedbacks";
import Hero from "@/components/hero/Hero";
import OurProjects from "@/components/ourProjects/OurProjects";
import OurStory from "@/components/ourStory/OurStory";
import Services from "@/components/services/Services";
import WhyAakar from "@/components/whyAakar/WhyAakar";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <OurStory />
      <OurProjects />
      <WhyAakar />
      <Feedbacks />
      <Contact />
    </div>
  );
}
