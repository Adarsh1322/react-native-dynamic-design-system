import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const StyledCard = styled(View)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 3;
`;

const Card = ({ children, style }) => {
  const { theme } = useTheme();
  return <StyledCard style={[{ backgroundColor: theme.colors.cardBackground }, style]}>{children}</StyledCard>;
};

export default Card;
