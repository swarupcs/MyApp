import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import MyButton from '@/components/MyButton';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const LogIn = () => {
  const router = useRouter();
  const OnLogin = () => {
    router.navigate("/(tabs)");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/Login_Image.webp")}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />
      <GestureHandlerRootView>
        <TextInput
          placeholder="Mobile Number"
          style={{ borderWidth: 1, marginHorizontal: 5, padding: 10, borderRadius: 7, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          style={{ borderWidth: 1, marginHorizontal: 5, padding: 10, borderRadius: 7, marginBottom: 10 }}
        />
        <MyButton title={"Login"} onPress={OnLogin} />
      </GestureHandlerRootView>
    </ScrollView>
  );
};

export default LogIn;