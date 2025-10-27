import Link from "next/link";
import { GrMap } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { SiGmail } from "react-icons/si";



export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <img
                        src="/aset/logo/Taxinet logo 1 6.png"
                        alt="Taxinet Logo"
                        className="w-32 h-auto mb-4"
                    />

                </div>

                {/* Taxi Services */}
                <div>

                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/">Leerlingenvervoer</Link></li>
                        <li><Link href="/">Trouwvervoer</Link></li>
                        <li><Link href="/">Taxi Den Haag - Schiphol</Link></li>
                        <li><Link href="/">Groepsvervoer</Link></li>
                        <li><Link href="/">Rolstoel Taxi</Link></li>
                        <li><Link href="/">Hotel Taxi Service</Link></li>
                    </ul>
                </div>

                {/* Service Areas */}
                <div>

                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/">Taxi service Den haag</Link></li>
                        <li><Link href="/">Taxi service Rotterdam</Link></li>
                        <li><Link href="/">Taxi service Barendrecht</Link></li>   
                        <li><Link href="/">Taxi service schiedam</Link></li>   
                        <li><Link href="/">Taxi service Hoogvliet</Link></li>   
                        <li><Link href="/">Taxi service spijkenisse</Link></li>   
                        <li><Link href="/">Taxi service brielle</Link></li>   
                        <li><Link href="/">Taxi service geervliet</Link></li>   
                    </ul>
                </div>

                {/* Company Links */}
                <div>

                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/">Overons</Link></li>
                        <li><Link href="/">Nieuws</Link></li>
                        <li><Link href="/">Direct Reserveren</Link></li>
                        <li><Link href="/">Taxi Den Haag-Contact</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="flex space-x-13 mt-10 justify-around">
                <Link
                    href="https://www.google.com/maps/place/Rederijkerstraat+159,+2531+VK+Den+Haag,+Netherlands"

                    className="flex items-center gap-2  "
                >
                    <GrMap className=" " />
                    Rederijkertsraat 159, 2531VK Den Haag, Nederland
                </Link>

                <div className="flex gap-2 items-center">
                    <LuPhoneCall
                        className=" " /> 0858000365
                </div>

                <div className="flex gap-2 items-center">
                    <SiGmail className=" " /> info@taxinet.nl
                </div>

                <div className="items-center">
                    Kvknummer - 94898499
                </div>

                <div>
                    Voorwaarden | Privacy | Sitemap
                </div>
            </div>
        </footer>
    );
}
