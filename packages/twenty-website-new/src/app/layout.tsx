import { FooterVisibilityGate } from '@/app/_components/FooterVisibilityGate';
import {
  FOOTER_DATA,
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  TWITTER_HANDLE,
} from '@/app/_constants';
import { ContactCalModalRoot } from '@/app/components/ContactCalModal';
import { Footer } from '@/sections/Footer/components';
import { theme } from '@/theme';
import { cssVariables } from '@/theme/css-variables';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import type { Metadata, Viewport } from 'next';
import { Aleo, Azeret_Mono, Host_Grotesk, VT323 } from 'next/font/google';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const aleo = Aleo({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-serif',
  display: 'swap',
});

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-retro',
  display: 'swap',
});

css`
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(html) {
    background-color: ${theme.colors.primary.background[100]};
  }

  :global(body) {
    color: ${theme.colors.primary.text[100]};
    display: flex;
    font-family: ${theme.font.family.sans};
    flex-direction: column;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const SOCIAL_PREVIEW_IMAGE = {
  url: SITE_LOGO_PATH,
  width: 512,
  height: 512,
  alt: `${SITE_NAME} — open source CRM`,
  type: 'image/png',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'CRM',
    'open source CRM',
    'sales CRM',
    'customer relationship management',
    'Twenty',
    'Twenty CRM',
    'Salesforce alternative',
    'HubSpot alternative',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: 'en_US',
    images: [SOCIAL_PREVIEW_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [SITE_LOGO_PATH],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: SITE_LOGO_PATH,
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cssVariables} ${hostGrotesk.variable} ${aleo.variable} ${azeretMono.variable} ${vt323.variable}`}
        suppressHydrationWarning
      >
        <ContactCalModalRoot>
          <StyledMain>{children}</StyledMain>
          <FooterVisibilityGate>
            <Footer.Root illustration={FOOTER_DATA.illustration}>
              <Footer.Logo />
              <Footer.Nav groups={FOOTER_DATA.navGroups} />
              <Footer.Bottom
                copyright={FOOTER_DATA.bottom.copyright}
                links={FOOTER_DATA.socialLinks}
              />
            </Footer.Root>
          </FooterVisibilityGate>
        </ContactCalModalRoot>
      </body>
    </html>
  );
}
