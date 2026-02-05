import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Separator } from "../../../../components/ui/separator";

const workflowSteps = [
  {
    id: "01",
    title: "Konsultasi & Seleksi",
    description:
      "Penentuan minat negara tujuan dan tes bakat awal untuk memastikan calon peserta memilih program yang paling sesuai dengan potensi mereka.",
  },
  {
    id: "02",
    title: "Tahap Bahasa (3-4 Bulan)",
    description:
      "Penguasaan kompetensi bahasa sesuai negara tujuan, mulai dari JLPT/JFT untuk Jepang, TOPIK untuk Korea, hingga Goethe A1-B1 untuk Jerman.",
  },
  {
    id: "03",
    title: "Keterampilan Teknis (2-3 Bulan)",
    description:
      "Pelatihan intensif di bidang kerja spesifik untuk mempersiapkan peserta menghadapi Skill Test atau sertifikasi kompetensi industri.",
  },
  {
    id: "04",
    title: "Budaya Kerja & Mental (1 Bulan)",
    description:
      "Pembinaan kedisiplinan, etika kerja, fisik, dan nasionalisme untuk memastikan ketahanan mental di lingkungan kerja internasional.",
  },
  {
    id: "05",
    title: "Simulasi Seleksi",
    description:
      "Mock interview dan simulasi uji kompetensi resmi untuk meningkatkan kepercayaan diri dan kesiapan peserta menghadapi proses seleksi mitra pemberi kerja.",
  },
  {
    id: "06",
    title: "Penempatan & Pemberangkatan",
    description:
      "Pendampingan administrasi dokumen, kontrak kerja, hingga pemberangkatan melalui mitra resmi dan legalitas yang terjamin.",
  },
];

export const WorkflowProcessSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-6 md:gap-[30px] px-5 md:px-12 lg:px-[100px] py-0 mt-20 w-full max-w-[1440px] mx-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full flex flex-col gap-6 md:gap-[30px]"
      >
        {workflowSteps.map((step, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border-none"
          >
            <div
              className={`flex flex-col items-start rounded-[30px] md:rounded-[45px] overflow-hidden border border-solid border-[#191a23] shadow-[0px_5px_0px_#191a23] ${index === 0 ? "bg-green" : "bg-grey"}`}
            >
              <AccordionTrigger className="w-full px-6 md:px-[60px] py-6 md:py-[41px] hover:no-underline [&[data-state=open]>div>img]:rotate-45 transition-all">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-4 md:gap-[25px]">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#000000] text-3xl md:text-6xl tracking-[0] leading-none md:leading-[normal]">
                      {step.id}
                    </span>
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#000000] text-lg md:text-3xl tracking-[0] leading-none md:leading-[normal] text-left">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              {step.description && (
                <AccordionContent className="px-6 md:px-[60px] pb-6 md:pb-[41px] pt-0">
                  <Separator className="mb-6 md:mb-[30px] bg-[#191a23]" />
                  <p className="font-p font-[number:var(--p-font-weight)] text-[#000000] text-sm md:text-base lg:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                    {step.description}
                  </p>
                </AccordionContent>
              )}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
