import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio de Léandre Karassavas",
  description: "Create by Léandre Karassavas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>

        <main className="flex-grow">{children}</main>
        <footer className=" mx-auto px-4 py-2 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Karassavas Léandre. Tous droits réservés.</p>
            <nav>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <a href="https://github.com/lelekara" className="hover:underline flex items-center">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/léandre-karassavas-951996293/" className="hover:underline flex items-center">
              LinkedIn
            </a>
          </li>
              </ul>
            </nav>
        </footer>
      </body>
    </html>
  )
}

