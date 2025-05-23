
import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Eminem performing live",
      caption: "Live Performance in Detroit"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Eminem studio session",
      caption: "Recording in the studio"
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      alt: "Eminem album cover",
      caption: "Album Release Party"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Eminem with fans",
      caption: "Meeting with fans"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Eminem awards ceremony",
      caption: "At the Grammy Awards"
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      alt: "Eminem documentary",
      caption: "Behind the scenes documentary"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-em-darker to-em-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-white mb-4">
            PHOTO <span className="text-em-gold">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-em-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-oswald">
            Browse through our collection of exclusive Eminem photos from performances, studio sessions, and special events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg border-2 border-em-gold/20 cursor-pointer transform transition duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                <p className="text-white font-oswald font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 bg-em-gold rounded-full p-2 text-black hover:bg-white transition duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[85vh] mx-auto rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
