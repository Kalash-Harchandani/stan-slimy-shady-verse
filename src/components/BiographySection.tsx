
import { Calendar, MapPin, Trophy } from 'lucide-react';

const BiographySection = () => {
  const milestones = [
    {
      year: "1972",
      title: "Born in St. Joseph, Missouri",
      description: "Marshall Bruce Mathers III was born on October 17, 1972",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      year: "1996",
      title: "Infinite Album",
      description: "Released his debut album, marking the beginning of his professional career",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      year: "1999",
      title: "The Slim Shady LP",
      description: "Breakthrough album that earned him his first Grammy Award",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      year: "2002",
      title: "8 Mile Movie",
      description: "Starred in the semi-autobiographical film '8 Mile' and won an Oscar",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <section id="biography" className="py-20 bg-em-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white tracking-wider mb-6">
            THE STORY
          </h2>
          <div className="w-24 h-1 bg-em-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-oswald leading-relaxed">
            From a troubled childhood in Detroit to becoming one of the best-selling music artists of all time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <div className="bg-em-gray rounded-lg p-8 border border-em-gold/20">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-em-gold" />
                <h3 className="text-2xl font-oswald font-bold text-white">Detroit Origins</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-oswald">
                Marshall Bruce Mathers III, known professionally as Eminem, grew up in the tough streets of Detroit, Michigan. 
                His early life was marked by poverty, bullying, and family struggles, experiences that would later fuel his raw, 
                authentic lyrics and connect with millions of fans worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed font-oswald">
                Despite facing numerous challenges, including being one of the few white rappers in a predominantly black genre, 
                Eminem's exceptional lyrical ability, complex rhyme schemes, and storytelling prowess earned him respect and 
                recognition in the hip-hop community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex-shrink-0 w-16 h-16 bg-em-gold rounded-full flex items-center justify-center text-black">
                  {milestone.icon}
                </div>
                <div className="bg-em-gray rounded-lg p-6 flex-1 border border-em-gold/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-em-gold font-bebas text-xl">{milestone.year}</span>
                  </div>
                  <h4 className="text-white font-oswald font-bold text-lg mb-2">{milestone.title}</h4>
                  <p className="text-gray-300 font-oswald">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-em-gold/20 to-em-gold/10 rounded-lg p-8 border border-em-gold/30">
            <blockquote className="text-2xl sm:text-3xl font-oswald text-white italic mb-4">
              "Success is my only option, failure's not."
            </blockquote>
            <cite className="text-em-gold font-oswald font-bold">- Eminem</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
