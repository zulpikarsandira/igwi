import { Navbar } from "../../../../components/navigation/Navbar";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto relative pt-24 md:pt-32 lg:pt-40 flex-col items-start gap-10 md:gap-14 lg:gap-[70px] mb-20 md:mb-28 lg:mb-[100px]">
      <Navbar />

      <div className="flex w-full items-center justify-between px-5 md:px-12 lg:px-[100px] py-0 relative bg-transparent flex-col lg:flex-row gap-12 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-[35px] relative flex-[0_0_auto] w-full lg:w-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 bg-green rounded-full border border-dark inline-block mb-2"
          >
            <span className="text-sm md:text-base font-bold text-dark italic">“From Indonesia to the World”</span>
          </motion.div>
          <h1 className="relative w-full lg:w-[531px] font-bold text-black text-[32px] md:text-[48px] lg:text-6xl tracking-tight leading-[1.1] font-h-1">
            Menjembatani Talenta Indonesia Menuju Karier Global.
          </h1>

          <p className="relative w-full lg:w-[498px] font-p text-black/80 text-base md:text-lg lg:text-xl leading-relaxed">
            LPK Indonesia Global Workforce Institute (IGWI) menyiapkan tenaga kerja
            profesional berstandar internasional melalui pelatihan bahasa,
            keterampilan teknis, and pembinaan karakter unggul untuk pasar kerja
            Jepang, Korea, Jerman, hingga Australia.
          </p>

          <a
            href="https://wa.me/6281122888855?text=Halo%20LPK%20IGWI%2C%20saya%20tertarik%20untuk%20mendaftar%20dan%20ingin%20konsultasi%20mengenai%20program%20pelatihan%20kerja%20luar%20negeri."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="inline-flex items-center justify-center bg-green hover:bg-green/90 px-10 py-5 rounded-[14px] w-full h-auto text-dark border-2 border-dark text-lg md:text-xl font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Jadwalkan Konsultasi
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full lg:w-[600px] flex justify-center lg:justify-end"
        >
          <img
            className="w-full max-w-[500px] lg:max-w-full h-auto object-contain"
            alt="Hero Illustration"
            src="/hero-image.png"
          />
        </motion.div>
      </div>
    </section>
  );
};
