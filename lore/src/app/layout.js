"use client";

import Header from '@/components/layout/Header';
import GlobalStyles from '@/styles/globalStyles'
import { mainTheme } from '@/styles/mainTheme'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Home',
    description: 'Home of Lore',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ThemeProvider theme={mainTheme}>
                <GlobalStyles />
                <body className={inter.className}>
                    <Header />
                    {children}
                    </body>
            </ThemeProvider>
        </html>
    )
}
