import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
 
import {styles}  from './styles'

export function SignIn(){
  const [text, setText ] = useState('')

  return (
    <View style={styles.container}>
      <Text>Hello NLWTogether!</Text>
      <TextInput 
      style={styles.input}
      onChangeText={setText}>
      </TextInput>

      <Text>
        Você Digitou: { text}
      </Text>
    </View>
  )
}