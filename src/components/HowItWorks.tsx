import { Phone, Calendar, Palette, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "પહેલું પગલું",
    title: "અમને કૉલ કરો",
    subtitle: "Contact Us",
    description: "તમારા સ્વપ્ન અને જરૂરિયાતો અમને જણાવો. અમે તમારી સાથે વાતચીત કરીશું.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    step: "બીજું પગલું",
    title: "તારીખ પસંદ કરો",
    subtitle: "Choose Date",
    description: "તમારા માટે યોગ્ય તારીખ અને સ્થળ પસંદ કરો. અમે તમને મદદ કરીશું.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Palette,
    step: "ત્રીજું પગલું",
    title: "થીમ અને ડિઝાઇન",
    subtitle: "Design & Theme",
    description: "તમારી પસંદગી અનુસાર થીમ, રંગ અને સજાવટ પસંદ કરો.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: PartyPopper,
    step: "ચોથું પગલું",
    title: "ઉજવણી કરો!",
    subtitle: "Celebrate!",
    description: "આરામથી બેસો અને તમારા સમારંભનો આનંદ માણો. બાકીનું અમારા પર છોડી દો!",
    color: "from-purple-500 to-violet-500"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-900 mb-4">કેવી રીતે કામ કરે છે? / How Does It Work?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            માત્ર 4 સરળ પગલાંમાં તમારા સમારંભને અદ્ભુત બનાવો
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-red-300 to-purple-300 mx-32" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 hover:-translate-y-2 relative z-10">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 relative`}>
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-orange-600">{index + 1}</span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-orange-600 text-sm">{step.step}</p>
                  <h3 className="text-orange-900">{step.title}</h3>
                  <p className="text-orange-700 text-sm">{step.subtitle}</p>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 rounded-3xl shadow-xl border-4 border-orange-200">
            <p className="text-orange-900 mb-2">તૈયાર છો? / Ready to start?</p>
            <p className="text-gray-600 mb-6">આજે જ અમને સંપર્ક કરો અને તમારા સ્વપ્નનો સમારંભ સાકાર કરો</p>
            <a
              href="tel:+919876543210"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full inline-block transition-all"
            >
              📞 Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
