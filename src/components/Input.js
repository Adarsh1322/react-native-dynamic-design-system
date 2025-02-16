import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';

const StyledInput = styled(TextInput)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.small}px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium}px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

const Input = ({ placeholder, value, onChangeText, style, placeholderTextColor }) => {
  const { theme } = useTheme();

  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style}
      placeholderTextColor={placeholderTextColor || theme.colors.placeholder}
    />
  );
};

export default Input;
