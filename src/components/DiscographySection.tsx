
import { Play, Calendar, Award, Youtube } from 'lucide-react';
import { useState } from 'react';

const DiscographySection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const albums = [
    {
      title: "The Slim Shady LP",
      year: "1999",
      description: "The album that introduced the world to Slim Shady",
      tracks: "20 tracks",
      certification: "4× Platinum",
      color: "from-purple-600 to-blue-600",
      videoId: "eJO5HU_7_1w" // Slim Shady
    },
    {
      title: "The Marshall Mathers LP",
      year: "2000",
      description: "One of the fastest-selling albums in hip-hop history",
      tracks: "18 tracks",
      certification: "11× Platinum",
      color: "from-red-600 to-orange-600",
      videoId: "XbGs_qK2PQA" // Lose Yourself
    },
    {
      title: "The Eminem Show",
      year: "2002",
      description: "Showcased Eminem's production skills and lyrical maturity",
      tracks: "20 tracks",
      certification: "12× Platinum",
      color: "from-green-600 to-teal-600",
      videoId: "YVkUvmDQ3HY" // Without Me
    },
    {
      title: "Recovery",
      year: "2010",
      description: "His comeback album after a hiatus",
      tracks: "17 tracks",
      certification: "4× Platinum",
      color: "from-yellow-600 to-orange-600",
      videoId: "j5-yKhDd64s" // Not Afraid
    },
    {
      title: "The Marshall Mathers LP 2",
      year: "2013",
      description: "The sequel to his iconic second album",
      tracks: "16 tracks",
      certification: "4× Platinum",
      color: "from-indigo-600 to-purple-600",
      videoId: "RSdKmX2BH7o" // Rap God
    },
    {
      title: "Music to Be Murdered By",
      year: "2020",
      description: "His surprise eleventh studio album",
      tracks: "20 tracks",
      certification: "Platinum",
      color: "from-gray-600 to-black",
      videoId: "RHQC4fAhcbU" // Darkness
    }
  ];

  return (
    <section id="discography" className="py-20 bg-em-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white tracking-wider mb-6">
            DISCOGRAPHY
          </h2>
          <div className="w-24 h-1 bg-em-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-oswald leading-relaxed">
            Explore the evolution of one of hip-hop's greatest artists through his groundbreaking albums
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="group bg-em-gray rounded-lg overflow-hidden border border-em-gold/20 hover:border-em-gold/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${album.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    className="bg-em-gold hover:bg-em-gold/90 text-black p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    onClick={() => setActiveVideo(album.videoId)}
                  >
                    <Play size={24} />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full">
                  <span className="text-white font-oswald font-bold text-sm">{album.year}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 px-2 py-1 rounded-full flex items-center gap-1">
                  <Youtube size={16} className="text-white" />
                  <span className="text-white font-oswald font-bold text-xs">WATCH</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-oswald font-bold text-white mb-2 group-hover:text-em-gold transition-colors duration-300">
                  {album.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 font-oswald leading-relaxed">
                  {album.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    <span className="font-oswald">{album.tracks}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-em-gold">
                    <Award size={16} />
                    <span className="font-oswald font-medium">{album.certification}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-em-gold hover:bg-em-gold/90 text-black px-8 py-4 rounded-lg font-oswald font-bold text-lg transition-all duration-300 transform hover:scale-105">
            VIEW COMPLETE DISCOGRAPHY
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 bg-em-gold rounded-full p-2 text-black hover:bg-white transition duration-300"
              onClick={() => setActiveVideo(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full">
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
                title="Eminem Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiscographySection;
