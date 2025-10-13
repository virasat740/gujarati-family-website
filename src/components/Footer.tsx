import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600">🪔</span>
              </div>
              <div>
                <h3 className="text-white">શુભ સમારંભ</h3>
                <p className="text-white/80 text-sm">Shubh Samarambh</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              તમારા પરિવારના દરેક ખાસ પળને અદ્ભુત બનાવવા માટે અમે સમર્પિત છીએ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">ઝડપી લિંક્સ / Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="#home" className="hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">સેવાઓ / Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>લગ્ન સમારંભ / Weddings</li>
              <li>નવરાત્રી ગરબા / Navratri</li>
              <li>દિવાળી ઉજવણી / Diwali</li>
              <li>જન્મદિવસ / Birthdays</li>
              <li>પારિવારિક સમારંભ / Family Events</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white mb-4">અમને ફોલો કરો / Follow Us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              અમારા તાજા સમારંભો અને ઓફર્સ માટે અમને સોશિયલ મીડિયા પર ફોલો કરો.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © 2025 શુભ સમારંભ Events. All rights reserved. Made with <Heart className="w-4 h-4 inline fill-red-400 text-red-400" /> in Gujarat.
            </p>
            <div className="flex gap-6 text-white/70 text-sm">
              <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative pattern */}
      <div className="h-2 bg-gradient-to-r from-orange-500 via-yellow-500 via-red-500 to-orange-500" />
    </footer>
  );
}
