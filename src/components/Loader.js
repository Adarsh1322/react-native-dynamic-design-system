import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const LoaderWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium}px;
`;

const Loader = ({ size = 'large', color, style }) => {
  const { theme } = useTheme();

  return (
    <LoaderWrapper style={style}>
      <ActivityIndicator size={size} color={color || theme.colors.primary} />
    </LoaderWrapper>
  );
};

export default Loader;
