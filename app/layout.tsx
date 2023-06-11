import './globals.css'
import { Inter } from 'next/font/google'
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = { // Влияет на SEO - Search Engine Optimization
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Next.js автоматически не добавляет html и body во все файлы. Поэтому нужно задавать layout
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Providers>
          <TheHeader />
            <main className="container">
              {children}
            </main>
          <TheFooter />
        </Providers>
      </body>
    </html>
  )
}