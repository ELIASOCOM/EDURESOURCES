'use client';

import { Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg border border-border transition-smooth hover:border-primary/50">
      <Button
        variant={view === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('grid')}
        className="px-3 transition-smooth hover:scale-110 active:scale-95"
        title="Grid view"
      >
        <Grid className="w-4 h-4" />
      </Button>
      <Button
        variant={view === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('list')}
        className="px-3 transition-smooth hover:scale-110 active:scale-95"
        title="List view"
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
}
