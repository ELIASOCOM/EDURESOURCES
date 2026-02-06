# SEO Setup Guide for Complete Academic Hub

This guide helps you maximize search engine visibility and prepare your site for launching with optimal SEO.

## 1. Environment Configuration

### Update Domain Reference
Replace all instances of `yourdomain.com` with your actual domain:

**Files to update:**
- `/app/layout.tsx` - OpenGraph URL, Twitter settings
- `/public/robots.txt` - Sitemap URLs
- `/.env.local` (create if needed)

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Complete Academic Hub
```

## 2. Search Engine Registration

### Google Search Console
1. Visit [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `https://yourdomain.com`
4. Verify ownership by adding DNS record or HTML file
5. Submit `/public/robots.txt`
6. Submit `/public/site.webmanifest`
7. Request indexing of main pages

**Key features to set up:**
- Core Web Vitals monitoring
- Mobile usability report
- Sitemap submission
- URL inspection tool

### Bing Webmaster Tools
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap: `/sitemap.xml`

### Yandex (if targeting international)
1. Visit [Yandex.Webmaster](https://webmaster.yandex.com/)
2. Add your site and verify
3. Submit sitemap

## 3. Sitemap Generation

### Install Next.js Sitemap
```bash
npm install next-sitemap
```

### Create sitemap configuration
Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*?search=*'],
      },
    ],
  },
  exclude: ['/404', '/500', '/admin', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
};
```

### Generate sitemaps
```bash
npm run sitemap
# This generates:
# - /public/sitemap.xml
# - /public/robots.txt
```

### Add to package.json
```json
{
  "scripts": {
    "sitemap": "next-sitemap",
    "build": "next build && npm run sitemap"
  }
}
```

## 4. Content Optimization

### Page Title Strategy
Current: "Complete Academic Hub - Free Study Resources & Video Lessons"

Variations by page:
- Homepage: Main title (current)
- Video Section: "Video Lessons - 500+ Free Educational Videos"
- Study Notes: "Free Study Notes - 800+ Subjects & Grades"
- Past Papers: "Past Papers & Solutions - 1500+ Exam Resources"

### Meta Descriptions
- Homepage: ~160 characters (current)
- Category pages: ~155 characters each
- Individual resources: Generated from description

### Header Tags (H1, H2, H3)
- **H1**: One per page (main title)
- **H2**: Section titles (Videos, Notes, Papers, etc.)
- **H3**: Resource titles within sections

## 5. Structured Data (Schema Markup)

### Add to layout.tsx
```typescript
import { JsonLd } from 'next/jsonld'

// In RootLayout component:
<JsonLd
  data={{
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Complete Academic Hub',
    description: 'Free educational resources for students and teachers',
    url: 'https://yourdomain.com',
    logo: 'https://yourdomain.com/logo.png',
    sameAs: [
      'https://www.facebook.com/academichub',
      'https://twitter.com/academic_hub',
      'https://youtube.com/@academichub',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@yourdomain.com',
    },
  }}
/>
```

## 6. Open Graph & Twitter Optimization

### Add Proper OG Images
Replace placeholder image URLs:

1. Create hero image: 1200x630px
   - File: `/public/og-image.png`
   
2. Create Twitter image: 1200x675px
   - File: `/public/twitter-image.png`

3. Update in `app/layout.tsx`

### Social Media Sharing Optimization
- Twitter handle: @your_handle
- Facebook page: facebook.com/yourpage
- YouTube channel: youtube.com/@yourchannel

## 7. Mobile Optimization

### Check Mobile Compatibility
1. Test on [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Verify responsive design on multiple devices
3. Test touch interactions on mobile

### Viewport Configuration
Already optimized in `app/layout.tsx`:
```typescript
viewport: {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}
```

## 8. Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Test with:
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Web Vitals](https://web.dev/vitals/)
- [GTmetrix](https://gtmetrix.com/)

### Optimization Tips:
```bash
# Enable image optimization
# - Already configured with Next.js Image component

# Minify CSS/JS
# - Automatic with Next.js build

# Use Vercel's edge functions
# - Deploy on Vercel for optimal performance
```

## 9. Keyword Strategy

### Primary Keywords (High Priority)
- educational resources
- free study materials
- video lessons
- past papers
- study notes
- lesson plans

### Secondary Keywords
- exam preparation resources
- online learning platform
- teaching materials
- continuous assessment items
- curriculum resources

### Long-tail Keywords
- "free study notes for mathematics"
- "past exam papers download"
- "online video lessons for students"
- "teaching resources for teachers"
- "grade 12 past papers"
- "free lesson plans download"

### Implementation
Add to resource descriptions in `/lib/metadata.ts`:
```typescript
description: "Free study notes for mathematics covering algebra, geometry, and calculus. Perfect for exam preparation and revision."
```

## 10. Local SEO (Optional)

### If serving specific regions/countries:

1. **Add hreflang tags** for multi-language/region versions
2. **Add local schema** in structured data
3. **Register with Google My Business** if applicable

## 11. Monitoring & Analytics

### Setup Google Analytics 4
```bash
# Add to layout.tsx
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Track Key Metrics
- Organic traffic
- Click-through rate (CTR)
- Average position in search
- Conversion rate
- Top performing pages
- User engagement

### Tools to Use
- Google Analytics 4
- Google Search Console
- Bing Webmaster Tools
- Ahrefs or SEMrush (optional)

## 12. Link Building Strategy

### Internal Links
- Link between related resources
- Update footer navigation
- Add breadcrumb navigation

### External Links (Backlinks)
- Submit to education directories
- Guest posts on education blogs
- Social media promotion
- Press releases

## 13. Content Updates

### Regular Maintenance
- Update resources monthly
- Refresh old study materials
- Add new video lessons
- Update past papers annually

### SEO-Friendly Updates
- Create new resource listings page
- Blog with education tips
- Resource guides and tutorials
- FAQ section

## 14. Deployment Checklist

- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Sitemap generated and submitted
- [ ] Robots.txt configured
- [ ] Google Search Console verified
- [ ] Bing Webmaster verified
- [ ] OG images uploaded
- [ ] Structured data tested
- [ ] Mobile tested on multiple devices
- [ ] Performance optimized
- [ ] Analytics configured
- [ ] Social media profiles linked
- [ ] Contact email set up

## 15. Ongoing SEO Maintenance

### Monthly Tasks
- Check Search Console for issues
- Monitor top keywords
- Review failed resources/404 errors
- Update content as needed

### Quarterly Tasks
- Analyze organic traffic patterns
- Update keyword strategy if needed
- Audit internal links
- Check competitor strategies

### Annually
- Comprehensive SEO audit
- Update sitemap
- Refresh popular content
- Review and improve ranking keywords

## Resources

- [Google Search Central Blog](https://developers.google.com/search/blog)
- [Next.js SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Semantic HTML Best Practices](https://www.w3.org/WAI/tutorials/page-structure/)

---

**Questions?** Check the main README.md for more information about the project.
