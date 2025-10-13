import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3J8ZW58MXx8fHwxNzYwMzAzNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Indian Wedding Decor",
    title: "લગ્ન સજાવટ"
  },
  {
    src: "https://images.unsplash.com/photo-1666244454829-7f0889ec5783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXdhbGklMjBsaWdodHMlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2MDIzNDcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Diwali Lights",
    title: "દિવાળી ઉજવણી"
  },
  {
    src: "https://images.unsplash.com/photo-1732259495388-af40b972c311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwY2F0ZXJpbmd8ZW58MXx8fHwxNzYwMzAzNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Indian Food Catering",
    title: "ભોજન વ્યવસ્થા"
  },
  {
    src: "https://images.unsplash.com/photo-1684814070823-97e0b9e99c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhuZGklMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjAzMDM3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Mehndi Ceremony",
    title: "મહેંદી સમારંભ"
  },
  {
    src: "https://images.unsplash.com/photo-1621787555718-ddea7123efa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByYW5nb2xpJTIwYXJ0fGVufDF8fHx8MTc2MDMwMzczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Rangoli Art",
    title: "રંગોળી સજાવટ"
  },
  {
    src: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0c3xlbnwxfHx8fDE3NjAyOTQwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Indian Sweets",
    title: "મીઠાઈ વિતરણ"
  },
  {
    src: "https://images.unsplash.com/photo-1603646316167-f29f06f51475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJiYSUyMGRhbmNlJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYwMzAzNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Garba Dance",
    title: "ગરબા નૃત્ય"
  },
  {
    src: "https://images.unsplash.com/photo-1639969267636-42f6cccd9477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW5kYXAlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2MDMwMzczM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Mandap Decoration",
    title: "મંડપ સજાવટ"
  },
  {
    src: "https://images.unsplash.com/photo-1759906760564-f9b2966e1c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzYwMzAzNzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Family Gathering",
    title: "પારિવારિક સમારંભ"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-orange-900 mb-4">અમારી ગેલેરી / Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            અમારા યાદગાર સમારંભોની ઝલક - દરેક ક્ષણ પ્રેમ અને આનંદથી ભરેલી
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white">{image.title}</h3>
              </div>
              
              {/* Decorative border on hover */}
              <div className="absolute inset-0 border-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">અમારી વધુ કૃતિઓ જોવા માટે અમને સંપર્ક કરો</p>
          <div className="inline-flex gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-full inline-block transition-all"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
