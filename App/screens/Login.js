import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Register({ navigation, route }) {
    const [user, setUser] = useState({
        login: '',
        password: '',
    });
    let type = 0;




    const onChangeLogin = (value) => {
        setUser({ ...user, login: value });
    };

    const onChangePassword = (value) => {
        setUser({ ...user, password: value });
    };

    const setObjectValue = async (v) => {
        try {
            let jsonValue = JSON.stringify(v);
            await AsyncStorage.setItem('login', jsonValue);
            console.log(jsonValue);
        } catch (e) {
            // save error
        }

    }


    function json(response) {
        return response.json()
    }
    const saveData = () => {
        fetch('http://192.168.100.200:5000/api/users/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login: user.login, password: user.password }),
        })
            .then(json)
            .then(function (json) {
                console.log('request succeeded with json response', json[0].id)
                setObjectValue(json[0].id)
                if (json[0].type === 1) {
                    navigation.navigate('Products', {})
                } else {
                    navigation.navigate('ProductCreate', {})
                };
            })
            .catch((error) => console.log("error--" + error));
        console.log(type);






    };



    return (

        <View style={{ width: "100%", height: "100%", marginTop: 20, }}>

            <Text
                style={{
                    marginTop: 50,
                    fontSize: 20,
                    alignSelf: "center",
                }}
            >You have an account then</Text>
            <Text
                style={{
                    marginTop: 50,
                    fontSize: 30,
                    alignSelf: "center",
                }}
            >Sign In</Text>




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

                >Sign In</Text>

            </TouchableOpacity>

            <Text
                onPress={() =>
                    navigation.replace('Register', {})
                }
                style={{
                    alignSelf: "center",
                    color: "#00716F",
                    paddingVertical: 30
                }}>Sign Up</Text>
        </View>
    )

}