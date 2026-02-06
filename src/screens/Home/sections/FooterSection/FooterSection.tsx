import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const navigationLinks = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Langkah Pelatihan", href: "#process" },
  { label: "Tim", href: "#team" },
  { label: "Testimoni", href: "#testimonials" },
];

const contactInfo = [
  { label: "Email: lpkigwi@gmail.com" },
  { label: "Kontak: +62 811-2288-8855" },
  { label: "Alamat: Jl. Rd. Umar Wirahadikusumah Km. 10 Kab. Sumedang, Jawa Barat, Indonesia." },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full mt-20 md:mt-28 lg:mt-[140px] px-5 md:px-12 lg:px-[100px]">
      <div className="bg-dark rounded-t-[30px] md:rounded-t-[45px] pt-10 md:pt-[55px] pb-10 md:pb-[50px] px-6 md:px-[60px]">
        <div className="flex flex-col gap-[66px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="relative flex items-center gap-3 flex-shrink-0">
              <img
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                alt="LPK IGWI Logo"
                src="/logo-igwi.png"
              />
              <span className="font-h-2 font-[number:var(--h-3-font-weight)] text-white text-[20px] md:text-[24px] leading-tight flex items-center h-full">
                LPK IGWI
              </span>
            </div>

            <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] underline hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <img
              className="flex-shrink-0"
              alt="Social icons"
              src="/social-icons.svg"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-[154px]">
            <div className="flex flex-col gap-[27px] w-full lg:w-auto">
              <Badge className="bg-green hover:bg-green w-fit px-[7px] py-1 rounded-[7px]">
                <span className="font-h-4 font-[number:var(--h-4-font-weight)] text-[#000000] text-base tracking-[var(--h-4-letter-spacing)] leading-none">
                  Hubungi Kami:
                </span>
              </Badge>

              <div className="flex flex-col gap-5">
                {contactInfo.map((info, index) => (
                  <p
                    key={index}
                    className="font-p font-[number:var(--p-font-weight)] text-white text-base md:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-relaxed whitespace-pre-line max-w-[400px]"
                  >
                    {info.label}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-5 px-6 md:px-10 py-8 lg:py-[58px] bg-[#292a32] rounded-[14px] w-full lg:flex-1 max-w-[600px]">
              <Input
                type="email"
                placeholder="Email Anda"
                className="w-full md:flex-1 px-[35px] py-[22px] rounded-[14px] border border-white bg-transparent text-white font-p placeholder:text-white/50"
              />

              <Button className="bg-green hover:bg-green/90 text-black px-[35px] py-5 rounded-[14px] font-normal text-lg md:text-xl h-auto w-full md:w-auto">
                Berlangganan Info
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[50px] mt-[50px]">
          <Separator className="bg-white/20 h-px" />

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
            <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-7 text-center md:text-left">
              © 2024 LPK Indonesia Global Workforce Institute (IGWI).
            </p>

            <a
              href="#"
              className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-7 underline whitespace-nowrap hover:opacity-80 transition-opacity text-center md:text-left"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
