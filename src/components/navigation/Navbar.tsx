import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
    { label: "Tentang Kami", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Langkah Pelatihan", href: "#process" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
];

export const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const whatsappLink = "https://wa.me/6281122888855?text=Halo%20LPK%20IGWI%2C%20saya%20tertarik%20untuk%20mendaftar%20dan%20ingin%20konsultasi%20mengenai%20program%20pelatihan%20kerja%20luar%20negeri.";

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-dark/5" : "bg-transparent py-4 lg:py-6"
                    }`}
            >
                <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between px-5 md:px-10 lg:px-12 xl:px-[100px]">
                    <Link to="/" className="inline-flex items-center gap-2 md:gap-3 flex-shrink-0">
                        <img
                            className="w-8 h-8 md:w-10 md:h-10 lg:w-11 xl:w-12 object-contain"
                            alt="LPK IGWI Logo"
                            src="/logo-igwi.png"
                        />
                        <span className="font-bold text-black text-xl md:text-2xl xl:text-[32px] leading-tight font-h-2">
                            LPK IGWI
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:inline-flex items-center justify-center gap-4 xl:gap-8 relative">
                        {navigationLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="relative w-fit font-p font-medium text-black text-base xl:text-lg hover:text-green transition-colors cursor-pointer whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="border-2 border-dark px-4 xl:px-8 py-2 xl:py-2.5 rounded-[12px] bg-transparent hover:bg-dark hover:text-white transition-all font-bold text-base xl:text-lg h-auto whitespace-nowrap"
                            >
                                Daftar Sekarang
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-dark hover:bg-grey rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-white lg:hidden flex flex-col p-6 pt-24"
                    >
                        <button
                            onClick={toggleMenu}
                            className="absolute top-6 right-6 p-2 text-dark"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-6">
                            {navigationLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-dark hover:text-green transition-colors border-b border-dark/10 pb-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4"
                            >
                                <Button className="w-full bg-dark text-white py-6 rounded-[14px] text-xl font-bold shadow-[4px_4px_0px_0px_rgba(185,255,102,1)]">
                                    Daftar Sekarang
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
