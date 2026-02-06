'use client';

import { Button } from '@/components/ui/button';

interface CategoryCardsProps {
  displayNumbers: {
    videosDisplay: string;
    notesDisplay: string;
    papersDisplay: string;
    caiDisplay: string;
    plansDisplay: string;
    schemesDisplay: string;
  };
}

export function CategoryCards({ displayNumbers }: CategoryCardsProps) {
  const categories = [
    {
      title: 'Video Lessons',
      icon: '🎬',
      count: displayNumbers.videosDisplay,
      href: '#videos',
      color: 'from-blue-500 to-blue-600',
      description: 'Watch comprehensive lessons'
    },
    {
      title: 'Study Notes',
      icon: '📝',
      count: displayNumbers.notesDisplay,
      href: '#notes',
      color: 'from-purple-500 to-purple-600',
      description: 'Detailed study materials'
    },
    {
      title: 'Past Papers',
      icon: '📄',
      count: displayNumbers.papersDisplay,
      href: '#papers',
      color: 'from-amber-500 to-amber-600',
      description: 'Practice with exam papers'
    },
    {
      title: 'CAI Items',
      icon: '✓',
      count: displayNumbers.caiDisplay,
      href: '#cai',
      color: 'from-green-500 to-green-600',
      description: 'Assessment questions'
    },
    {
      title: 'Lesson Plans',
      icon: '📋',
      count: displayNumbers.plansDisplay,
      href: '#plans',
      color: 'from-pink-500 to-pink-600',
      description: 'Teaching resources'
    },
    {
      title: 'Schemes of Work',
      icon: '🎯',
      count: displayNumbers.schemesDisplay,
      href: '#schemes',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Curriculum guides'
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {categories.map((category) => (
        <button
          key={category.title}
          onClick={() => scrollToSection(category.href)}
          className="group relative overflow-hidden rounded-2xl p-6 md:p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

          {/* Animated background blob */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-current/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
              <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.count}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-4">
              {category.description}
            </p>
          </div>

          {/* Hover indicator */}
          <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>
      ))}
    </div>
  );
}
