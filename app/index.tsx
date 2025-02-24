import { View ,Text} from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.navigate("/singup"); 
        }, 2000); 

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <View style={{ flex: 1,backgroundColor:"#7F00FF" ,justifyContent: "center", alignItems: "center" }}>
           <Text style={{color:"white",fontSize:40,fontWeight:700}}>Wellcome</Text>
        </View>
    );
};

export default Index;