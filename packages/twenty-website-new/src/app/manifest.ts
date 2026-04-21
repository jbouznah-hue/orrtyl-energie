import {
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
  SITE_LOGO_VECTOR_PATH,
  SITE_NAME,
} from '@/app/_constants';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait-primary',
    lang: 'en',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: SITE_LOGO_PATH,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: SITE_LOGO_VECTOR_PATH,
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };
}
