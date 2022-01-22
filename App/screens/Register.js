import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';

export default function Register({ navigation, route }) {
    const [user, setUser] = useState({
        login: '',
        password: '',
    });




    const onChangeLogin = (value) => {
        setUser({ ...user, login: value });
    };

    const onChangePassword = (value) => {
        setUser({ ...user, password: value });
    };



    const saveData = () => {

        fetch('http://192.168.100.200:5000/api/users', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login: user.login, password: user.password }),
        })
            .then((response) => {
                setLoading(false)
                response.text();
            })
            .then((result) => console.log(result),

                navigation.replace('Login', {})

            )
            .catch((error) => console.log(error));
    };



    return (

        <View style={{ width: "100%", height: "100%", marginTop: 20, }}>

            <Text
                style={{
                    marginTop: 50,
                    fontSize: 20,
                    alignSelf: "center",
                }}
            >Are you a new user Then</Text>
            <Text
                style={{
                    marginTop: 50,
                    fontSize: 30,
                    alignSelf: "center",
                }}
            >Sign Up</Text>




            <TextInput
                placeholder={'Login'}
                onChangeText={(value) => onChangeLogin(value)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 10,
                    paddingHorizontal: 10
                }}
            />




            <TextInput
                placeholder={'Password'}
                onChangeText={(value) => onChangePassword(value)}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 55,
                    borderWidth: 2,
                    marginTop: 15,
                    paddingHorizontal: 10,
                    borderColor: "#00716F",
                    borderRadius: 23,
                    paddingVertical: 10,
                    paddingHorizontal: 10
                }}
            />



            <TouchableOpacity
                onPress={saveData}
            >

                <Text style={{
                    color: "white",
                    color: "white",
                    color: "white",
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 20,
                    borderRadius: 23,
                    marginBottom: 31,
                    textAlign: 'center',
                }}

                >Sign Up</Text>

            </TouchableOpacity>

            <Text
                onPress={() =>
                    navigation.replace('Login', {})
                }
                style={{
                    alignSelf: "center",
                    color: "#00716F",
                    paddingVertical: 30
                }}>Sign In</Text>
        </View>
    )

}


