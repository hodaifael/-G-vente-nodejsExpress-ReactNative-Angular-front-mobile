//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const productvalide = ({ navigation }) => {
    const [products, setProducts] = useState([]);


    const getProductData = async () => {
        try {
            fetch('http://192.168.100.200:5000/api/products/valide')
                .then((response) => response.json())
                .then((json) => setProducts(json))
                .catch((error) => console.error(error))
        } catch (e) {
            // read error
        }

    };



    useState(() => {
        getProductData();
    }, []);






    function Item({ item }) {
        return (
            <View style={styles.listItem}>
                <View style={styles.column}>
                    <Image
                        style={styles.tinyLogo}
                        source={
                            require('../images/logo.jpg',
                            )}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={{ fontWeight: "bold" }}>{item.marque}</Text>
                    <Text>{item.description}</Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Detailsclient', {
                            paramKey: item.id,
                        })
                    }
                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", marginLeft: 5, }}
                >
                    <Text style={{
                        color: "green",
                        color: "white",
                        justifyContent: "center",
                        backgroundColor: "green",
                        paddingVertical: 10,
                        width: 50,
                        textAlign: 'center',
                        borderRadius: 5
                    }}>detail</Text>
                </TouchableOpacity>
            </View>


        );
    };

    return (

        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item, index) => item + index.toString()}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        marginTop: 20
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    info: {
        marginTop: 20,
        height: 10,
        width: 190,
        justifyContent: "center",
        marginLeft: 10,
    },
    column: {
        marginTop: 20,
        height: 10,
        justifyContent: "center",
        marginLeft: 5,
    },
    tinyLogo: {
        width: 70,
        height: 60,
        borderRadius: 5
    }

});

//make this component available to the app
export default productvalide;
