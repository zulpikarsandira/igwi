import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full mt-20 md:mt-[100px] px-5 md:px-12 lg:px-[100px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Card className="relative bg-grey border-0 rounded-[30px] md:rounded-[45px] overflow-hidden">
          <CardContent className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-8 md:p-[60px] min-h-[347px]">
            <div className="flex flex-col gap-5 md:gap-[26px] max-w-full lg:max-w-[500px] z-10">
              <h2 className="font-h-3 font-[number:var(--h-3-font-weight)] text-black text-[24px] md:text-[30px] lg:text-[length:var(--h-3-font-size)] tracking-[var(--h-3-letter-spacing)] leading-tight lg:leading-[var(--h-3-line-height)] [font-style:var(--h-3-font-style)]">
                Siap Memulai Karier Internasional Anda?
              </h2>

              <p className="font-p font-[number:var(--p-font-weight)] text-black text-base md:text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-relaxed lg:leading-[var(--p-line-height)] [font-style:var(--p-font-style)]">
                Hubungi kami sekarang untuk mendapatkan rencana pelatihan yang
                tepat sesuai negara tujuan impian Anda.
              </p>

              <Button className="bg-dark hover:bg-dark/90 text-white px-6 md:px-[35px] py-4 md:py-5 rounded-[14px] h-auto [font-family:'Space_Grotesk',Helvetica] font-normal text-lg md:text-xl leading-7 w-full md:w-fit">
                Hubungi Kami Sekarang
              </Button>
            </div>

            <div className="relative w-full lg:w-[450px] xl:w-[500px] h-[300px] md:h-[400px] lg:h-[450px] mt-8 lg:mt-0 lg:-mb-12 self-end">
              <img
                className="w-full h-full object-contain object-bottom"
                alt="LPK IGWI Career"
                src="/cta-image-new.png"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};
