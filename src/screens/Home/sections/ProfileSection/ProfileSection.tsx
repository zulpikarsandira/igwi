import { motion } from "framer-motion";

const philosophyItems = [
    {
        title: "Indonesia",
        description: "Menegaskan identitas kebangsaan dan komitmen bahwa setiap lulusan IGWI adalah duta tenaga kerja Indonesia di tingkat global.",
        color: "bg-white",
    },
    {
        title: "Global",
        description: "Mencerminkan orientasi internasional, kesiapan menghadapi standar kerja dunia, serta keterbukaan terhadap budaya global.",
        color: "bg-green",
    },
    {
        title: "Workforce",
        description: "Fokus utama dalam membentuk tenaga kerja siap pakai yang terampil secara teknis, mental, disiplin, dan etos kerja.",
        color: "bg-white",
    },
    {
        title: "Institute",
        description: "Menegaskan IGWI sebagai lembaga pendidikan dan pelatihan yang terstruktur, profesional, dan berstandar institusional.",
        color: "bg-green",
    },
];

export const ProfileSection = (): JSX.Element => {
    return (
        <section className="flex flex-col w-full max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[100px] mt-20 md:mt-28 lg:mt-[140px] gap-12">
            <div className="flex flex-col gap-10 items-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-h-1">Profil Lembaga</h2>
                    <p className="text-xl text-black/80 leading-relaxed font-p">
                        LPK Indonesia Global Workforce Institute (IGWI) merupakan lembaga pelatihan kerja yang berfokus pada pembinaan dan pengembangan sumber daya manusia Indonesia agar siap bekerja di pasar kerja global.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        <div className="p-8 bg-white border-2 border-dark rounded-[30px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <h4 className="font-bold text-2xl mb-3 text-green bg-dark inline-block px-4 py-1 rounded-lg">Sasaran Peserta</h4>
                            <p className="text-lg">Alumni SMK, SMA, Paket C, dan masyarakat usia produktif.</p>
                        </div>
                        <div className="p-8 bg-white border-2 border-dark rounded-[30px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <h4 className="font-bold text-2xl mb-3 text-green bg-dark inline-block px-4 py-1 rounded-lg">Wilayah Kerja</h4>
                            <p className="text-lg">Nasional dan Internasional (Jepang, Eropa, Jerman, Korea, Australia, dll).</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Filosofi Nama IGWI</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {philosophyItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-[30px] border border-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${item.color}`}
                        >
                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                            <p className="text-base leading-snug">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
