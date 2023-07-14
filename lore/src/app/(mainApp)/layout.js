import Header from '@/components/layout/Header';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainApp({ children }) {
    return (
        <body className={inter.className}>
            <Header />
            {children}
        </body>
    )
}
