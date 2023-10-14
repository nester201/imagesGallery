'use client';
import { createGlobalStyle } from 'styled-components';
import { Inter } from 'next/font/google';
import colors from '@/theme/colors';

const inter = Inter({ subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${inter.className}, sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${colors.text};
  }
`;
