import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || '';
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '';

export const isContentfulConfigured = Boolean(CONTENTFUL_SPACE_ID && CONTENTFUL_ACCESS_TOKEN);

// Create dummy client for when Contentful is not configured
const createDummyClient = (): any => {
  return {
    getEntries: async () => ({ items: [] }),
    getEntry: async () => null,
    getAsset: async () => null,
    getAssets: async () => ({ items: [] }),
  };
};

export const contentfulClient = isContentfulConfigured
  ? createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN,
    })
  : createDummyClient();

export const previewClient = isContentfulConfigured
  ? createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN || CONTENTFUL_ACCESS_TOKEN,
      host: 'preview.contentful.com',
    })
  : createDummyClient();
