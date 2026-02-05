import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MarketingServicesSection } from "./sections/MarketingServicesSection";
import { TeamMembersSection } from "./sections/TeamMembersSection";
import { WorkflowProcessSection } from "./sections/WorkflowProcessSection/WorkflowProcessSection";

import { motion } from "framer-motion";

const sectionHeaders = [
  {
    badge: "Layanan",
    description: "Program Pelatihan Unggulan LPK IGWI",
    descriptionWidth: "w-[580px]",
  },
  {
    badge: "Case Studies",
    description: "Jejak Langkah Keberhasilan Alumni LPK IGWI",
    descriptionWidth: "w-[580px]",
  },
  {
    badge: "Langkah Pelatihan",
    description: "Sistem Pelatihan Terstruktur LPK IGWI",
    descriptionWidth: "w-[400px]",
  },
  {
    badge: "Team",
    description: "Tim Pengajar & Manajemen yang Profesional dan Berpengalaman",
    descriptionWidth: "w-[473px]",
  },
  {
    badge: "Testimonials",
    description: "Apa Kata Alumni & Mitra Kami Tentang Kualitas LPK IGWI?",
    descriptionWidth: "w-[473px]",
  },
  {
    badge: "Contact Us",
    description: "Konsultasikan impian kerja luar negeri Anda. Tim kami akan segera menghubungi Anda.",
    descriptionWidth: "w-[400px]",
  },
];

const SectionHeader = ({
  badge,
  description,
  descriptionWidth,
}: { badge: string; description: string; descriptionWidth: string }) => (
  <motion.header
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex w-full max-w-[1440px] mx-auto gap-6 md:gap-10 px-5 md:px-12 lg:px-[100px] py-0 items-start flex-col md:flex-row"
  >
    <Badge className="bg-green hover:bg-green text-black font-h-2 font-[number:var(--h-2-font-weight)] text-[length:var(--h-2-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)] px-[7px] py-0 rounded-[7px] h-auto whitespace-nowrap">
      {badge}
    </Badge>
    <p
      className={`w-full md:${descriptionWidth} font-p font-[number:var(--p-font-weight)] text-[#000000] text-[length:var(--p-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]`}
    >
      {description}
    </p>
  </motion.header>
);

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white overflow-x-hidden w-full flex flex-col">
      <HeroSection />

      <div className="mt-20 md:mt-28 lg:mt-[140px]">
        <SectionHeader
          badge={sectionHeaders[0].badge}
          description={sectionHeaders[0].description}
          descriptionWidth={sectionHeaders[0].descriptionWidth}
        />
      </div>

      <MarketingServicesSection />

      <CallToActionSection />

      <div className="mt-20 md:mt-28 lg:mt-[140px]">
        <SectionHeader
          badge={sectionHeaders[1].badge}
          description={sectionHeaders[1].description}
          descriptionWidth={sectionHeaders[1].descriptionWidth}
        />
      </div>

      <CaseStudiesSection />

      <div className="mt-20 md:mt-28 lg:mt-[140px]">
        <SectionHeader
          badge={sectionHeaders[2].badge}
          description={sectionHeaders[2].description}
          descriptionWidth={sectionHeaders[2].descriptionWidth}
        />
      </div>

      <WorkflowProcessSection />

      <div className="mt-20 md:mt-28 lg:mt-[140px]">
        <SectionHeader
          badge={sectionHeaders[3].badge}
          description={sectionHeaders[3].description}
          descriptionWidth={sectionHeaders[3].descriptionWidth}
        />
      </div>

      <TeamMembersSection />

      <div className="flex justify-center md:justify-end w-full max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[100px] mt-10">
        <Button className="bg-dark hover:bg-dark/90 text-white [font-family:'Space_Grotesk',Helvetica] font-normal text-lg md:text-xl tracking-[0] leading-7 px-6 md:px-[35px] py-4 md:py-5 h-auto md:h-[68px] rounded-[14px] w-full md:w-auto">
          See all team
        </Button>
      </div>

      <div className="mt-16 md:mt-20 lg:mt-[100px]">
        <SectionHeader
          badge={sectionHeaders[4].badge}
          description={sectionHeaders[4].description}
          descriptionWidth={sectionHeaders[4].descriptionWidth}
        />
      </div>

      <ClientTestimonialsSection />

      <div className="mt-20 md:mt-28 lg:mt-[140px]">
        <SectionHeader
          badge={sectionHeaders[5].badge}
          description={sectionHeaders[5].description}
          descriptionWidth={sectionHeaders[5].descriptionWidth}
        />
      </div>

      <ContactFormSection />

      <FooterSection />
    </div>
  );
};
