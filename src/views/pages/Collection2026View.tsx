import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// Import images from the Collection 2026 folder
import img1 from '../../Collection 2026/magnific_2884831161.png';
import img2 from '../../Collection 2026/magnific_2884837919.png';
import img3 from '../../Collection 2026/magnific_2884844331.png';
import img4 from '../../Collection 2026/magnific_2884849875.png';
import img5 from '../../Collection 2026/magnific_2884856175.png';
import img6 from '../../Collection 2026/magnific_2884862139.png';
import img7 from '../../Collection 2026/magnific_2884867144.png';
import img8 from '../../Collection 2026/magnific_2884872066.png';

export default function Collection2026View() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, src: img1, title: isRtl ? "خاتم ملكي عيار 21" : "Royal Ring 21K" },
    { id: 2, src: img2, title: isRtl ? "عقد فاخر عيار 24" : "Luxury Necklace 24K" },
    { id: 3, src: img3, title: isRtl ? "سوار أناقة عصرية" : "Modern Elegance Bracelet" },
    { id: 4, src: img4, title: isRtl ? "طقم الزفاف الملكي" : "Royal Wedding Set" },
    { id: 5, src: img5, title: isRtl ? "أقراط كلاسيكية" : "Classic Earrings" },
    { id: 6, src: img6, title: isRtl ? "سلسلة ذهبية فريدة" : "Unique Gold Chain" },
    { id: 7, src: img7, title: isRtl ? "سوار التراث الأصيل" : "Heritage Bracelet" },
    { id: 8, src: img8, title: isRtl ? "تحفة الهدى 2026" : "Al Hoda Masterpiece 2026" },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="min-h-screen bg-premium-black pt-24 pb-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-3">
            {isRtl ? "المجموعة الحصرية" : "Exclusive Collection"}
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 pb-4 gold-gradient serif-text">
            {isRtl ? "كولكشن 2026" : "Collection 2026"}
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6" />
          <p className="text-gold-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            {isRtl 
              ? "نقدم لكم أحدث إبداعاتنا لعام 2026. تشكيلة فريدة تجمع بين عراقة التصميم وفخامة الذهب الخالص، صممت خصيصاً لتناسب أرقى الأذواق."
              : "Introducing our latest creations for 2026. A unique collection combining design heritage with pure gold luxury, crafted specifically for the most refined tastes."}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-premium-gray rounded-2xl overflow-hidden border border-gold-900/30 hover:border-gold-500/50 shadow-xl cursor-pointer transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden relative bg-premium-black/50">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-premium-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end">
                    <span className="bg-gold-600/80 text-premium-black p-2 rounded-full block">
                      <Eye size={20} />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-gold-100 text-lg font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h3>
                    <span className="text-gold-400 text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {isRtl ? "تفاصيل فاخرة" : "Luxury Details"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-premium-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-gold-100 hover:text-gold-400 transition-colors z-50 bg-premium-gray/50 p-3 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 text-gold-100 hover:text-gold-400 transition-colors z-50 bg-premium-gray/50 p-4 rounded-full hidden md:block"
            >
              <ChevronLeft size={32} />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-6 text-gold-100 hover:text-gold-400 transition-colors z-50 bg-premium-gray/50 p-4 rounded-full hidden md:block"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full aspect-square md:aspect-auto md:h-[80vh] flex flex-col items-center justify-center relative"
            >
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-gold-500/30 shadow-2xl"
              />
              
              <div className="mt-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gold-200 mb-2 serif-text">
                  {images[selectedImage].title}
                </h2>
                <p className="text-gold-400 text-sm">
                  {isRtl 
                    ? `صورة ${selectedImage + 1} من ${images.length}` 
                    : `Image ${selectedImage + 1} of ${images.length}`}
                </p>
              </div>

              {/* Mobile Swipe/Navigation Hints or small buttons */}
              <div className="flex md:hidden gap-6 mt-4">
                <button 
                  onClick={handlePrev}
                  className="text-gold-100 hover:text-gold-400 bg-premium-gray/50 p-3 rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="text-gold-100 hover:text-gold-400 bg-premium-gray/50 p-3 rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
