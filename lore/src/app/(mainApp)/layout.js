"use client";

import Header from '@/components/layout/Header';
import GlobalStyles from '@/styles/globalStyles';
import { mainTheme } from '@/styles/mainTheme';
import { ThemeProvider } from 'styled-components';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainApp({ children }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </ThemeProvider>
    )
}
