import { View, Text,Image } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native'

const SignUp = () => {
    const router =useRouter();
    const OnRegister=()=>{
        router.navigate("/login")
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <Image source={require("@/assets/images/register_image.webp")} 
      style={{width:"100%",
        height:400,
      }}
      resizeMode="cover"
      />
      <GestureHandlerRootView>
      <TextInput placeholder="Name"
        style={{borderWidth:1,marginHorizontal:5,padding:10,borderRadius:7,marginBottom:10}}
        />
       <TextInput placeholder="Mobile Number"
        style={{borderWidth:1,marginHorizontal:5,padding:10,borderRadius:7,marginBottom:10}}     
        />
        <TextInput placeholder="Password"
        style={{borderWidth:1,marginHorizontal:5,padding:10,borderRadius:7,marginBottom:10}}/>
        <TextInput placeholder="Confirm Password"
        style={{borderWidth:1,marginHorizontal:5,padding:10,borderRadius:7,marginBottom:10}}/>
        <MyButton title={"Register"} onPress={OnRegister}/>
    </GestureHandlerRootView>
     
    </ScrollView>
  )
}

export default SignUp