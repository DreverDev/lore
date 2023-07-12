"use client";

import Header from '@/components/layout/Header';
import GlobalStyles from '@/styles/globalStyles';
import { mainTheme } from '@/styles/mainTheme';
import { ThemeProvider } from 'styled-components';

export default function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStyles />
            <body>
                <Header />
            </body>
        </ThemeProvider>
    )
}
