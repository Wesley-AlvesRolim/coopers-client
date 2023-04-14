import { type Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const soleilBold = localFont({
  src: '../../public/fonts/SoleilBold.otf',
  weight: '700',
  variable: '--font-soleil-bold',
});

const soleilRegular = localFont({
  src: '../../public/fonts/SoleilRegular.otf',
  weight: '400',
  variable: '--font-soleil-regular',
});

export const metadata: Metadata = {
  title: 'Coopers',
  description: 'Coopers - Todo List',
  icons: {
    shortcut: '/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${soleilRegular.variable} ${soleilBold.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
