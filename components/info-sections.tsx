'use client';

import { Mail, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InfoSections() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-12 md:py-20 border-b border-border bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">About Academic Hub</h2>
              <p className="text-muted-foreground">Empowering students and teachers with quality educational resources</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Free Access</h3>
                <p className="text-sm text-muted-foreground">All resources are freely available to students and educators worldwide</p>
              </div>

              <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Curated Content</h3>
                <p className="text-sm text-muted-foreground">Carefully selected and organized educational materials for effective learning</p>
              </div>

              <div className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">New resources added regularly to keep content fresh and relevant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 border-b border-border bg-background">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Get in Touch</h2>
              <p className="text-muted-foreground">Have questions or suggestions? We'd love to hear from you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 md:p-8 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Your message here..."
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="p-6 md:p-8 rounded-lg border border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@academichez.com" className="text-foreground hover:text-primary transition-colors">
                        info@academichez.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Support</p>
                      <p className="text-foreground">Available Monday - Friday, 9AM - 5PM UTC</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <a href="https://academic-hub.com" className="text-foreground hover:text-primary transition-colors">
                        www.academic-hub.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-4">Follow us on social media</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
