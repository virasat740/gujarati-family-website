import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "પ્રિયંકા પટેલ",
    nameLatin: "Priyanka Patel",
    location: "અમદાવાદ",
    rating: 5,
    text: "અમારા લગ્નને અદ્ભુત બનાવ્યા બદલ ખૂબ ખૂબ આભાર! દરેક વિગત પરફેક્ટ હતી. પરંપરાગત અને આધુનિક બંનેનું સુંદર મિશ્રણ.",
    textEn: "Thank you for making our wedding amazing! Every detail was perfect. Beautiful blend of traditional and modern."
  },
  {
    name: "રાજેશ શાહ",
    nameLatin: "Rajesh Shah",
    location: "સુરત",
    rating: 5,
    text: "નવરાત્રી ગરબાનું આયોજન ખૂબ સરસ રહ્યું. મહેમાનો ખૂબ ખુશ થયા. સજાવટ અને વાતાવરણ લાજવાબ હતું!",
    textEn: "Navratri Garba planning was excellent. Guests were very happy. The decoration and atmosphere were amazing!"
  },
  {
    name: "નીતા દેસાઈ",
    nameLatin: "Neeta Desai",
    location: "વડોદરા",
    rating: 5,
    text: "પુત્રીના જન્મદિવસને યાદગાર બનાવ્યો. બધી વ્યવસ્થા સારી રીતે થઈ. ખાસ કરીને ભોજનની વ્યવસ્થા એકદમ સ્વાદિષ્ટ!",
    textEn: "Made my daughter's birthday memorable. All arrangements were well done. Especially the food was delicious!"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-900 mb-4">ખુશ પરિવારો / Happy Families</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            અમારા ગ્રાહકો શું કહે છે - તેમના અનુભવો તેમના શબ્દોમાં
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-16 h-16 text-orange-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Testimonial text */}
              <div className="space-y-4 mb-6 relative z-10">
                <p className="text-gray-700 italic">{testimonial.text}</p>
                <p className="text-gray-500 text-sm italic">{testimonial.textEn}</p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t-2 border-orange-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-orange-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.nameLatin}</p>
                  <p className="text-orange-600 text-sm">📍 {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">તમારો અનુભવ શેર કરો અને અમારા પરિવારનો ભાગ બનો!</p>
        </div>
      </div>
    </section>
  );
}
