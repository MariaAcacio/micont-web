import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/components/modal/ModalProvider';
import { ThemeRegistry } from '@/components/mui/ThemeRegistry';
import ModalWrapper from '@/components/modal/ModalWrapper';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MiCont',
  description: 'MiCont app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeRegistry>
          <ModalProvider>
            {children}
            <ModalWrapper />
          </ModalProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
