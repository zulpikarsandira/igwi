import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote:
      "Berkat pelatihan intensif di LPK IGWI, saya tidak hanya menguasai bahasa Jepang, tapi juga mental kedisiplinan yang kuat. Sekarang saya sukses bekerja di bidang manufaktur di Nagoya.",
    author: "Rizky Pratama",
    position: "Alumni - Tenaga Ahli di Nagoya, Jepang",
  },
  {
    id: 2,
    quote:
      "Lulusan LPK IGWI memiliki etika kerja yang luar biasa dan kompetensi teknis yang siap pakai. Mereka sangat cepat beradaptasi dengan standar industri global di perusahaan kami.",
    author: "Budi Santoso",
    position: "HR Manager - Mitra Industri Otomotif",
  },
  {
    id: 3,
    quote:
      "Program persiapan Ausbildung ke Jerman dari IGWI sangat terstruktur. Saya merasa sangat terbantu dalam pengurusan dokumen hingga penguasaan bahasa Jerman tingkat B1.",
    author: "Siti Aminah",
    position: "Alumni - Peserta Ausbildung di Berlin, Jerman",
  },
  {
    id: 4,
    quote:
      "Pelatihan di LPK IGWI memberikan bekal yang komprehensif. Tidak hanya bahasa, tapi juga pemahaman budaya yang sangat membantu saat saya mulai bekerja di Seoul.",
    author: "Andi Wijaya",
    position: "Alumni - Professional Caregiver di Korea",
  },
  {
    id: 5,
    quote:
      "Instruktur di IGWI sangat sabar and berpengalaman. Mereka membimbing kami dari nol hingga benar-benar siap menghadapi ujian kompetensi internasional.",
    author: "Diana Putri",
    position: "Alumni - Peserta Magang di Australia",
  },
  {
    id: 6,
    quote:
      "Kami bangga bermitra dengan LPK IGWI. Kualitas lulusannya konsisten and profesionalisme lembaga ini patut dicontoh oleh lembaga pelatihan lainnya.",
    author: "Ir. H. Ahmad",
    position: "Kepala Dinas Tenaga Kerja Wilayah",
  },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full px-5 md:px-12 lg:px-[100px] mt-20">
      <div className="bg-dark rounded-[30px] md:rounded-[45px] overflow-hidden py-10 md:py-[84px] px-6 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-[1240px] mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:pl-10 lg:basis-1/2"
              >
                <div className="flex flex-col gap-8 h-full">
                  <div className="relative">
                    <div className="bg-dark border border-green rounded-[45px] p-8 md:p-12 relative">
                      <p className="font-p font-[number:var(--p-font-weight)] text-white text-base md:text-lg tracking-[var(--p-letter-spacing)] leading-relaxed [font-style:var(--p-font-style)]">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      {/* Bubble Tail */}
                      <div className="absolute -bottom-4 left-12 w-8 h-8 bg-dark border-r border-b border-green rotate-45" />
                    </div>
                  </div>
                  <div className="pl-12 flex flex-col items-start gap-1">
                    <span className="font-h-4 font-[number:var(--h-4-font-weight)] text-green text-lg md:text-xl tracking-[var(--h-4-letter-spacing)] leading-tight">
                      {testimonial.author}
                    </span>
                    <span className="text-white text-base md:text-lg opacity-80">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center items-center gap-8 mt-16 md:mt-[124px]">
            <CarouselPrevious className="static translate-y-0 border-white text-white hover:bg-green hover:text-dark transition-colors" />
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2.5 h-2.5 rounded-full bg-white/20"
                />
              ))}
            </div>
            <CarouselNext className="static translate-y-0 border-white text-white hover:bg-green hover:text-dark transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
