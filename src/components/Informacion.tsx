import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Informacion(props:any) {
  return (
    <View>
      <Text>{props.data.race}</Text>
      <Text>{props.data.origin}</Text>
      <Text>{props.data.size}</Text>
      <Text>{props.data.character}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})