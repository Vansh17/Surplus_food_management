import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../assets/main-logo.png')}/>
        </View>
        <View style={styles.texts}>
            <Text style={styles.signup_title}>
                Sign Up
            </Text>
        </View>
        <SignupForm navigation={navigation}/>
        <View style={{
            backgroundColor:'#000',
            height:120,
            top:20,
            borderTopRightRadius:80
        }}></View>
    </View>
  )
}
 const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:60,
        // paddingHorizontal:12
    },
    logoContainer:{
        alignItems:'center',
        // marginTop:40,   
    },
    logo:{
        height:200,
        width:200,
        marginBottom:-60
    },
    signup_title:{
        color:'#000000',
        fontSize:42,
        fontWeight:'bold',
    },
    texts:{
        
        width:'80%',
        padding:10,
        alignSelf:'center',
        marginTop:40
    },

 })
export default SignupScreen