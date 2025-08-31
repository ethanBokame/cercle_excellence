import Navbar from "../components/Navbar";

function AccueilPage() {
    return (
        <div className="bg-black">
            <div className="bg-[url('/image_4.avif')] bg-[length:210%_210%]  bg-center h-[80vh] lg:h-[103vh]">
                <Navbar />
                <p className="text-white text-3xl lg:text-5xl text-center font-bold px-4 mt-16 lg:mt-0">
                    CERCLE D'<span className=" text-secondary">EXCELLENCE</span>
                </p>
                <p className="text-white text-xl lg:text-3xl text-center mt-5 px-4">
                    NOTRE VOCATION: FAIRE DE L'
                    <span className=" text-secondary">EXCELLENCE</span> UNE
                    NORME
                </p>
                <p className="text-center mt-24 font-dancing text-secondary text-lg px-4">
                    Investir dans la jeunesse africaine pour le développement du
                    continent africain
                </p>
                <img src="/afrique.png" className="mx-auto mt-6 h-8" />
            </div>

            <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-12 lg:py-16 gap-10 lg:gap-20 bg-black text-white">
                <img
                    className="w-full lg:w-[500px] rounded-lg shadow-lg"
                    src="/image_1.avif"
                />
                <div className="flex flex-col gap-4 items-baseline">
                    <p className="font-medium text-secondary mb-1">
                        A propos de nous
                    </p>
                    <p className="font-extrabold text-xl">
                        CERCLE D'EXCELLENCE : <br /> Faire de l'{" "}
                        <span className="font-dancing text-secondary font-medium">
                            excellence
                        </span>{" "}
                        une norme
                    </p>
                    <p>
                        Bienvenue au Cercle d’Excellence, votre partenaire dédié
                        à l’intégration, au développement et à l’épanouissement
                        de la jeunesse africaine. Ensemble, nous bâtissons un
                        réseau solide, fondé sur l’excellence, l’ouverture et le
                        leadership, pour inspirer, connecter et transformer les
                        générations présentes et futures.
                    </p>
                    <a
                        href="/a-propos"
                        className="px-3 py-2 border-[1px] mt-auto border-secondary border-solid rounded-md hover:bg-casaf-copper hover:text-white transition duration-150"
                    >
                        En savoir plus
                    </a>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-12 lg:py-16 gap-10 lg:gap-20 bg-black text-white">
                {/* Card: Conférences */}
                <div className="flex-1 bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200 border border-secondary/30">
                    <img
                        src="/conference.svg"
                        alt="Conférences"
                        className="h-20 mb-4"
                    />
                    <h3 className="text-xl font-bold text-secondary mb-2">
                        Conférences
                    </h3>
                    <p className="text-center text-sm opacity-80">
                        Rencontres inspirantes avec des experts pour élargir les
                        horizons et encourager l’excellence.
                    </p>
                </div>
                {/* Card: Ateliers */}
                <div className="flex-1 bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200 border border-secondary/30">
                    <img
                        src="/atelier.svg"
                        alt="Ateliers"
                        className="h-20 mb-4"
                    />
                    <h3 className="text-xl font-bold text-secondary mb-2">
                        Ateliers
                    </h3>
                    <p className="text-center text-sm opacity-80">
                        Sessions interactives pour développer des compétences
                        clés et partager des expériences concrètes.
                    </p>
                </div>
                {/* Card: Mentorat */}
                <div className="flex-1 bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200 border border-secondary/30">
                    <img
                        src="/mentorat.svg"
                        alt="Mentorat"
                        className="h-20 mb-4"
                    />
                    <h3 className="text-xl font-bold text-secondary mb-2">
                        Mentorat
                    </h3>
                    <p className="text-center text-sm opacity-80">
                        Accompagnement personnalisé par des mentors pour
                        accélérer la réussite et élargir son réseau.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center px-4 lg:px-10 py-12 lg:py-16 bg-black text-white">
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-10 text-center">
                    L'équipe dirigeante
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-center">
                    {/* Card Président */}
                    <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform duration-200 border border-secondary/30">
                        <img
                            src="/mena.jpg"
                            alt="Président"
                            className="w-28 h-28 rounded-full object-cover border-4 border-secondary mb-4 shadow-md"
                        />
                        <h3 className="text-lg font-bold text-secondary mb-1">
                            Président
                        </h3>
                        <p className="text-center text-sm opacity-80">
                            Maynard Yao-Kouassi
                        </p>
                    </div>
                    {/* Card Vice-président */}
                    <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform duration-200 border border-secondary/30">
                        <img
                            src="/mena.jpg"
                            alt="Vice président"
                            className="w-28 h-28 rounded-full object-cover border-4 border-secondary mb-4 shadow-md"
                        />
                        <h3 className="text-lg font-bold text-secondary mb-1">
                            Vice-président
                        </h3>
                        <p className="text-center text-sm opacity-80">
                            Maynard Yao-Kouassi
                        </p>
                    </div>
                    {/* Card Secrétaire */}
                    <div className="bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs hover:scale-105 transition-transform duration-200 border border-secondary/30">
                        <img
                            src="/mena.jpg"
                            alt="Secrétaire"
                            className="w-28 h-28 rounded-full object-cover border-4 border-secondary mb-4 shadow-md"
                        />
                        <h3 className="text-lg font-bold text-secondary mb-1">
                            Secrétaire
                        </h3>
                        <p className="text-center text-sm opacity-80">
                            Maynard Yao-Kouassi
                        </p>
                    </div>
                </div>
            </div>
            {/* Formulaire de contact */}
            <div className="bg-black text-white px-4 lg:px-10 py-16 flex flex-col items-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-8 text-center">
                    Contactez-nous
                </h2>
                <form className="w-full max-w-lg bg-[#18181b] rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-secondary/30">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nom" className="text-sm font-semibold">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            required
                            className="rounded-md px-4 py-2 bg-black border border-secondary/30 focus:outline-none focus:border-secondary text-white"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-semibold"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="rounded-md px-4 py-2 bg-black border border-secondary/30 focus:outline-none focus:border-secondary text-white"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-semibold"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="rounded-md px-4 py-2 bg-black border border-secondary/30 focus:outline-none focus:border-secondary text-white resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-secondary text-black font-bold py-2 rounded-md hover:bg-casaf-copper transition duration-150"
                    >
                        Envoyer
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer className="bg-[#18181b] text-white py-8 px-4 flex flex-col items-center border-t border-secondary/30 mt-8">
                <img
                    src="/logo.png"
                    alt="Logo Cercle d'Excellence"
                    className="h-12 mb-3"
                />
                <p className="text-center text-sm opacity-70">
                    &copy; {new Date().getFullYear()} Cercle d'Excellence. Tous
                    droits réservés.
                </p>
            </footer>
        </div>
    );
}

export default AccueilPage;
