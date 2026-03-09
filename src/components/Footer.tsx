import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Rescue Odyssey</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A story-driven space rescue website template with Supabase backend integration.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <a href="mailto:hello@wpagency.xyz" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
              <Mail className="w-4 h-4" />
              hello@wpagency.xyz
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Rescue Odyssey. MIT Licensed.
          </p>
          <div className="flex items-center gap-1 text-white/40 text-sm">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
            <span>by</span>
            <a href="https://wpagency.xyz" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors font-medium">
              WP Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
