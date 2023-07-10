export const metadata = {
    title: 'Home',
    description: 'Home of Lore',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {children}
        </html>
    )
}
