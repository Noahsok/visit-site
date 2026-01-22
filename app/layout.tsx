import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Visit — Newburgh, NY',
  description: 'Contemporary art gallery and cocktail bar in Newburgh, NY',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <header>
          <Link href="/" className="logo">
<Image 
  src="/images/Logo-Visit.png" 
  alt="Visit" 
  width={120} 
  height={30} 
  style={{ width: 'auto', height: '28px' }}
/></Link>
          <span className="location">Newburgh, NY</span>
        </header>

        <nav>
          <ul>
            <li><Link href="/exhibitions">Exhibitions</Link></li>
            <li><Link href="/artists">Artists</Link></li>
            <li><Link href="/bar">Bar</Link></li>
            <li><Link href="/membership">Membership</Link></li>
          </ul>
        </nav>

        {children}

        <footer>
          <div className="footer-links">
        <a href="https://www.instagram.com/visit__net/" target="_blank" rel="noopener noreferrer">@visit__net</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
