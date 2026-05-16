import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  ChevronRight, 
  ChefHat,
  CreditCard
} from "lucide-react";

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  unit: "kg" | "unidad";
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: "pollo",
    name: "Pollo Rostizado",
    price: 550,
    unit: "unidad",
    description: "Pollo rostizado a la leña, jugoso y con piel crocante.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "carne",
    name: "Carne (Corte de Primera)",
    price: 480,
    unit: "kg",
    description: "Cortes seleccionados de novillo, frescura garantizada.",
    image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "chorizo",
    name: "Chorizo de Cerdo",
    price: 320,
    unit: "kg",
    description: "Chorizo tradicional, ideal para choripán o parrilla.",
    image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cordero",
    name: "Cordero",
    price: 290,
    unit: "kg",
    description: "Cordero tierno, ideal para la parrilla o al horno.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pechuga",
    name: "Pechuga de Pollo",
    price: 235,
    unit: "kg",
    description: "Pechuga fresca y limpia, lista para cocinar.",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "muslos",
    name: "Muslos de Pollo",
    price: 140,
    unit: "kg",
    description: "Muslos seleccionados, el sabor más intenso del pollo.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mondongo",
    name: "Mondongo",
    price: 210,
    unit: "kg",
    description: "Mondongo de primera, ideal para tus guisos tradicionales.",
    image: "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?q=80&w=800&auto=format&fit=crop"
  }
];

