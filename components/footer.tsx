'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-muted/50 to-background border-t border-border py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.02] pointer-events-none" />
      <div className="relative w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="group">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-lg md:text-xl">📚</span>
                </div>
                <span className="font-bold text-foreground text-sm md:text-base">Academic Hub</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Free educational resources for students and teachers
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Resources</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection('#videos')} className="hover:text-foreground transition-colors hover:translate-x-0.5 transition-transform">
                    🎬 Video Lessons
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#notes')} className="hover:text-foreground transition-colors hover:translate-x-0.5 transition-transform">
                    📝 Study Notes
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#papers')} className="hover:text-foreground transition-colors hover:translate-x-0.5 transition-transform">
                    📄 Past Papers
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#cai')} className="hover:text-foreground transition-colors hover:translate-x-0.5 transition-transform">
                    ✓ CAI Items
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Learn</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection('#plans')} className="hover:text-foreground transition-colors hover:translate-x-0.5 transition-transform">
                    📋 Lesson Plans
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#schemes')} className="hover:text-foreground transition-colors hover:translate-x-0.5 transition-transform">
                    🎯 Schemes of Work
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Contact</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contact@example.com" className="hover:text-foreground transition-colors">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Request Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 md:pt-8">
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              © {currentYear} Academic Resource Hub. Free learning resources for everyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
