import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database';
import { ButtonComponent } from '../components/ButtonComponent';
import { PRIMARY_COLOR, TEXT_COLOR } from '../commons/constantsColor';
import { db } from '../config/Config';

export default function Operaciones() {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
  
    function guardarRegistro(correo:string,contraseña:string) {
          
      set(ref(db, 'registro/' + correo), {
        contraseña: contraseña,
      });
      Alert.alert('Mensaje','Registro almacenado')
      setCorreo('')
      setContraseña('')
    }
  
      return (
          <View style={styles.container}>
              <Text style={styles.textStart}>OPERACIONES</Text>
              <Text style={styles.texto}>Id Operacion:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto)=> setCorreo(texto)}
                value={correo}
                placeholder="cristian@gmail.com"
                keyboardType='email-address'
              />
              <Text style={styles.texto}>Monto:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto)=> setContraseña(texto)}
                value={contraseña}
                placeholder="123456"
              />
              <View style={styles.containerB}>
                <ButtonComponent title='INGRESAR' onPress={()=>guardarRegistro(correo,contraseña)}/>
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