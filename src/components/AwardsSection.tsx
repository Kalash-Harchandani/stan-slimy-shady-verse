
import { Trophy, Star, Award, Music } from 'lucide-react';

const AwardsSection = () => {
  const majorAwards = [
    {
      title: "Grammy Awards",
      count: "15",
      description: "Including Best Rap Album and Best Rap Song",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-yellow-400"
    },
    {
      title: "Academy Award",
      count: "1",
      description: "Best Original Song for 'Lose Yourself'",
      icon: <Star className="w-8 h-8" />,
      color: "text-gold"
    },
    {
      title: "MTV Awards",
      count: "8",
      description: "Video Music Awards and Movie Awards",
      icon: <Music className="w-8 h-8" />,
      color: "text-purple-400"
    },
    {
      title: "American Music Awards",
      count: "8",
      description: "Favorite Rap/Hip-Hop Artist multiple times",
      icon: <Award className="w-8 h-8" />,
      color: "text-blue-400"
    }
  ];

  const achievements = [
    "Best-selling hip-hop artist of all time",
    "First artist to have 10 consecutive #1 albums",
    "220+ million records sold worldwide",
    "Diamond certification for multiple albums",
    "Rolling Stone's '100 Greatest Artists of All Time'",
    "Rock and Roll Hall of Fame inductee (2022)"
  ];

  return (
    <section id="awards" className="py-20 bg-em-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white tracking-wider mb-6">
            ACHIEVEMENTS
          </h2>
          <div className="w-24 h-1 bg-em-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-oswald leading-relaxed">
            Recognition for unparalleled contributions to music and culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {majorAwards.map((award, index) => (
            <div
              key={index}
              className="bg-em-gray rounded-lg p-8 text-center border border-em-gold/20 hover:border-em-gold/50 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-em-darker mb-6 ${award.color}`}>
                {award.icon}
              </div>
              <div className={`text-4xl font-bebas ${award.color} mb-2`}>
                {award.count}
              </div>
              <h3 className="text-xl font-oswald font-bold text-white mb-3">
                {award.title}
              </h3>
              <p className="text-gray-300 font-oswald text-sm leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-em-gold/10 to-em-gold/5 rounded-lg p-8 border border-em-gold/30">
          <h3 className="text-3xl font-bebas text-center text-white mb-8 tracking-wider">
            LEGENDARY ACHIEVEMENTS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-em-gold rounded-full mt-3"></div>
                <p className="text-gray-300 font-oswald leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-em-darker rounded-lg p-8 border border-em-gold">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-12 h-12 text-em-gold" />
              <div className="text-left">
                <div className="text-3xl font-bebas text-em-gold">2022</div>
                <div className="text-white font-oswald">Rock & Roll Hall of Fame</div>
              </div>
            </div>
            <p className="text-gray-300 font-oswald text-sm">
              Inducted for his profound impact on music and culture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
