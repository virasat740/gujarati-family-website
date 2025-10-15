import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20 px-6 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-orange-600">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full">
            <span>✨ આપની પરિવારની યાદગાર ક્ષણો માટે ✨</span>
          </div>
          
          <h1 className="text-orange-900">
            પરિવાર સાથે સંપૂર્ણ<br />
            સમારંભ આયોજન
          </h1>
          <h2 className="text-orange-700">Perfect Family Event Planning</h2>
          
          <p className="text-gray-700">
            લગ્ન, નવરાત્રી, દિવાળી, જન્મદિવસ અને દરેક પારિવારિક સમારંભને 
            યાદગાર બનાવવા માટે અમે અહીં છીએ. અમારી પરંપરાગત સેવાઓ સાથે 
            તમારા સ્વપ્નનો કાર્યક્રમ સાકાર કરો.
          </p>

          <div className="flex flex-wrap gap-4 hero-btn">
            {/* <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 rounded-full">
              Book Your Event
            </Button> */}
            {/* <Button variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-full">
              View Gallery
            </Button> */}
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-full inline-block transition-all"
            >
              Book Your Event
            </a>
            <a href="#gallery" className="btn-gallery">View Gallery</a>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-orange-600">300+</div>
              <p className="text-gray-600 text-sm">Happy Families</p>
            </div>
            <div className="w-px h-12 bg-orange-300" />
            <div>
              <div className="text-orange-600">6+</div>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-orange-300" />
            <div>
              <div className="text-orange-600">500+</div>
              <p className="text-gray-600 text-sm">Events Planned</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-50 blur-xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-50 blur-xl" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1645856052472-95fe99103c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwMzAzNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indian Wedding Celebration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 -left-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-orange-200 animate-bounce">
            <p className="text-orange-600">🎉</p>
          </div>
          <div className="absolute bottom-1/4 -right-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-red-200 animate-bounce delay-150">
            <p className="text-red-600">💐</p>
          </div>
        </div>
      </div>
    </section>
  );
}
