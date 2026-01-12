import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nerd Em Foco",
  description: "Notícias sobre o mundo nerd em geral",
  icons: {
    icon: '/marca-dagua.png',
    apple: '/marca-dagua.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark text-light">
        {children}
      </body>
    </html>
  )
}
