import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/50 bg-ink">
      <div className="absolute inset-x-0 top-0 h-px gradient-gold opacity-60" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="font-display text-3xl text-gradient-gold">Hotel Sanraj Inn</div>
            <div className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">
              Hôtels & Résidences
            </div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A collection of timeless properties devoted to the art of stillness, craft, and quiet
            excellence — since 1996.
          </p>
          <form className="flex max-w-sm rounded-full glass overflow-hidden">
            <input
              type="email"
              placeholder="Subscribe to our journal"
              className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="px-5 gradient-gold text-primary-foreground" aria-label="Subscribe">
              <Send size={16} />
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe uppercase text-gold mb-5">Discover</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/rooms" className="hover:text-gold transition">
                Suites & Villas
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold transition">
                Heritage
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              14 Quai des Étoiles
              <br />
              Côte d'Azur, France
            </li>
            <li>+33 4 92 00 18 00</li>
            <li>concierge@aurum.com</li>
          </ul>
          <div className="flex gap-4 mt-6 text-muted-foreground">
            <a href="#" className="hover:text-gold transition" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-gold transition" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-gold transition" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground tracking-wider">
          <div>© {new Date().getFullYear()} Hotel Sanraj Inn Hôtels. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
