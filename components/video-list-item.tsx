'use client';

import { Video } from '@/lib/metadata';
import { Play, Clock, BookOpen } from 'lucide-react';

interface VideoListItemProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export function VideoListItem({ video, onPlay }: VideoListItemProps) {
  return (
    <div
      onClick={() => onPlay(video)}
      className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg border border-border hover:border-primary/50 bg-card hover:bg-muted/50 transition-all duration-300 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-40 h-24 sm:h-24 bg-black rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <Play className="w-5 h-5 text-white fill-white ml-1" />
        </div>
        <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground line-clamp-2 text-sm md:text-base group-hover:text-primary transition-colors mb-1">
          {video.title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-2">
          {video.description}
        </p>
        <div className="flex items-center gap-2 md:gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="truncate">{video.subject}</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Clock className="w-3.5 h-3.5" />
            <span>{video.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
