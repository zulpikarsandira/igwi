import { Navbar } from "../../../../components/navigation/Navbar";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

const companyLogos = [
  {
    images: [
      {
        src: "/vector-1.svg",
        alt: "Company logo 1 part 1",
        className: "absolute w-[52.83%] h-[27.27%] top-[66.48%] left-[14.01%]",
      },
      {
        src: "/vector-6.svg",
        alt: "Company logo 1 part 2",
        className: "absolute w-[99.55%] h-[40.61%] top-[25.00%] left-0",
      },
    ],
    containerClass: "relative w-[124.11px] h-12",
  },
  {
    images: [
      {
        src: "/vector-2.svg",
        alt: "Company logo 2",
        className: "absolute w-[99.52%] h-[56.73%] top-[18.89%] left-0",
      },
    ],
    containerClass: "w-[126.37px] relative h-12",
  },
  {
    images: [
      {
        src: "/vector-7.svg",
        alt: "Company logo 3 part 1",
        className: "absolute w-[99.70%] h-[56.03%] top-[27.31%] left-0",
      },
      {
        src: "/vector-3.svg",
        alt: "Company logo 3 part 2",
        className: "absolute w-[26.33%] h-[65.52%] top-[16.67%] left-[64.21%]",
      },
    ],
    containerClass: "w-[128.63px] relative h-12",
  },
  {
    images: [
      {
        src: "/vector-4.svg",
        alt: "Company logo 4",
        className: "absolute w-[99.65%] h-[71.77%] top-[12.50%] left-0",
      },
    ],
    containerClass: "w-[145.55px] relative h-12",
  },
  {
    images: [
      {
        src: "/vector.svg",
        alt: "Company logo 5",
        className: "absolute w-[100.01%] h-[62.50%] top-[20.83%] left-0",
      },
    ],
    containerClass: "w-[125.24px] overflow-hidden relative h-12",
  },
  {
    images: [
      {
        src: "/vector-5.svg",
        alt: "Company logo 6",
        className: "absolute w-[99.90%] h-[45.83%] top-[29.17%] left-0",
      },
    ],
    containerClass: "w-[110.57px] relative h-12",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto relative mt-8 md:mt-12 lg:mt-[60px] flex-col items-start gap-10 md:gap-14 lg:gap-[70px]">
      <Navbar />


      <div className="flex w-full items-start justify-between px-5 md:px-12 lg:px-[100px] py-0 relative bg-transparent flex-col lg:flex-row gap-8 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex flex-col items-start gap-6 md:gap-[35px] relative flex-[0_0_auto] w-full lg:w-auto"
        >
          <h1 className="relative w-full lg:w-[531px] mt-[-1.00px] font-h-1 font-[number:var(--h-1-font-weight)] text-[#000000] text-[32px] md:text-[48px] lg:text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[1.2] lg:leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)]">
            Menjembatani Talenta Indonesia Menuju Karier Global.
          </h1>

          <p className="relative w-full lg:w-[498px] [font-family:'Space_Grotesk',Helvetica] font-normal text-[#000000] text-base md:text-lg lg:text-xl tracking-[0] leading-6 md:leading-7">
            LPK Srikaton Indonesia (IGWI) menyiapkan tenaga kerja profesional
            berstandar internasional melalui pelatihan bahasa, keterampilan
            teknis, dan pembinaan karakter unggul untuk pasar kerja Jepang,
            Korea, Jerman, hingga Australia.
          </p>

          <Button className="inline-flex items-center justify-center bg-dark hover:bg-dark/90 px-6 md:px-[35px] py-[20px] rounded-[14px] w-full md:w-auto h-auto">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-lg md:text-xl text-center tracking-[0] leading-none whitespace-nowrap">
              Jadwalkan Konsultasi
            </span>
          </Button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full lg:w-[600px] h-auto max-w-[600px] mx-auto lg:mx-0 object-contain -mt-8 lg:-mt-12"
          alt="Hero Illustration"
          src="/hero-image.png"
        />
      </div>

      <div className="hidden md:flex w-full items-center justify-between px-5 md:px-12 lg:px-[100px] py-0 relative flex-wrap gap-4">
        {companyLogos.map((logo, index) => (
          <div key={index} className={logo.containerClass}>
            {logo.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                className={image.className}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
