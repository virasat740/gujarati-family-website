import { Sparkles, Users, Utensils, Music, Camera, Gift } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "લગ્ન સમારંભ",
    subtitle: "Wedding Events",
    description: "સંપૂર્ણ લગ્ન આયોજન, મંડપ સજાવટ, અને પરંપરાગત વિધિઓ",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "નવરાત્રી ગરબા",
    subtitle: "Navratri Garba",
    description: "ગરબા સ્થળ સજાવટ, DJ અને પરંપરાગત વાતાવરણ",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Utensils,
    title: "ભોજન વ્યવસ્થા",
    subtitle: "Catering Services",
    description: "પરંપરાગત ગુજરાતી વાનગીઓ અને સ્વાદિષ્ટ મીઠાઈઓ",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Music,
    title: "સાંસ્કૃતિક કાર્યક્રમ",
    subtitle: "Cultural Events",
    description: "દિવાળી, હોળી, અને અન્ય તહેવારોની ઉજવણી",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Camera,
    title: "ફોટોગ્રાફી",
    subtitle: "Photography",
    description: "યાદગાર ક્ષણો કેદ કરવા પ્રોફેશનલ ફોટોગ્રાફી",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Gift,
    title: "પારિવારિક સમારંભ",
    subtitle: "Family Functions",
    description: "જન્મદિવસ, સગાઈ, અને પારિવારિક મિલન",
    color: "from-rose-500 to-red-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-900 mb-4">અમારી સેવાઓ / Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            પરંપરાગત ગુજરાતી સંસ્કૃતિ સાથે આધુનિક સુવિધાઓનું સંયોજન
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-orange-900 mb-1">{service.title}</h3>
              <p className="text-orange-600 text-sm mb-3">{service.subtitle}</p>
              <p className="text-gray-600">{service.description}</p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
                <svg viewBox="0 0 100 100" className="text-orange-600">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
