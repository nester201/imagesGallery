'use client';
import styled, { createGlobalStyle } from 'styled-components';
import { Tajawal } from 'next/font/google';
import colors from '@/theme/colors';

const inter = Tajawal({ subsets: ['latin'], weight: '300' });

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    position: relative;
  }

  body {
    font-family: ${inter.className};
    font-style: normal;
    color: ${colors.text};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 8px;
  border-radius: 20px;
  border-color: ${colors.border};
  border-image: none;
  font-size: 16px;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background: ${colors.primaryGradient};
  color: ${colors.whiteText};

  &:hover {
    background: ${colors.primaryGradient};
  }

  &:active {
    animation: growAndShrink 0.5s;
  }

  @keyframes growAndShrink {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
