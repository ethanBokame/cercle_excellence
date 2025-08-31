import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === "/";
    const desktopTextColor = isLandingPage
        ? "lg:text-white"
        : "lg:text-secondary";
    const hoverColor = "hover:text-casaf-copper";
    const mobileBurgerColor = isLandingPage ? "text-white" : "text-secondary";

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Overlay mobile */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden ${
                    isMobileMenuOpen
                        ? "opacity-50 z-40"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            <nav className="flex justify-between items-center py-6 px-4 lg:px-10 relative z-50">
                <Link to="/">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-auto h-12 lg:h-16"
                    />
                </Link>

                {/* Burger menu */}
                <button
                    className={`lg:hidden z-50 ${
                        !isMobileMenuOpen ? mobileBurgerColor : "text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={
                        isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                    }
                >
                    {isMobileMenuOpen ? (
                        <X size={28} className="text-white" />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

                {/* Desktop menu */}
                {/* <div
                    className={`hidden lg:flex gap-8 text-lg font-medium items-center mr-2`}
                >
                    <Link
                        to="/"
                        className={`transition-colors ${desktopTextColor} ${hoverColor}`}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/a-propos"
                        className={`transition-colors ${desktopTextColor} ${hoverColor}`}
                    >
                        À propos
                    </Link>
                    <Link
                        to="/activites"
                        className={`transition-colors ${desktopTextColor} ${hoverColor}`}
                    >
                        Activités
                    </Link>
                    <Link
                        to="/equipe"
                        className={`transition-colors ${desktopTextColor} ${hoverColor}`}
                    >
                        Équipe
                    </Link>
                    <Link
                        to="/#contact"
                        className={`transition-colors ${desktopTextColor} ${hoverColor}`}
                    >
                        Contact
                    </Link>
                </div> */}

                {/* Mobile menu */}
                <div
                    className={`transform transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    } lg:translate-x-0 lg:transform-none flex flex-col lg:flex-row fixed lg:relative top-0 right-0 h-full lg:h-auto bg-primary lg:bg-transparent pt-20 lg:pt-0 items-start lg:items-center gap-6 lg:gap-8 w-64 lg:w-auto px-6 lg:px-0 z-40 shadow-lg lg:shadow-none`}
                >
                    <Link
                        to="/"
                        className={`text-white text-lg font-medium ${hoverColor}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/a-propos"
                        className={`text-white text-lg font-medium ${hoverColor}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        À propos
                    </Link>
                    <Link
                        to="/activites"
                        className={`text-white text-lg font-medium ${hoverColor}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Activités
                    </Link>
                    <Link
                        to="/equipe"
                        className={`text-white text-lg font-medium ${hoverColor}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Équipe
                    </Link>
                    <Link
                        to="/#contact"
                        className={`text-white text-lg font-medium ${hoverColor}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
