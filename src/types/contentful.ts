import { Asset, Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';

// Landing Page Skeleton
export interface LandingPageSkeleton extends EntrySkeletonType {
  contentTypeId: 'landingPage';
  fields: {
    heroTitle1: EntryFieldTypes.Text;
    heroTitle2: EntryFieldTypes.Text;
    heroSubtitle: EntryFieldTypes.Text;
    heroImage: EntryFieldTypes.AssetLink;
    heroCtaText: EntryFieldTypes.Text;
    heroSecondaryText: EntryFieldTypes.Text;

    // Stats
    stat1Value: EntryFieldTypes.Integer;
    stat1Suffix: EntryFieldTypes.Text;
    stat1Label: EntryFieldTypes.Text;
    stat2Value: EntryFieldTypes.Integer;
    stat2Suffix: EntryFieldTypes.Text;
    stat2Label: EntryFieldTypes.Text;
    stat3Value: EntryFieldTypes.Integer;
    stat3Suffix: EntryFieldTypes.Text;
    stat3Label: EntryFieldTypes.Text;
    stat4Value: EntryFieldTypes.Integer;
    stat4Suffix: EntryFieldTypes.Text;
    stat4Label: EntryFieldTypes.Text;

    // Features Section
    featuresTitle1: EntryFieldTypes.Text;
    featuresSubtitle: EntryFieldTypes.Text;

    // Feature Cards
    feature1Title: EntryFieldTypes.Text;
    feature1Description: EntryFieldTypes.Text;
    feature1Image: EntryFieldTypes.AssetLink;
    feature2Title: EntryFieldTypes.Text;
    feature2Description: EntryFieldTypes.Text;
    feature2Image: EntryFieldTypes.AssetLink;
    feature3Title: EntryFieldTypes.Text;
    feature3Description: EntryFieldTypes.Text;
    feature3Image: EntryFieldTypes.AssetLink;

    // Services Section
    servicesTitle: EntryFieldTypes.Text;
    service1Title: EntryFieldTypes.Text;
    service1Subtitle: EntryFieldTypes.Text;
    service1Image: EntryFieldTypes.AssetLink;
    service2Title: EntryFieldTypes.Text;
    service2Subtitle: EntryFieldTypes.Text;
    service2Image: EntryFieldTypes.AssetLink;
    service3Title: EntryFieldTypes.Text;
    service3Subtitle: EntryFieldTypes.Text;
    service3Image: EntryFieldTypes.AssetLink;
  };
}

export type LandingPage = Entry<LandingPageSkeleton, undefined, string>;

// Nosotros Page Skeleton
export interface NosotrosPageSkeleton extends EntrySkeletonType {
  contentTypeId: 'nosotrosPage';
  fields: {
    mainImage: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Text;
    paragraph1: EntryFieldTypes.Text;
    paragraph2: EntryFieldTypes.Text;
    bullet1Title: EntryFieldTypes.Text;
    bullet1Description: EntryFieldTypes.Text;
    bullet2Text: EntryFieldTypes.Text;
    bullet3Text: EntryFieldTypes.Text;
  };
}

export type NosotrosPage = Entry<NosotrosPageSkeleton, undefined, string>;

// Servicios Page Skeleton
export interface ServiciosPageSkeleton extends EntrySkeletonType {
  contentTypeId: 'serviciosPage';
  fields: {
    mainImage: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Text;
    transportLabel: EntryFieldTypes.Text;

    // Categories
    category1Title: EntryFieldTypes.Text;
    category1Items: EntryFieldTypes.Text[];
    category2Title: EntryFieldTypes.Text;
    category2Items: EntryFieldTypes.Text[];
    category3Title: EntryFieldTypes.Text;
    category3Items: EntryFieldTypes.Text[];
    category4Title: EntryFieldTypes.Text;
    category4Items: EntryFieldTypes.Text[];
  };
}

export type ServiciosPage = Entry<ServiciosPageSkeleton, undefined, string>;

// Site Settings Skeleton
export interface SiteSettingsSkeleton extends EntrySkeletonType {
  contentTypeId: 'siteSettings';
  fields: {
    siteName: EntryFieldTypes.Text;
    siteDescription: EntryFieldTypes.Text;
    contactEmail: EntryFieldTypes.Text;
    contactPhone: EntryFieldTypes.Text;
    contactWhatsapp: EntryFieldTypes.Text;
    logo: EntryFieldTypes.AssetLink;
    favicon: EntryFieldTypes.AssetLink;
  };
}

export type SiteSettings = Entry<SiteSettingsSkeleton, undefined, string>;

// Helper function to get image URL from Contentful Asset
export function getImageUrl(asset: any, width?: number): string {
  if (!asset || typeof asset !== 'object') {
    return '';
  }

  // Handle both Asset and UnresolvedLink types
  const fields = 'fields' in asset ? asset.fields : null;
  if (!fields?.file?.url) {
    return '';
  }

  const url = fields.file.url;
  const httpsUrl = url.startsWith('//') ? `https:${url}` : url;

  if (width) {
    return `${httpsUrl}?w=${width}&fm=jpg&q=85`;
  }

  return httpsUrl;
}

// Helper to get alt text
export function getImageAlt(asset: any, fallback: string = ''): string {
  if (!asset || typeof asset !== 'object') {
    return fallback;
  }

  const fields = 'fields' in asset ? asset.fields : null;
  return fields?.title || fields?.description || fallback;
}
