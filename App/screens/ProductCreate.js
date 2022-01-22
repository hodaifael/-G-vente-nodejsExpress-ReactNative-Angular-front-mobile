import React, { useState, useEffect } from 'react';
import { Text, Picker, ScrollView, KeyboardAvoidingView, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function ProductCreate({ navigation }) {


    const [product, setProduct] = useState({
        type: '',
        description: '',
        marque: '',
        caracteristiques_techniques: '',
        etat_esthetique: '',
        prix: 0,
        id_Client: 0,
        etat: 'offre',
        image: 'logo.jpg',
    });


    const getMyObject = async () => {
        try {
            let login = await AsyncStorage.getItem('login');
            setProduct({ ...product, id_Client: login });
        } catch (e) {
            // read error
        }
    }
    useEffect(() => {
        getMyObject();
    }, []);


    const onChangetype = (value) => {
        setProduct({ ...product, type: value });
    };

    const onChangedescription = (value) => {
        setProduct({ ...product, description: value });
    };

    const onChangemarque = (value) => {
        setProduct({ ...product, marque: value });
    };

    const onChangecaracteristiques_techniques = (value) => {
        setProduct({ ...product, caracteristiques_techniques: value });
    };

    const onChangeetat_esthetique = (value) => {
        setProduct({ ...product, etat_esthetique: value });
    };


    const saveData = () => {


        console.log(product);
        fetch('http://192.168.100.200:5000/api/products', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((response) => {
                response.text();

            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
        navigation.navigate('Productclient');
    };



    return (
        <KeyboardAvoidingView

        >
            <ScrollView>
                <View style={styles.inner} style={{ width: "100%", height: "100%" }}>

                    <View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >Type</Text>
                    </View>
                    <View>
                        <View style={{
                            alignItems: "center",
                            paddingHorizontal: 70,
                            marginHorizontal: 0,
                            marginTop: 5,
                            flexDirection: "row",
                            marginHorizontal: 55,
                            borderWidth: 2,
                            marginTop: 5,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 0,
                        }}>
                            <Picker
                                selectedValue={product.type}
                                style={{ height: 50, width: 240 }}
                                onValueChange={(itemValue, itemIndex) => onChangetype(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>


                    <View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >Description</Text>
                    </View>
                    <View>
                        <View style={{
                            alignItems: "center",
                            paddingHorizontal: 70,
                            marginHorizontal: 0,
                            marginTop: 5,
                            flexDirection: "row",
                            marginHorizontal: 55,
                            borderWidth: 2,
                            marginTop: 5,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 0,
                        }}>
                            <Picker
                                selectedValue={product.description}
                                style={{ height: 50, width: 240 }}
                                onValueChange={(itemValue, itemIndex) => onChangedescription(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>

                    <View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >Marque</Text>
                    </View>
                    <View>
                        <View style={{
                            alignItems: "center",
                            paddingHorizontal: 70,
                            marginHorizontal: 0,
                            marginTop: 5,
                            flexDirection: "row",
                            marginHorizontal: 55,
                            borderWidth: 2,
                            marginTop: 5,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 0,
                        }}>
                            <Picker
                                selectedValue={product.marque}
                                style={{ height: 50, width: 240 }}
                                onValueChange={(itemValue, itemIndex) => onChangemarque(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>


                    <View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >Etat Esthetique</Text>
                    </View>
                    <View>
                        <View style={{
                            alignItems: "center",
                            paddingHorizontal: 70,
                            marginHorizontal: 0,
                            marginTop: 5,
                            flexDirection: "row",
                            marginHorizontal: 55,
                            borderWidth: 2,
                            marginTop: 5,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 0,
                        }}>
                            <Picker
                                selectedValue={product.etat_esthetique}
                                style={{ height: 50, width: 240 }}
                                onValueChange={(itemValue, itemIndex) => onChangeetat_esthetique(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>


                    <View>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 20,
                                alignSelf: "center",
                            }}
                        >Caracteristiques Techniques</Text>
                    </View>
                    <View>
                        <View style={{
                            alignItems: "center",
                            paddingHorizontal: 70,
                            marginHorizontal: 0,
                            marginTop: 5,
                            flexDirection: "row",
                            marginHorizontal: 55,
                            borderWidth: 2,
                            marginTop: 5,
                            paddingHorizontal: 10,
                            borderColor: "#00716F",
                            borderRadius: 23,
                            paddingVertical: 0,
                        }}>
                            <Picker
                                selectedValue={product.caracteristiques_techniques}
                                style={{ height: 50, width: 240 }}
                                onValueChange={(itemValue, itemIndex) => onChangecaracteristiques_techniques(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={saveData}
                    >

                        <Text style={{
                            color: "white",
                            marginHorizontal: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 30,
                            backgroundColor: "#00716F",
                            paddingVertical: 20,
                            borderRadius: 23,
                            marginBottom: 0,
                            textAlign: 'center',

                        }}

                        >Ajouter</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Productclient')
                        }
                    >

                        <Text style={{
                            color: "black",
                            marginHorizontal: 55,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 10,
                            backgroundColor: "#b3fff0",
                            paddingVertical: 20,
                            borderRadius: 23,
                            marginBottom: 0,
                            textAlign: 'center',

                        }}

                        >List</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});