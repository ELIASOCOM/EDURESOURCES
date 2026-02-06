'use client';

import { useState, useMemo } from 'react';
import { metadata, Video, Resource } from '@/lib/metadata';
import { Hero } from '@/components/hero';
import { VideoCard } from '@/components/video-card';
import { ResourceCard } from '@/components/resource-card';
import { VideoListItem } from '@/components/video-list-item';
import { ResourceListItem } from '@/components/resource-list-item';
import { VideoPlayerModal } from '@/components/video-player-modal';
import { ViewToggle } from '@/components/view-toggle';
import { Navbar } from '@/components/navbar';
import { InfoSections } from '@/components/info-sections';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { fuzzyMatch, calculateMatchScore } from '@/lib/search-utils';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<Record<string, number>>({
    videos: 1,
    notes: 1,
    papers: 1,
    cai: 1,
    plans: 1,
    schemes: 1,
  });

  const ITEMS_PER_PAGE = 6;

  // Search functionality with fuzzy matching
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = searchQuery.trim();
    const results: Array<{
      type: string;
      items: (Video | Resource)[];
    }> = [];

    // Filter and sort videos by match score
    if (metadata.videos.length > 0) {
      const videos = metadata.videos
        .map((v) => ({
          item: v,
          score: calculateMatchScore(query, v.title, v.description, v.subject),
        }))
        .filter((v) => v.score >= 20) // Only include results with meaningful match score
        .sort((a, b) => b.score - a.score)
        .map((v) => v.item);
      if (videos.length > 0) results.push({ type: 'Videos', items: videos });
    }

    // Filter and sort notes
    if (metadata.notes.length > 0) {
      const notes = metadata.notes
        .map((n) => ({
          item: n,
          score: calculateMatchScore(query, n.title, n.description, n.subject),
        }))
        .filter((n) => n.score >= 20)
        .sort((a, b) => b.score - a.score)
        .map((n) => n.item);
      if (notes.length > 0) results.push({ type: 'Study Notes', items: notes });
    }

    // Filter and sort papers
    if (metadata.pastPapers.length > 0) {
      const papers = metadata.pastPapers
        .map((p) => ({
          item: p,
          score: calculateMatchScore(query, p.title, p.description, p.subject),
        }))
        .filter((p) => p.score >= 20)
        .sort((a, b) => b.score - a.score)
        .map((p) => p.item);
      if (papers.length > 0) results.push({ type: 'Past Papers', items: papers });
    }

    // Filter and sort CAI
    if (metadata.cai.length > 0) {
      const cai = metadata.cai
        .map((c) => ({
          item: c,
          score: calculateMatchScore(query, c.title, c.description, c.subject),
        }))
        .filter((c) => c.score >= 20)
        .sort((a, b) => b.score - a.score)
        .map((c) => c.item);
      if (cai.length > 0) results.push({ type: 'CAI Items', items: cai });
    }

    // Filter and sort plans
    if (metadata.lessonPlans.length > 0) {
      const plans = metadata.lessonPlans
        .map((p) => ({
          item: p,
          score: calculateMatchScore(query, p.title, p.description, p.subject),
        }))
        .filter((p) => p.score >= 20)
        .sort((a, b) => b.score - a.score)
        .map((p) => p.item);
      if (plans.length > 0) results.push({ type: 'Lesson Plans', items: plans });
    }

    // Filter and sort schemes
    if (metadata.schemesOfWork.length > 0) {
      const schemes = metadata.schemesOfWork
        .map((s) => ({
          item: s,
          score: calculateMatchScore(query, s.title, s.description, s.subject),
        }))
        .filter((s) => s.score >= 20)
        .sort((a, b) => b.score - a.score)
        .map((s) => s.item);
      if (schemes.length > 0) results.push({ type: 'Schemes of Work', items: schemes });
    }

    return results.length > 0 ? results : [];
  }, [searchQuery]);

  const renderVideoSection = (items: Video[]) => {
    const sectionId = 'videos';
    const currentPageNum = currentPage[sectionId] || 1;
    const startIdx = (currentPageNum - 1) * ITEMS_PER_PAGE;
    const displayItems = items.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    const hasNext = startIdx + ITEMS_PER_PAGE < items.length;
    const hasPrev = currentPageNum > 1;

    return (
      <section key={sectionId} id={sectionId} className="py-12 md:py-16 border-b border-border">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl animate-bounce">🎬</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Video Lessons</h2>
                  <span className="text-xs md:text-sm text-muted-foreground">Page {currentPageNum} • {items.length} videos available</span>
                </div>
              </div>
              <ViewToggle view={viewMode} onViewChange={setViewMode} />
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 animate-fadeIn stagger-children' : 'space-y-3 mb-6 md:mb-8 animate-fadeIn stagger-children'}>
              {displayItems.map((video) => (
                viewMode === 'grid' ? (
                  <VideoCard key={video.id} video={video} onPlay={setSelectedVideo} />
                ) : (
                  <VideoListItem key={video.id} video={video} onPlay={setSelectedVideo} />
                )
              ))}
            </div>

            {(hasNext || hasPrev) && (
              <div className="flex flex-wrap items-center justify-center gap-3 transition-smooth">
                {hasPrev && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage({ ...currentPage, [sectionId]: currentPageNum - 1 })}
                    className="bg-transparent hover:bg-muted/80 transition-smooth hover:scale-105 active:scale-95"
                  >
                    ← Load Previous
                  </Button>
                )}
                {hasNext && (
                  <Button
                    onClick={() => setCurrentPage({ ...currentPage, [sectionId]: currentPageNum + 1 })}
                    className="transition-smooth hover:scale-105 active:scale-95"
                  >
                    Load Next →
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  const renderResourceSection = (
    title: string,
    icon: string,
    items: Resource[],
    type: 'notes' | 'papers' | 'cai' | 'plans' | 'schemes',
    sectionId: string
  ) => {
    const currentPageNum = currentPage[sectionId] || 1;
    const startIdx = (currentPageNum - 1) * ITEMS_PER_PAGE;
    const displayItems = items.slice(startIdx, startIdx + ITEMS_PER_PAGE);
    const hasNext = startIdx + ITEMS_PER_PAGE < items.length;
    const hasPrev = currentPageNum > 1;

    return (
      <section key={sectionId} id={sectionId} className="py-12 md:py-16 border-b border-border last:border-b-0">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
              <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="text-3xl md:text-4xl animate-bounce">{icon}</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    Page {currentPageNum} • {items.length} resources available
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayItems.map((item) => (
                <ResourceCard key={item.id} resource={item} type={type} />
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
              {hasPrev && (
                <Button onClick={() => setCurrentPage({ ...currentPage, [sectionId]: currentPageNum - 1 })}>
                  Previous
                </Button>
              )}
              {hasNext && (
                <Button onClick={() => setCurrentPage({ ...currentPage, [sectionId]: currentPageNum + 1 })}>
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <Hero
        isSearching={searchResults !== null && searchResults.length > 0}
        onSearch={(query) => {
          setSearchQuery(query);
          if (query.trim()) {
            document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        stats={{
          videos: metadata.siteInfo.displayNumbers.videosDisplay,
          notes: metadata.siteInfo.displayNumbers.notesDisplay,
          papers: metadata.siteInfo.displayNumbers.papersDisplay,
          cai: metadata.siteInfo.displayNumbers.caiDisplay,
          plans: metadata.siteInfo.displayNumbers.plansDisplay,
          schemes: metadata.siteInfo.displayNumbers.schemesDisplay,
        }}
      />
      
      {/* Search Results Section */}
      {searchResults && searchResults.length > 0 && (
        <section id="search-results" className="py-12 md:py-16 border-b border-border bg-gradient-to-b from-muted/30 to-background">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Search Results</h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Found {searchResults.reduce((acc, r) => acc + r.items.length, 0)} matching resources for "{searchQuery}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <ViewToggle view={viewMode} onViewChange={setViewMode} />
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery('')}
                    className="bg-transparent hover:bg-muted/80 whitespace-nowrap transition-smooth hover:scale-105 active:scale-95"
                  >
                    Clear Search
                  </Button>
                </div>
              </div>

              <div className="space-y-8">
                {searchResults.map((result) => (
                  <div key={result.type} className="animate-fadeIn">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                      {result.type}
                    </h3>
                    <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children' : 'space-y-3 stagger-children'}>
                      {result.items.map((item, idx) => {
                        if ('id' in item && !('fileUrl' in item)) {
                          const video = item as Video;
                          return viewMode === 'grid' ? (
                            <VideoCard key={idx} video={video} onPlay={setSelectedVideo} />
                          ) : (
                            <VideoListItem key={idx} video={video} onPlay={setSelectedVideo} />
                          );
                        }
                        const resourceItem = item as Resource;
                        const typeMap: Record<string, 'notes' | 'papers' | 'cai' | 'plans' | 'schemes'> = {
                          'Study Notes': 'notes',
                          'Past Papers': 'papers',
                          'CAI Items': 'cai',
                          'Lesson Plans': 'plans',
                          'Schemes of Work': 'schemes',
                        };
                        const resourceType = typeMap[result.type] || 'notes';
                        return viewMode === 'grid' ? (
                          <ResourceCard key={idx} resource={resourceItem} type={resourceType} />
                        ) : (
                          <ResourceListItem key={idx} resource={resourceItem} type={resourceType} />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Resources Section */}
      {!searchResults || searchResults.length === 0 ? (
        <>
          {metadata.videos.length > 0 && renderVideoSection(metadata.videos)}
          {metadata.notes.length > 0 &&
            renderResourceSection('Study Notes', '📝', metadata.notes, 'notes', 'notes')}
          {metadata.pastPapers.length > 0 &&
            renderResourceSection('Past Papers', '📄', metadata.pastPapers, 'papers', 'papers')}
          {metadata.cai.length > 0 &&
            renderResourceSection(
              'Continuous Assessment Items',
              '✓',
              metadata.cai,
              'cai',
              'cai'
            )}
          {metadata.lessonPlans.length > 0 &&
            renderResourceSection('Lesson Plans', '📅', metadata.lessonPlans, 'plans', 'plans')}
          {metadata.schemesOfWork.length > 0 &&
            renderResourceSection(
              'Schemes of Work',
              '📊',
              metadata.schemesOfWork,
              'schemes',
              'schemes'
            )}
        </>
      ) : null}
      <InfoSections />
      <Footer />
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}
