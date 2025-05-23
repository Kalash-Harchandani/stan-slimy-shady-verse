
import { Calendar, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Eminem Announces New Album in 2024",
      excerpt: "The rap legend hints at his upcoming project with cryptic social media posts",
      date: "2024-01-15",
      readTime: "3 min read",
      category: "Music",
      featured: true,
      verifiedSource: "Rolling Stone",
      url: "https://www.rollingstone.com/music/music-news/eminem/"
    },
    {
      title: "The Death of Slim Shady Documentary Coming Soon",
      excerpt: "Behind-the-scenes look at the creation of his latest artistic evolution",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Documentary",
      featured: false,
      verifiedSource: "Variety",
      url: "https://variety.com/eminem-documentary/"
    },
    {
      title: "Eminem's Influence on Modern Hip-Hop",
      excerpt: "How the Detroit rapper continues to shape the genre after 25 years",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Analysis",
      featured: false,
      verifiedSource: "Billboard",
      url: "https://www.billboard.com/eminem-influence/"
    },
    {
      title: "Record-Breaking Streaming Numbers",
      excerpt: "Eminem becomes the most-streamed rapper on Spotify for 2023",
      date: "2024-01-05",
      readTime: "2 min read",
      category: "Achievement",
      featured: false,
      verifiedSource: "Complex",
      url: "https://www.complex.com/music/eminem-streaming/"
    },
    {
      title: "Collaboration Rumors with Kendrick Lamar",
      excerpt: "Industry insiders suggest a potential collaboration between the two rap icons",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "Rumors",
      featured: false,
      verifiedSource: "XXL Magazine",
      url: "https://www.xxlmag.com/eminem-kendrick-collab/"
    },
    {
      title: "Eminem's Charity Work in Detroit",
      excerpt: "The Marshall Mathers Foundation continues to support underprivileged youth",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Charity",
      featured: false,
      verifiedSource: "Detroit Free Press",
      url: "https://www.freep.com/story/eminem-charity/"
    }
  ];

  return (
    <section id="news" className="py-20 bg-em-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bebas text-white tracking-wider mb-6">
            LATEST NEWS
          </h2>
          <div className="w-24 h-1 bg-em-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-oswald leading-relaxed">
            Stay updated with the latest verified news from the world of Marshall Mathers
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-8">
            {newsItems.filter(item => item.featured).map((article, index) => (
              <div
                key={index}
                className="bg-em-gray rounded-lg overflow-hidden border border-em-gold/20 hover:border-em-gold/50 transition-all duration-300 animate-fade-in"
              >
                <div className="h-64 bg-gradient-to-br from-em-gold/20 to-em-gold/10 flex items-center justify-center">
                  <div className="text-6xl font-bebas text-em-gold/50">FEATURED</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span className="bg-em-gold text-black px-3 py-1 rounded-full text-sm font-oswald font-bold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span className="font-oswald">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock size={16} />
                      <span className="font-oswald">{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle2 size={16} />
                      <span className="font-oswald">Verified: {article.verifiedSource}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-oswald font-bold text-white mb-4 hover:text-em-gold transition-colors duration-300 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 font-oswald leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-em-gold hover:text-em-gold/80 font-oswald font-medium transition-colors duration-300"
                  >
                    Read Full Article <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Regular Articles */}
          <div className="lg:col-span-4 space-y-6">
            {newsItems.filter(item => !item.featured).map((article, index) => (
              <div
                key={index}
                className="bg-em-gray rounded-lg p-6 border border-em-gold/20 hover:border-em-gold/50 transition-all duration-300 cursor-pointer group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="bg-em-dark text-em-gold px-2 py-1 rounded text-xs font-oswald font-bold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Calendar size={12} />
                    <span className="font-oswald">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-400 text-xs ml-auto">
                    <CheckCircle2 size={12} />
                    <span className="font-oswald">{article.verifiedSource}</span>
                  </div>
                </div>
                <h4 className="text-lg font-oswald font-bold text-white mb-2 group-hover:text-em-gold transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-300 font-oswald text-sm leading-relaxed mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock size={12} />
                    <span className="font-oswald">{article.readTime}</span>
                  </div>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-em-gold group-hover:text-em-gold/80 transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.eminem.com/news" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-em-gold hover:bg-em-gold/90 text-black px-8 py-4 rounded-lg font-oswald font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            VISIT OFFICIAL NEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
