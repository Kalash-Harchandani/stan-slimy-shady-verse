
import { Music, Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/channel/UCfM3zsQsOnfWNUppiycmBuw", label: "YouTube" },
    { icon: <Twitter size={24} />, href: "https://twitter.com/Eminem", label: "Twitter" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/eminem/", label: "Instagram" },
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/eminem", label: "Facebook" },
  ];

  const officialLinks = [
    { text: "Official Website", href: "https://www.eminem.com/" },
    { text: "Shady Records", href: "https://www.shadyrecords.com/" },
    { text: "Spotify", href: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR" },
    { text: "Apple Music", href: "https://music.apple.com/us/artist/eminem/111051" }
  ];

  return (
    <footer className="bg-em-darker border-t border-em-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Music className="w-8 h-8 text-em-gold" />
              <h3 className="text-2xl font-bebas text-white tracking-wider">EMINEM</h3>
            </div>
            <p className="text-gray-300 font-oswald leading-relaxed">
              The ultimate destination for Eminem fans worldwide. Stay connected with the latest news, 
              music, and updates from the Rap God himself.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-oswald font-bold text-white">Site Links</h4>
            <ul className="space-y-2">
              {['Biography', 'Discography', 'Awards', 'News', 'Gallery', 'Videos'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-em-gold font-oswald transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-oswald font-bold text-white">Follow Eminem</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-em-gray rounded-full flex items-center justify-center text-gray-300 hover:text-em-gold hover:bg-em-gold/10 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="bg-em-gray rounded-lg p-4 border border-em-gold/20">
              <p className="text-sm text-gray-300 font-oswald">
                🎵 <strong className="text-em-gold">New Album</strong> coming 2024!
                <br />
                Subscribe for exclusive updates.
              </p>
            </div>

            {/* Official Links */}
            <div className="mt-6">
              <h4 className="text-lg font-oswald font-bold text-white mb-3">Official Links</h4>
              <ul className="space-y-2">
                {officialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-em-gold font-oswald transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-em-gold text-xs">→</span> {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-em-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-oswald text-sm">
              © 2024 Eminem Fan Site. All rights reserved. This is an unofficial fan website.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-em-gold font-oswald text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
