import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function FeaturedEvents() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-orange-300 to-red-300 rounded-3xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610797168635-6719eb33b5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXZyYXRyaSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDMwMzczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Navratri Celebration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full">
              <span>⭐</span>
              <span>Featured Event</span>
            </div>

            <h2 className="text-orange-900">
              તમારા સ્વપ્નની ઉજવણી<br />
              આયોજન અને સજાવટ
            </h2>
            <h3 className="text-orange-700">Dream Event Planning & Decoration</h3>

            <p className="text-gray-700">
              અમે દરેક સમારંભને ખાસ બનાવીએ છીએ - પરંપરાગત રીતે અને આધુનિક શૈલીમાં. 
              લગ્નના મંડપથી લઈને નવરાત્રીના ગરબા સ્થળ સુધી, દિવાળીના દીવડાથી લઈને 
              જન્મદિવસની ઉજવણી સુધી - અમે તમારી દરેક જરૂરિયાતનું ધ્યાન રાખીએ છીએ.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-orange-900">પરંપરાગત અને આધુનિક સંયોજન</h4>
                  <p className="text-gray-600 text-sm">Traditional meets modern design aesthetics</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-orange-900">અનુભવી ટીમ</h4>
                  <p className="text-gray-600 text-sm">15+ years of experience in event management</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-orange-900">સંપૂર્ણ સમાધાન ગેરંટી</h4>
                  <p className="text-gray-600 text-sm">100% satisfaction guaranteed or full refund</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 rounded-full">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
