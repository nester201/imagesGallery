'use client';
import React from 'react';
import styled, { css } from 'styled-components';
import colors from '@/theme/colors';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ifProp } from 'styled-tools';
import { useAuth } from '@/hooks/useAuth';
import { ILink } from '@/interfaces/ILink';
import { useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import { Button } from '@/theme/styles';
import { useAppSession } from '@/hooks/useAppSession';

const Header = () => {
  const pathname = usePathname();
  const page = useSelector(selectImages.getCurrenPage);
  const session = useAppSession();
  const { signOut } = useAuth();

  const LINKS: ILink[] = [
    {
      path: `/gallery/${page.toString()}`,
      name: 'Gallery',
    },
    {
      path: '/favorites',
      name: 'Favorites',
    },
  ];

  if (!session) {
    return null;
  }

  return (
    <Container>
      {LINKS.map((item, index) => (
        <Link key={index} href={item.path} style={{ textDecoration: 'none' }}>
          <LinkText $active={item.path === pathname}>{item.name}</LinkText>
        </Link>
      ))}
      <Button onClick={signOut}>Log out</Button>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  height: 60px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  button {
    &:hover {
      background-color: transparent;
    }
  }
`;

const LinkText = styled.div<{ $active?: boolean }>`
  color: ${colors.linkColor};
  text-decoration: none;
  transition: 0.3s all ease-in-out;
  font-size: 16px;

  &:hover {
    font-size: 20px;
  }

  ${ifProp(
    '$active',
    css`
      font-size: 20px;
      text-decoration: none;
      border-bottom: 1px solid ${colors.linkColor};
    `
  )};
`;
