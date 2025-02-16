import React from 'react';
import { Modal as RNModal, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../theme/themeProvider';
import { Text } from './Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalContainer = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(View)`
  background-color: ${({ theme }) => theme.colors.modalBackground};
  padding: ${({ theme }) => theme.spacing.medium}px;
  border-radius: 8px;
  width: 80%;
`;

const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
`;

const Modal = ({
  visible,
  children,
  onClose,
  icon = 'close',
  iconSize = 24,
  iconColor,
  showCloseButton = true,
  customStyles = {},
  customIconComponent = null,
}) => {
  const { theme } = useTheme();

  return (
    <RNModal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <ModalContainer onTouchEnd={onClose}>
        <ModalContent style={[{ backgroundColor: theme.colors.modalBackground }, customStyles]}>
          {showCloseButton && (
            <CloseButton onPress={onClose}>
              {customIconComponent ? customIconComponent : <Icon name={icon} size={iconSize} color={iconColor || theme.colors.text} />}
            </CloseButton>
          )}
          {children}
        </ModalContent>
      </ModalContainer>
    </RNModal>
  );
};

export default Modal;
