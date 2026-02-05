import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const navigationLinks = [
    { label: "About us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Use Cases", href: "/#use-cases" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/#blog" },
];

export const Navbar = (): JSX.Element => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full items-center justify-between px-5 md:px-12 lg:px-[100px] py-0 relative z-50"
        >
            <Link to="/" className="inline-flex items-center gap-3 px-0 py-2.5 relative flex-[0_0_auto]">
                <div className="relative flex items-center gap-3">
                    <img
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        alt="LPK IGWI Logo"
                        src="/logo-igwi.png"
                    />
                    <span className="font-h-2 font-[number:var(--h-3-font-weight)] text-black text-[24px] md:text-[28px] lg:text-[32px] leading-tight flex items-center h-full">
                        LPK IGWI
                    </span>
                </div>
            </Link>

            <div className="hidden lg:inline-flex items-center justify-center gap-10 relative flex-[0_0_auto]">
                {navigationLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="relative w-fit [font-family:'Space_Grotesk',Helvetica] font-normal text-[#000000] text-xl tracking-[0] leading-7 whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        {link.label}
                    </a>
                ))}

                <Button
                    variant="outline"
                    className="inline-flex items-center justify-center border border-solid border-[#191a23] px-[35px] py-[20px] rounded-[14px] bg-transparent hover:bg-[#191a23] hover:text-white transition-colors h-auto"
                >
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-normal text-xl text-center tracking-[0] leading-none whitespace-nowrap">
                        Request a quote
                    </span>
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
                variant="outline"
                className="lg:hidden border border-solid border-[#191a23] px-4 py-2 rounded-lg bg-transparent hover:bg-[#191a23] hover:text-white transition-colors"
            >
                <span className="text-lg">☰</span>
            </Button>
        </motion.nav>
    );
};
