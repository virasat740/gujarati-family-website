import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-orange-600">🪔</span>
          </div>
          <div>
            <h1 className="text-white">શુભ સમારંભ</h1>
            <p className="text-white/80 text-sm">Shubh Samarambh Events</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#services" className="hover:text-yellow-300 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+919512920785" className="hidden md:flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 95129 20785</span>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
