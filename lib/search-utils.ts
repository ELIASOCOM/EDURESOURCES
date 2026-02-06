// Fuzzy search algorithm that handles typos and abbreviations
export function fuzzyMatch(searchTerm: string, targetText: string): boolean {
  const term = searchTerm.toLowerCase().trim();
  const text = targetText.toLowerCase();

  // Exact substring match - highest priority
  if (text.includes(term)) {
    return true;
  }

  // Handle common abbreviations
  const abbreviations: Record<string, string[]> = {
    maths: ['math', 'mathematics'],
    math: ['maths', 'mathematics'],
    sci: ['science'],
    eng: ['english'],
    bio: ['biology'],
    chem: ['chemistry'],
    phys: ['physics'],
    lit: ['literature'],
    hist: ['history'],
    geo: ['geography'],
    s1: ['senior 1'],
    s2: ['senior 2'],
    s3: ['senior 3'],
    s4: ['senior 4'],
    s5: ['senior 5'],
    s6: ['senior 6'],
  };

  // Check if search term matches any abbreviation and its expansions
  if (abbreviations[term]) {
    for (const expansion of abbreviations[term]) {
      if (text.includes(expansion)) {
        return true;
      }
    }
  }

  // Check reverse: if text contains abbreviation that expands to search term
  for (const [abbr, expansions] of Object.entries(abbreviations)) {
    if (expansions.includes(term) && text.includes(abbr)) {
      return true;
    }
  }

  // Only do Levenshtein matching on significant words (4+ characters)
  const words = text.split(/\s+/);
  const termWords = term.split(/\s+/);

  for (const termWord of termWords) {
    // Only apply fuzzy matching to words 4+ characters long
    if (termWord.length >= 4) {
      for (const word of words) {
        // Only match words of similar length
        if (Math.abs(termWord.length - word.length) <= 1 && word.length >= 4) {
          if (levenshteinDistance(termWord, word) <= 1) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

// Calculate Levenshtein distance for typo tolerance
export function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Calculate match score for ranking results
export function calculateMatchScore(query: string, title: string, description: string, subject: string): number {
  const queryLower = query.toLowerCase();
  let score = 0;

  // Exact title match is best (100 points)
  if (title.toLowerCase() === queryLower) {
    score += 100;
  } else if (title.toLowerCase().includes(queryLower)) {
    score += 90;
  }

  // Title word match (70 points)
  const titleWords = title.toLowerCase().split(/\s+/);
  const queryWords = queryLower.split(/\s+/);
  const titleWordMatches = titleWords.filter(w => queryWords.some(qw => w.includes(qw) || qw.includes(w))).length;
  if (titleWordMatches > 0) {
    score += 70 * (titleWordMatches / titleWords.length);
  }

  // Subject match is very important (80 points)
  if (subject.toLowerCase() === queryLower) {
    score += 80;
  } else if (subject.toLowerCase().includes(queryLower)) {
    score += 75;
  }

  // Description match (40 points, only if other matches aren't sufficient)
  if (description.toLowerCase().includes(queryLower)) {
    score += 40;
  }

  // Only add fuzzy bonus if query is 4+ characters (prevent noise from short terms)
  if (queryLower.length >= 4 && fuzzyMatch(query, `${title} ${subject}`)) {
    score += 20;
  }

  return score;
}
