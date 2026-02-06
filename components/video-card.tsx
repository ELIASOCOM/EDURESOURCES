'use client';

import { Play, Clock, BookOpen } from 'lucide-react';
import { Video } from '@/lib/metadata';

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <button
      onClick={() => onPlay(video)}
      className="group text-left bg-card rounded-xl border border-border hover:border-primary transition-smooth duration-300 overflow-hidden hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
        <img
          src={thumbnailUrl || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMjMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWQgVmlkZW88L3RleHQ+PC9zdmc+';
          }}
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="w-12 md:w-16 h-12 md:h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-5 md:w-6 h-5 md:h-6 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-4 flex flex-col h-full">
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-1 md:mb-2 text-sm md:text-base">
          {video.title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-3 md:mb-4">
          {video.description}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-2 md:gap-3 text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1 min-w-0">
            <BookOpen className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0" />
            <span className="truncate">{video.subject}</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Clock className="w-3 md:w-4 h-3 md:h-4" />
            <span>{video.duration}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
