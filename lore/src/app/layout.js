import '@/styles/base/base.scss'

import Header from '@/components/layout/Header';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainApp({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
