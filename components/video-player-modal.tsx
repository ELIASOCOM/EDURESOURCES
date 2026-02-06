'use client';

import { X, ExternalLink } from 'lucide-react';
import { Video } from '@/lib/metadata';
import { Button } from '@/components/ui/button';

interface VideoPlayerModalProps {
  video: Video | null;
  onClose: () => void;
}

export function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  if (!video) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 flex items-center justify-between p-3 md:p-4 bg-background border-b border-border z-10">
          <h2 className="text-sm md:text-lg font-semibold text-foreground truncate flex-1">
            {video.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors ml-2 md:ml-4 flex-shrink-0"
            aria-label="Close video player"
          >
            <X className="w-4 md:w-5 h-4 md:h-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video bg-black w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-4">{video.description}</p>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-3 md:mb-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 bg-transparent text-sm md:text-base"
            >
              Close
            </Button>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full text-sm md:text-base">
                <ExternalLink className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                YouTube
              </Button>
            </a>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4 border-t border-border">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Subject</div>
              <div className="text-sm md:text-base font-medium">{video.subject}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Duration</div>
              <div className="text-sm md:text-base font-medium">{video.duration}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
