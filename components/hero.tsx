'use client';

import React from "react"
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onSearch: (query: string) => void;
  isSearching?: boolean;
  stats: {
    videos: number | string;
    notes: number | string;
    papers: number | string;
    cai: number | string;
    plans: number | string;
    schemes: number | string;
  };
}

export function Hero({ onSearch, isSearching = false, stats }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statItems = [
    { label: 'Videos', value: stats.videos, icon: '🎬', sectionId: 'videos' },
    { label: 'Notes', value: stats.notes, icon: '📝', sectionId: 'notes' },
    { label: 'Papers', value: stats.papers, icon: '📄', sectionId: 'papers' },
    { label: 'CAI', value: stats.cai, icon: '✓', sectionId: 'cai' },
    { label: 'Plans', value: stats.plans, icon: '📅', sectionId: 'plans' },
    { label: 'Schemes', value: stats.schemes, icon: '📊', sectionId: 'schemes' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/50 py-12 md:py-20 lg:py-32 before:absolute before:inset-0 before:bg-grid-small-white/[0.02] before:pointer-events-none">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-primary">Free Educational Resources</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Learn Better
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Discover comprehensive educational materials—videos, study notes, past papers, and teaching resources all in one place.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10 md:mb-14">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
                  <input
                    type="search"
                    placeholder="Try 'maths schemes', 'mathematics', 's4 physics'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="relative w-full px-4 md:px-6 py-3 md:py-4 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm md:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-lg px-6 md:px-8 w-full sm:w-auto bg-primary hover:bg-primary/90 transition-all duration-200"
                >
                  <Search className="w-4 md:w-5 h-4 md:h-5" />
                </Button>
              </div>
            </form>

            {/* Stats Grid - Hide when searching */}
            {!isSearching && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 animate-fadeIn">
                {statItems.map((stat, index) => (
                  <button
                    key={stat.label}
                    onClick={() => scrollToSection(stat.sectionId)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                    className="group relative bg-card rounded-lg p-3 md:p-6 border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer overflow-hidden active:scale-95 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="text-2xl md:text-3xl mb-1 md:mb-2 group-hover:scale-125 transition-transform duration-300 origin-center">{stat.icon}</div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-1 group-hover:from-accent group-hover:to-primary transition-all duration-300">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                    </div>
                  </button>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
