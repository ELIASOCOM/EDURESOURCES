'use client';

import { Download, Calendar, BookOpen, HardDrive } from 'lucide-react';
import { Resource } from '@/lib/metadata';

interface ResourceCardProps {
  resource: Resource;
  type: 'notes' | 'papers' | 'cai' | 'plans' | 'schemes';
}

const typeConfig = {
  notes: { icon: '📝', color: 'from-blue-500 to-blue-600', label: 'Study Notes' },
  papers: { icon: '📄', color: 'from-green-500 to-green-600', label: 'Past Papers' },
  cai: { icon: '✓', color: 'from-orange-500 to-orange-600', label: 'CAI Items' },
  plans: { icon: '📅', color: 'from-purple-500 to-purple-600', label: 'Lesson Plans' },
  schemes: { icon: '📊', color: 'from-pink-500 to-pink-600', label: 'Schemes' },
};

export function ResourceCard({ resource, type }: ResourceCardProps) {
  const config = typeConfig[type];

  return (
    <a
      href={resource.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-xl border border-border hover:border-primary transition-smooth duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 active:scale-95 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.color} p-4 md:p-6 text-white`}>
        <div className="text-2xl md:text-3xl mb-1 md:mb-2">{config.icon}</div>
        <h3 className="font-semibold line-clamp-2 text-sm md:text-base group-hover:line-clamp-none">
          {resource.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
          {resource.description}
        </p>

        {/* Meta Information */}
        <div className="space-y-2 md:space-y-3 mb-3 md:mb-4 flex-1">
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <BookOpen className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
            <span className="line-clamp-1">{resource.subject}</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <HardDrive className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
            <span>{resource.fileSize}</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Calendar className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
            <span>{new Date(resource.lastUpdated).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">{resource.class}</span>
          <Download className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}
