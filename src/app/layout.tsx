import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neeraj Kumar - DevOps Engineer & Full Stack Developer',
  description: 'DevOps Engineer with 3+ years of experience designing, implementing, and maintaining automated deployment pipelines and scalable cloud infrastructures.',
  keywords: ['DevOps', 'Full Stack Developer', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'React', 'Node.js'],
  authors: [{ name: 'Neeraj Kumar' }],
  creator: 'Neeraj Kumar',
  openGraph: {
    title: 'Neeraj Kumar - DevOps Engineer & Full Stack Developer',
    description: 'DevOps Engineer with 3+ years of experience designing, implementing, and maintaining automated deployment pipelines and scalable cloud infrastructures.',
    url: 'https://devilraj.dev',
    siteName: 'Neeraj Kumar Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neeraj Kumar - DevOps Engineer & Full Stack Developer',
    description: 'DevOps Engineer with 3+ years of experience designing, implementing, and maintaining automated deployment pipelines and scalable cloud infrastructures.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
