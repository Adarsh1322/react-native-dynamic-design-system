import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const StyledButton = styled(TouchableOpacity)`
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium}px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

const Button = ({ title, onPress, bgColor, textColor, style, textStyle }) => {
  const { theme } = useTheme();

  return (
    <StyledButton onPress={onPress} bgColor={bgColor} style={style}>
      <ButtonText style={[textStyle, { color: textColor || theme.colors.text }]}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
