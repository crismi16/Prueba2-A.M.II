import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { auth, db } from '../config/Config';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

export default function SingInScreen({ navigation }: any) {

    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [usuario, setUsuario] = useState('')
    const [celular, setCelular] = useState('')

    function registro() {
      createUserWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // navigation.navigate('Login');
        guardarRegistro()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Alert.alert(errorCode,errorMessage)
      });
    }

    function guardarRegistro() {
      set(ref(db, 'registro/' + correo), {
        contraseña: contraseña,
        usuario: usuario,
        celular: celular,
      });
      Alert.alert('Mensaje','Registro almacenado')
      setCorreo('')
      setContraseña('')
      setUsuario('')
      setCelular('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStart}>SING IN</Text>
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
            <Text style={styles.texto}>Usuario:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto)=> setUsuario(texto)}
              value={usuario}
              placeholder="crismi"
            />
            <Text style={styles.texto}>Celular:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(texto)=> setCelular(texto)}
              value={celular}
              placeholder="0987654231"
            />
            <View style={styles.containerB}>
              <ButtonComponent title='REGISTRAR' onPress={()=>registro()}/>
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