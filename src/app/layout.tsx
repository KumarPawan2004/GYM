import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070709',
};

export const metadata: Metadata = {
  title: 'Muscle Fitness Gym | Premier Fitness Center - Kadma, Jamshedpur',
  description: 'Muscle Fitness Gym is located in Shiv Nagar, Bhatia Basti, Kadma, Jamshedpur. Rated 5.0 stars with modern gym equipment, cardio zone, certified personal coaching, and flexible workout hours.',
  keywords: ['Muscle Fitness Gym', 'gym in Kadma', 'gym in Jamshedpur', 'Bhatia Basti gym', 'Shiv Nagar gym', 'fitness center Jamshedpur', 'personal training Kadma', 'bodybuilding Jamshedpur'],
  openGraph: {
    title: 'Muscle Fitness Gym | Kadma, Jamshedpur',
    description: 'Premier fitness & strength training center in Bhatia Basti, Kadma, Jamshedpur.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('muscle_fitness_theme') || localStorage.getItem('pawan_gym_theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#f8f9fc] text-[#111827] dark:bg-[#070709] dark:text-[#ededf2] antialiased min-h-screen selection:bg-[#d4af37] selection:text-black transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
