import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { CourseSelection } from "@/components/course-selection";
import { Features } from "@/components/features";
import { DashboardPreview } from "@/components/dashboard-preview";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CourseSelection />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
