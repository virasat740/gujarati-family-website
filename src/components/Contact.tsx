import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-900 mb-4">સંપર્ક કરો / Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            તમારા સ્વપ્નનો સમારંભ સાકાર કરવા આજે જ અમને સંપર્ક કરો
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100">
            <h3 className="text-orange-900 mb-6">તમારી માહિતી આપો / Send Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="text-gray-700 mb-2 block">નામ / Name</label>
                <Input 
                  placeholder="તમારું પૂરું નામ"
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-700 mb-2 block">ફોન નંબર / Phone</label>
                <Input 
                  type="tel"
                  placeholder="+91 95129 20785"
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-700 mb-2 block">ઈમેલ / Email</label>
                <Input 
                  type="email"
                  placeholder="example@gmail.com"
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-700 mb-2 block">સમારંભનો પ્રકાર / Event Type</label>
                <Input 
                  placeholder="લગ્ન, નવરાત્રી, દિવાળી, જન્મદિવસ..."
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="text-gray-700 mb-2 block">સંદેશ / Message</label>
                <Textarea 
                  placeholder="તમારી જરૂરિયાતો વિશે અમને જણાવો..."
                  rows={4}
                  className="border-orange-200 focus:border-orange-500"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 rounded-full">
                મોકલો / Submit Request
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-orange-900 mb-2">ફોન કરો / Call Us</h4>
                  <p className="text-gray-600">+91 95129 20785</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-orange-900 mb-2">ઈમેલ કરો / Email Us</h4>
                  <p className="text-gray-600">info@shubhsamarambh.com</p>
                  <p className="text-gray-600">events@shubhsamarambh.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-orange-900 mb-2">સરનામું / Address</h4>
                  <p className="text-gray-600">
                    123, રધુવીર સોસાયટી,<br />
                    અમરોલી, સુરત- 394107,<br />
                    ગુજરાત, ભારત
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-orange-900 mb-2">સમય / Timing</h4>
                  <p className="text-gray-600">સોમવાર - રવિવાર</p>
                  <p className="text-gray-600">સવારે 9:00 - રાત્રે 9:00</p>
                </div>
              </div>
            </div>

            {/* Special offer box */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="text-white mb-4">🎉 ખાસ ઓફર!</h3>
              <p className="mb-4">
                આ મહિને બુક કરો અને મેળવો 15% ડિસ્કાઉન્ટ તમારા પ્રથમ સમારંભ પર!
              </p>
              <p className="text-sm text-white/80">
                Special Offer: Book this month and get 15% discount on your first event!
              </p>
              <div className="mt-6 pt-6 border-t border-white/30">
                <p className="text-sm">Offer valid till: 31st October 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
