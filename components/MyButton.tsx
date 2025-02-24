import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MyButton = ({title,onPress}) => {
  return (
  <TouchableOpacity activeOpacity={0.8} style={style.button} onPress={onPress}>
    
    <Text style={style.text}>
     {title}
    </Text>
  </TouchableOpacity>
  )
}

export default MyButton

const style=StyleSheet.create({
  button:{
    backgroundColor:"green",
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:20,
    alignItems:"center",
    margin:5
  },
  text:{
    color:"white",
    fontSize:22
  }
});