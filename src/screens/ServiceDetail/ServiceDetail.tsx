import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "../../components/navigation/Navbar";
import { FooterSection } from "../Home/sections/FooterSection";
import { servicesContent } from "../../data/services";
import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export const ServiceDetail = (): JSX.Element => {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? servicesContent[slug] : null;

    if (!service) {
        return <Navigate to="/" replace />;
    }

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-white overflow-x-hidden w-full flex flex-col min-h-screen">
            <div className="pt-8">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="px-5 md:px-12 lg:px-[100px] mt-12 md:mt-20 lg:mt-[100px] max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-h-1 font-[number:var(--h-1-font-weight)] text-black mb-6 leading-tight">
                            {service.heroTitle}
                        </h1>
                        <p className="text-lg md:text-xl font-p font-[number:var(--p-font-weight)] text-black opacity-80 mb-8 max-w-2xl">
                            {service.heroDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex-1 relative flex justify-center lg:justify-end w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full max-w-[550px] flex items-center justify-center">
                            <img src={service.heroImages[0]} alt="Hero" className="w-full h-auto object-contain" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-5 md:px-12 lg:px-[100px] my-20 lg:my-32 max-w-[1440px] mx-auto w-full">
                <motion.div
                    className="flex flex-wrap justify-between gap-8 py-10 border-t border-b border-black/10"
                    variants={fadeIn}
                    {...fadeIn}
                >
                    {service.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center flex-1 min-w-[150px]">
                            <span className="text-3xl md:text-4xl font-h-2 font-[number:var(--h-2-font-weight)] text-black">{stat.value}</span>
                            <span className="text-base text-black/60 text-center">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Journey / Timeline Section */}
            <section className="px-5 md:px-12 lg:px-[100px] mb-20 lg:mb-32 max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col gap-6 md:gap-10 mb-12">
                    <Badge className="bg-green hover:bg-green text-black px-4 py-1 rounded-lg w-fit">
                        Our Journey
                    </Badge>
                    <p className="text-lg text-black max-w-2xl">Langkah-langkah terstruktur dalam proses pelatihan di LPK IGWI</p>
                </div>

                <div className="space-y-8">
                    {service.journey.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start"
                            {...fadeIn}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="text-4xl md:text-5xl font-h-2 font-[number:var(--h-2-font-weight)] text-black min-w-[120px]">
                                {item.year}
                            </div>
                            <div className="bg-dark text-white p-8 md:p-10 rounded-[30px] md:rounded-[45px] flex-1 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-6 h-6 bg-green rounded-sm" />
                                    <h3 className="text-xl md:text-2xl font-h-3 font-[number:var(--h-3-font-weight)]">{item.title}</h3>
                                </div>
                                <p className="text-lg opacity-80">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Core Values Section */}
            <section className="px-5 md:px-12 lg:px-[100px] mb-20 lg:mb-32 max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col gap-6 md:gap-10 mb-12">
                    <Badge className="bg-green hover:bg-green text-black px-4 py-1 rounded-lg w-fit">
                        Core Values
                    </Badge>
                    <p className="text-lg text-black max-w-2xl">Nilai-nilai utama yang kami tanamkan pada setiap peserta pelatihan</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.coreValues.map((value, i) => (
                        <motion.div
                            key={i}
                            className="border border-black rounded-[45px] p-8 md:p-12 shadow-[0px_5px_0px_#000000] flex flex-col md:flex-row justify-between"
                            {...fadeIn}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex-1">
                                <h4 className="text-2xl font-h-3 font-[number:var(--h-3-font-weight)] mb-4">{value.title}</h4>
                                <div className="w-full h-px bg-black/10 my-4 lg:hidden" />
                                <p className="text-black/60">{value.description}</p>
                            </div>
                            <div className="hidden lg:flex flex-shrink-0 items-center justify-end w-32">
                                <img src={value.icon} alt={value.title} className="w-16 h-16 object-contain" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section className="px-5 md:px-12 lg:px-[100px] mb-20 lg:mb-32 max-w-[1440px] mx-auto w-full">
                <motion.div
                    className="bg-dark text-white p-12 lg:p-20 rounded-[45px] relative overflow-hidden"
                    {...fadeIn}
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <span className="text-5xl md:text-8xl opacity-20 absolute -top-4 -left-4">"</span>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-h-3 italic font-medium leading-relaxed mb-10">
                                {service.quote.text}
                            </p>
                            <div>
                                <h5 className="text-xl font-bold">— {service.quote.author}</h5>
                                <p className="text-black/60 text-green">{service.quote.role}</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 bg-green rounded-full flex items-center justify-center p-4">
                            <img src="/logo-igwi.png" alt="Avatar" className="w-[70%] h-auto invert" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Awards Section */}
            <section className="px-5 md:px-12 lg:px-[100px] mb-20 lg:mb-32 max-w-[1440px] mx-auto w-full">
                <div className="flex flex-col gap-6 md:gap-10 mb-12">
                    <Badge className="bg-green hover:bg-green text-black px-4 py-1 rounded-lg w-fit">
                        Awards & Recognition
                    </Badge>
                    <p className="text-lg text-black max-w-2xl">Pengakuan atas kualitas dan standar pelatihan kami</p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
                    {service.awards.map((award, i) => (
                        <motion.div
                            key={i}
                            className="w-32 md:w-48 flex items-center justify-center"
                            {...fadeIn}
                            transition={{ delay: i * 0.1 }}
                        >
                            <img src={award} alt="Award" className="w-full h-auto grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-5 md:px-12 lg:px-[100px] mb-20 max-w-[1440px] mx-auto w-full">
                <motion.div
                    className="bg-green rounded-[45px] p-10 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-10"
                    {...fadeIn}
                >
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-h-2 font-bold mb-6">Mulai Perjalanan Anda Bersama LPK IGWI Sekarang</h2>
                        <p className="text-lg opacity-80 mb-8">Dapatkan konsultasi gratis dan informasi detail mengenai program ini.</p>
                        <Button className="bg-dark hover:bg-dark/90 text-white rounded-[14px] px-8 py-6 h-auto text-xl">
                            Hubungi Kami
                        </Button>
                    </div>
                    <div className="hidden lg:block w-72">
                        <img src="/tokyo-many-browser-windows-with-different-information-1.png" alt="CTA" className="w-full h-auto" />
                    </div>
                </motion.div>
            </section>

            <FooterSection />
        </div>
    );
};
