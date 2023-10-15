'use client';
import StyledComponentsRegistry from '@/app/registry';
import { GlobalStyle } from '@/theme/styles';
import Header from '@/components/Header/Header';
import { ReduxProvider } from '@/providers/ReduxProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header />
            {children}
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
