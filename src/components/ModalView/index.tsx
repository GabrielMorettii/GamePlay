import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

import { BackGround } from '../BackGround';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({
  children, 
  closeModal,
  ...rest
}: Props){
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <BackGround>
              <View style={styles.bar} />
              {children}
            </BackGround>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}