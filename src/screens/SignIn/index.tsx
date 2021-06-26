import React from 'react';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { BackGround } from '../../components/BackGround';

export function SignIn(){
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    }catch (error) {
      Alert.alert(error);
    }
  }

  return(
    <BackGround>
      <View style={styles.container}>     
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'} 
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'} 
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Discord"
            onPress={handleSignIn}
          />                            
        </View>
      </View>
    </BackGround>
  );
}