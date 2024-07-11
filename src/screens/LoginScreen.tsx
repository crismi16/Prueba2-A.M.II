import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { ButtonComponent } from '../components/ButtonComponent';
import { auth } from '../config/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }: any) {
    
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  
  function login() {
    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('BottomTab')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        let titulo='';
        let mensaje='';

        if (errorCode=='auth/invalid-email') {
          titulo='Correo invalido'
          mensaje='Revisar que el email sea correcto'
        } else if (errorCode=='auth/user-not-found') {
          titulo='Correo de usuario'
          mensaje='El usuario no se encuentra registrado'
        } else if (errorCode=='auth/invalid-credential') {
          titulo='Error de contraseña'
          mensaje='Revisar contraseña'
        } else {
          titulo='Error'
          mensaje='Revisar credenciales'
        }

        console.log(errorCode)
        console.log(errorMessage);
        
        Alert.alert(titulo,mensaje)
      });
  }

    return (
        <View style={styles.container}>
            <Text style={styles.textStart}>LOGIN</Text>
            <Text style={styles.texto}>Correo:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto)=> setCorreo(texto)}
              value={correo}
              placeholder="cristian@gmail.com"
              keyboardType='email-address'
            />
            <Text style={styles.texto}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto)=> setContraseña(texto)}
              value={contraseña}
              placeholder="123456"
            />
            <View style={styles.containerB}>
              <ButtonComponent title='INGRESAR' onPress={()=>login()}/>
            </View>
          </View>
      )
    }
    
    const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:PRIMARY_COLOR,
          justifyContent:'center',
          alignItems:'center',
          paddingVertical:20,
        },
        containerB:{
          marginTop:10,
          gap:20,
        },
        logo:{
          height: 100,
          width:300,
          resizeMode:'contain'
        },
        textStart: {
          color: TEXT_COLOR,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign:'center',
          marginBottom:10,
        },
        texto:{
          color:TEXT_COLOR,
          fontWeight: 'bold',
          textAlign:'center',
        },
        input: {
          backgroundColor:'white',
          color:'black',
          width:200,
          height: 40,
          marginVertical:10,
          borderWidth: 1,
          padding: 10,
        },
      });