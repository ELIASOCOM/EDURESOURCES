'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#videos', label: 'Videos', icon: '🎬' },
    { href: '#notes', label: 'Study Notes', icon: '📝' },
    { href: '#papers', label: 'Past Papers', icon: '📄' },
    { href: '#cai', label: 'CAI Items', icon: '✓' },
    { href: '#plans', label: 'Lesson Plans', icon: '📋' },
    { href: '#schemes', label: 'Schemes', icon: '🎯' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/30 shadow-sm">
      <div className="w-full px-4">
        <div className="flex h-16 items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground group transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
              <span className="text-xl">📚</span>
            </div>
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-bold">
              Academic Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200 relative group flex items-center gap-1.5"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-12 transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm bg-transparent hover:bg-muted/80 transition-colors"
              >
                About
              </Button>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              <Button
                size="sm"
                className="text-xs sm:text-sm bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border/40 hover:bg-muted transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4 bg-gradient-to-b from-background to-muted/20">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2 w-full text-left"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border/40 mt-2">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#about');
                  }}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs bg-transparent hover:bg-muted/80"
                  >
                    About
                  </Button>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full text-xs bg-gradient-to-r from-primary to-accent"
                  >
                    Contact
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
