import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/components/modal/ModalProvider';
import { Modal } from '@/components/modal/Modal';

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
      <body className="antialiased" suppressHydrationWarning>
        <ModalProvider>
          {children}
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}
