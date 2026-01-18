import { contentfulClient, isContentfulConfigured } from './contentful';
import type {
  LandingPage,
  NosotrosPage,
  ServiciosPage,
  SiteSettings,
  LandingPageSkeleton,
  NosotrosPageSkeleton,
  ServiciosPageSkeleton,
  SiteSettingsSkeleton,
} from '@/types/contentful';

// Fetch Landing Page content
export async function getLandingPage(): Promise<LandingPage | null> {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local');
    return null;
  }

  try {
    const entries = await (contentfulClient.getEntries as any)({
      content_type: 'landingPage',
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0] as LandingPage;
    }

    return null;
  } catch (error) {
    console.error('Error fetching landing page:', error);
    return null;
  }
}

// Fetch Nosotros Page content
export async function getNosotrosPage(): Promise<NosotrosPage | null> {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local');
    return null;
  }

  try {
    const entries = await (contentfulClient.getEntries as any)({
      content_type: 'nosotrosPage',
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0] as NosotrosPage;
    }

    return null;
  } catch (error) {
    console.error('Error fetching nosotros page:', error);
    return null;
  }
}

// Fetch Servicios Page content
export async function getServiciosPage(): Promise<ServiciosPage | null> {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local');
    return null;
  }

  try {
    const entries = await (contentfulClient.getEntries as any)({
      content_type: 'serviciosPage',
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0] as ServiciosPage;
    }

    return null;
  } catch (error) {
    console.error('Error fetching servicios page:', error);
    return null;
  }
}

// Fetch Site Settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!isContentfulConfigured) {
    console.warn('Contentful is not configured. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local');
    return null;
  }

  try {
    const entries = await (contentfulClient.getEntries as any)({
      content_type: 'siteSettings',
      limit: 1,
    });

    if (entries.items.length > 0) {
      return entries.items[0] as SiteSettings;
    }

    return null;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
