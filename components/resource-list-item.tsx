'use client';

import { Resource } from '@/lib/metadata';
import { Download, BookOpen, HardDrive, Calendar } from 'lucide-react';

interface ResourceListItemProps {
  resource: Resource;
  type: 'notes' | 'papers' | 'cai' | 'plans' | 'schemes';
}

const typeConfig: Record<
  string,
  { icon: string; color: string; label: string }
> = {
  notes: {
    icon: '📔',
    color: 'from-blue-500 to-cyan-500',
    label: 'Study Notes',
  },
  papers: {
    icon: '📑',
    color: 'from-emerald-500 to-teal-500',
    label: 'Past Papers',
  },
  cai: {
    icon: '✓',
    color: 'from-amber-500 to-orange-500',
    label: 'CAI Items',
  },
  plans: {
    icon: '📋',
    color: 'from-purple-500 to-pink-500',
    label: 'Lesson Plans',
  },
  schemes: {
    icon: '🎯',
    color: 'from-rose-500 to-red-500',
    label: 'Schemes of Work',
  },
};

export function ResourceListItem({ resource, type }: ResourceListItemProps) {
  const config = typeConfig[type];

  return (
    <a
      href={resource.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-muted/50 transition-all duration-300"
    >
      {/* Icon & Title */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-3 mb-2">
          <span className="text-xl flex-shrink-0">{config.icon}</span>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2 text-sm md:text-base group-hover:text-primary transition-colors">
              {resource.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
              {resource.subject}
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-1 hidden sm:block">
          {resource.description}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground w-full sm:w-auto">
        <div className="flex items-center gap-1 flex-shrink-0">
          <HardDrive className="w-3.5 h-3.5" />
          <span>{resource.fileSize}</span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-xs">
            {new Date(resource.lastUpdated).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Download Icon */}
      <Download className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 hidden sm:block" />
    </a>
  );
}
