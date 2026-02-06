import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, Target, Flag, Globe } from "lucide-react";

const coreValues = [
    {
        title: "Integritas",
        desc: "Jujur, bertanggung jawab, dan beretika",
        icon: Shield,
    },
    {
        title: "Profesionalisme",
        desc: "Bekerja sesuai standar internasional",
        icon: Zap,
    },
    {
        title: "Disiplin",
        desc: "Tepat waktu, taat prosedur, konsisten",
        icon: CheckCircle2,
    },
    {
        title: "Nasionalisme",
        desc: "Bangga sebagai tenaga kerja Indonesia",
        icon: Flag,
    },
    {
        title: "Adaptif Global",
        desc: "Siap menghadapi perubahan lintas negara",
        icon: Globe,
    },
];

const missions = [
    "Menyelenggarakan pelatihan kerja sesuai kebutuhan industri global.",
    "Membekali peserta dengan keterampilan, bahasa, dan budaya kerja internasional.",
    "Menanamkan nilai disiplin, etos kerja, integritas, dan nasionalisme.",
    "Menjadi mitra strategis dunia usaha dan lembaga penempatan luar negeri.",
    "Mendukung program pemerintah dalam daya saing tenaga kerja Indonesia.",
];

export const ValuesSection = (): JSX.Element => {
    return (
        <section className="flex flex-col w-full max-w-[1440px] mx-auto px-5 md:px-12 lg:px-[100px] mt-20 md:mt-28 lg:mt-[140px] gap-20">
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-green p-10 md:p-14 rounded-[45px] border-2 border-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center items-center text-center"
                >
                    <Target className="w-16 h-16 mb-6 text-dark" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Visi Kami</h2>
                    <p className="text-xl md:text-2xl font-medium leading-tight">
                        “Menjadi lembaga pelatihan kerja nasional yang unggul dalam mencetak tenaga kerja Indonesia berstandar global dan berkarakter kebangsaan.”
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Misi Kami</h2>
                    <div className="space-y-5">
                        {missions.map((mission, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green shrink-0 mt-1" />
                                <p className="text-lg font-p">{mission}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Core Values */}
            <div className="flex flex-col gap-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Core Values</h2>
                    <p className="text-lg text-black/60 max-w-2xl mx-auto">
                        Nilai-nilai utama yang menjadi fondasi dalam setiap pelatihan di LPK IGWI.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-white border border-dark rounded-[30px] hover:bg-dark hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center flex flex-col items-center"
                        >
                            <div className="w-14 h-14 bg-green rounded-2xl flex items-center justify-center mb-6 border border-dark group-hover:rotate-6 transition-transform">
                                <value.icon className="w-8 h-8 text-dark" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                            <p className="text-sm leading-snug group-hover:text-white/80">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
