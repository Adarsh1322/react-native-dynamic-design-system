import React from 'react';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const StyledText = styled(RNText)`
  color: ${({ theme }) => theme.colors.text};
`;

const Text = ({ children, size = 'medium', style }) => {
  const { theme } = useTheme();

  return (
    <StyledText
      style={[
        style,
        { fontSize: theme.typography.fontSizes[size] || theme.typography.fontSizes.medium, color: theme.colors.text }
      ]}
    >
      {children}
    </StyledText>
  );
};

export default Text;
