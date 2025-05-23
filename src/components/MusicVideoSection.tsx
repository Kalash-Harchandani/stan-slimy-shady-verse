
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from "lucide-react";

const MusicVideoSection = () => {
  const videos = [
    {
      id: "eJO5HU_7_1w",
      title: "Rap God",
      description: "Official music video for Rap God by Eminem"
    },
    {
      id: "XbGs_qK2PQA",
      title: "Lose Yourself",
      description: "Official music video for Lose Yourself by Eminem"
    },
    {
      id: "j5-yKhDd64s",
      title: "Not Afraid",
      description: "Official music video for Not Afraid by Eminem"
    },
    {
      id: "YVkUvmDQ3HY",
      title: "Without Me",
      description: "Official music video for Without Me by Eminem"
    }
  ];

  return (
    <section id="videos" className="py-16 bg-em-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide text-white mb-4">
            MUSIC <span className="text-em-gold">VIDEOS</span>
          </h2>
          <div className="w-24 h-1 bg-em-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-oswald">
            Watch Eminem's iconic music videos that have helped define his legendary career.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="border-2 border-em-gold/20 bg-em-darker overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video w-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Youtube size={20} className="text-em-red" />
                          <h3 className="font-oswald font-semibold text-white">{video.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400">{video.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8">
            <CarouselPrevious className="mr-4 bg-em-gray border-em-gold/30 text-white hover:bg-em-gold hover:text-black" />
            <CarouselNext className="ml-4 bg-em-gray border-em-gold/30 text-white hover:bg-em-gold hover:text-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MusicVideoSection;
