import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const caseStudies = [
  {
    description:
      "Alumni SMK yang kini bekerja sebagai tenaga ahli manufaktur di Nagoya, Jepang.",
    icon: "/icon-6.png",
  },
  {
    description:
      "Penerima beasiswa program Kuliah Sambil Kerja di Jerman melalui pelatihan intensif IGWI.",
    icon: "/icon-7.png",
  },
  {
    description:
      "Tenaga Caregiver profesional yang sukses beradaptasi dengan budaya kerja di Seoul, Korea.",
    icon: "/icon-8.png",
  },
];

export const CaseStudiesSection = (): JSX.Element => {
  return (
    <section className="w-full px-5 md:px-12 lg:px-[100px] mt-12 md:mt-20">
      <Card className="bg-dark rounded-[30px] md:rounded-[45px] border-0 overflow-hidden">
        <CardContent className="px-6 md:px-[60px] py-10 md:py-[70px]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10 lg:gap-0 lg:divide-x lg:divide-white/20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`flex flex-col gap-5 w-full lg:max-w-[30%] ${index !== 0 ? "lg:pl-12" : ""} ${index !== caseStudies.length - 1 ? "lg:pr-12" : ""}`}
              >
                <div className="flex flex-col gap-5 min-h-0 lg:min-h-[120px]">
                  <p className="font-p font-[number:var(--p-font-weight)] text-white text-sm md:text-base lg:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-relaxed lg:leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                    {study.description}
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 group mt-auto"
                >
                  <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-green text-lg md:text-xl tracking-[0] leading-7 whitespace-nowrap">
                    Lihat detail
                  </span>
                  <img
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    alt="Arrow icon"
                    src={study.icon}
                  />
                </a>

                {index < caseStudies.length - 1 && (
                  <Separator className="lg:hidden mt-8 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