const WHATSAPP_NUMBER = "59894211672"; 

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedWeights, setSelectedWeights] = useState<Record<string, number>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const orderProduct = (product: Product) => {
    const weight = product.unit === "kg" ? (selectedWeights[product.id] || 1) : 1;
    const weightStr = product.unit === "kg" ? ` (${weight >= 1 ? weight + 'kg' : weight * 1000 + 'g'})` : "";
    const message = `Hola! Me gustaría pedir: *${product.name}${weightStr}*.%0A%0A¡Muchas gracias!`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 font-sans selection:bg-[#FF0000] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-xl" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-black tracking-tighter"
          >
            <span className="text-[#D4AF37]">ALFONSO</span>
          </motion.h1>
          
          <div className="hidden md:flex gap-12 items-center text-sm uppercase tracking-[0.4em] font-black text-stone-400">
            <a href="#menu" className="hover:text-[#D4AF37] transition-colors">Menú</a>
            <a href="#ubicacion" className="hover:text-[#D4AF37] transition-colors">Ubicación</a>
            <a href="#contacto" className="hover:text-[#D4AF37] transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544022613-e87a0371a542?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Butcher shop background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-[15rem] font-display leading-tight mb-8 uppercase tracking-[0.05em] scale-x-110 origin-center">
              <span className="block text-[#FF0000] drop-shadow-[0_10px_20px_rgba(255,0,0,0.5)]">LO DEL</span>
              <span className="block text-[#FF0000] drop-shadow-[0_10px_20px_rgba(255,0,0,0.5)]">ALFONSO</span>
            </h2>
            <p className="text-xl md:text-3xl text-stone-200 font-bold tracking-[0.2em] mb-12 uppercase italic">
              Tradición Carnicera • Calidad Superior
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#menu" 
                className="px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold rounded-full transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,0,0,0.3)]"
              >
                Ver Recomendaciones
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold rounded-full transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Grill Section */}
      <section className="py-24 bg-stone-950 border-b border-stone-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FF0000] text-sm font-black tracking-[0.5em] uppercase mb-4 block">Especialidad</span>
              <h3 className="text-5xl md:text-7xl font-display uppercase italic tracking-tighter mb-6">PARRILLA DEL DÍA</h3>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                Cada día encendemos el fuego con leña seleccionada para ofrecerte el sabor más auténtico. 
                Vení y disfrutá de nuestros cortes recién salidos de la parrilla.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-6 bg-stone-900 rounded-3xl border border-stone-800">
                  <span className="text-[#D4AF37] font-black block mb-2">PULPÓN</span>
                  <p className="text-xs text-stone-500 uppercase">Al punto justo</p>
                </div>
                <div className="flex-1 p-6 bg-stone-900 rounded-3xl border border-stone-800">
                  <span className="text-[#D4AF37] font-black block mb-2">ASADO</span>
                  <p className="text-xs text-stone-500 uppercase">Corte de exportación</p>
                </div>
              </div>
            </motion.div>
            <div className="relative max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
                className="rounded-[3rem] shadow-2xl border border-stone-800 w-full"
                alt="Parrilla en acción"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FF0000] p-8 rounded-full shadow-xl">
                 <ChefHat className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[#D4AF37] text-xs font-black tracking-[0.3em] uppercase mb-2 block">Nuestra Selección</span>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">RECOMENDADOS</h3>
          </div>
          <div className="flex items-center gap-4 text-stone-500">
            <ChefHat className="w-6 h-6 text-[#FF0000]" />
            <p className="max-w-xs text-sm">La mejor calidad de la zona, seleccionada personalmente por Alfonso.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-stone-900/50 rounded-3xl overflow-hidden border border-stone-800 hover:border-[#D4AF37]/30 transition-all flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold italic tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors">{product.name}</h4>
                  <span className="text-2xl font-black text-[#FF0000]">${product.price}</span>
                </div>
                <p className="text-stone-400 text-sm mb-6 flex-grow">{product.description}</p>
                
                {product.unit === "kg" && (
                  <div className="mb-6">
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mb-2 block">Seleccionar Peso</span>
                    <div className="flex flex-wrap gap-2">
                      {[0.25, 0.5, 1, 1.5, 2].map((w) => (
                        <button
                          key={w}
                          onClick={() => setSelectedWeights(prev => ({ ...prev, [product.id]: w }))}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            (selectedWeights[product.id] || 1) === w 
                              ? "bg-[#D4AF37] text-black" 
                              : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                          }`}
                        >
                          {w >= 1 ? `${w}kg` : `${w * 1000}g`}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 text-xs font-bold text-[#D4AF37]">
                      Equivale a: ${(product.price * (selectedWeights[product.id] || 1)).toFixed(0)}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-stone-500 uppercase tracking-widest font-bold font-mono">Por {product.unit}</span>
                  <button 
                    onClick={() => orderProduct(product)}
                    className="flex items-center gap-2 bg-[#FF0000] hover:bg-white hover:text-black text-white px-5 py-3 rounded-2xl transition-all font-bold uppercase text-xs tracking-widest"
                  >
                    Pedir ahora
                    <Phone className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info & Location Section */}
      <section id="ubicacion" className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FF0000] text-xs font-black tracking-[0.3em] uppercase mb-4 block">Dónde Estamos</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
              Presidente Viera <br />
              Av. Joaquín Suárez
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1">Punto de Encuentro</h5>
                  <p className="text-stone-400">Ubicación céntrica para que siempre tengas la mejor carne a mano.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
                  <CreditCard className="w-6 h-6 text-[#FF0000]" />
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1">Método de Pago</h5>
                  <p className="text-stone-400">Aceptamos únicamente <span className="text-[#D4AF37] font-bold">Efectivo</span> en el local.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1">Atención Directa</h5>
                  <p className="text-stone-400">Nuestro WhatsApp está abierto para dudas y pedidos rápidos: 094211672</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-full border-[1px] border-stone-800 flex items-center justify-center">
            {/* Artistic Location Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-t border-[#D4AF37]/20 rounded-full"
              />
            </div>
            <div className="text-center p-12 bg-[#0a0a0a] rounded-full border border-stone-800 shadow-2xl relative z-10">
              <MapPin className="w-12 h-12 text-[#FF0000] mx-auto mb-4 animate-bounce" />
              <h4 className="text-2xl font-black italic uppercase italic tracking-tighter">Viera & Suárez</h4>
              <p className="text-stone-500 text-xs mt-2 uppercase tracking-widest">Esquina Tradicional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-12 border-t border-stone-900 text-center px-6">
        <h2 className="text-4xl font-black text-stone-800 uppercase italic tracking-tighter mb-4 opacity-50">Lo del Alfonso</h2>
        <p className="text-stone-500 text-sm max-w-md mx-auto">
          Calidad garantizada. Sabor tradicional uruguayo. Carnicería seleccionada por expertos.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-stone-600">
            <a href="https://instagram.com/carnicerialode" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors font-mono text-xs uppercase tracking-widest">Instagram</a>
          <a href="https://www.google.com/maps/search/?api=1&query=-30.907944,-55.543000" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors font-mono text-xs uppercase tracking-widest">Google Maps</a>
        </div>
        <p className="mt-8 text-stone-700 text-[10px] uppercase tracking-widest">© 2024 Lo del Alfonso - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
