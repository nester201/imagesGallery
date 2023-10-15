import React from 'react';
import { prop } from 'styled-tools';
import styled, { keyframes } from 'styled-components';
import colors from '@/theme/colors';

type Props = {
  size: string;
};

const Loader: React.FC<Props> = ({ size }) => {
  return (
    <Container>
      <Spinner size={size} />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div<{ size: string }>`
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: ${colors.primary};
  border-bottom-color: ${colors.secondary};
  width: ${prop('size')};
  height: ${prop('size')};
  -webkit-animation: ${rotate} 2s linear infinite;
  animation: ${rotate} 1s linear infinite;
`;
