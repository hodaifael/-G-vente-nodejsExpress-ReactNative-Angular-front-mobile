//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';

// create a component
const Details = ({ route }) => {
    const [product, setProduct] = useState([]);



    const getProductData = async () => {
        fetch('http://192.168.100.200:5000/api/products/' + route.params.paramKey)
            .then((response) => response.json())
            .then((json) => setProduct(json))
            .catch((error) => console.error(error))
    };


    const updateEtatToValide = async () => {
        fetch('http://192.168.100.200:5000/api/products/admin/valide/' + route.params.paramKey)
            .then((response) => response.json())
            .catch((error) => console.error(error))
        getProductData();
    };


    const updateEtatToRefuser = async () => {
        fetch('http://192.168.100.200:5000/api/products/admin/refuser/' + route.params.paramKey)
            .then((response) => response.json())
            .catch((error) => console.error(error))
        getProductData();
    };



    const onChangeprix = (value) => {
        setProduct({ ...product, prix: value });
    };

    const updateEtatToContreoffre = () => {
        console.log(product);
        fetch('http://192.168.100.200:5000/api/products/admin/contreoffre/' + route.params.paramKey, {
            method: 'PUT',
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
        getProductData();
    };


    useState(() => {
        getProductData();
    }, []);

    function Item({ item }) {
        return (
            <View >
                <View style={styles.listItem}>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <Text style={{ color: "green" }}>marque</Text>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.marque}</Text>
                        </View>
                    </View>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <Text style={{ color: "green" }}>description</Text>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.description}</Text>
                        </View>
                    </View>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <Text style={{ color: "green" }}>caracteristiques techniques :</Text>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.caracteristiques_techniques}</Text>
                        </View>
                    </View>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <Text style={{ color: "green" }}>etat_esthetique</Text>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.etat_esthetique}</Text>
                        </View>
                    </View>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <Text style={{ color: "green" }}>etat</Text>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.etat}</Text>
                        </View>
                    </View>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <Text style={{ color: "green" }}>prix</Text>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 20 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.prix}</Text>
                        </View>
                    </View>
                    <View style={styles.listItem1}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>

                            <Text style={{ color: "green" }}>prix</Text>
                        </View>

                        <TextInput
                            onChangeText={(value) => onChangeprix(value)}
                            style={{
                                borderWidth: 2,
                                paddingHorizontal: 70,
                                borderColor: "#00716F",
                                borderRadius: 23,
                                paddingVertical: 10,

                            }}
                        />
                    </View>


                </View >
                <View style={{
                    marginTop: 170,
                    padding: 10,
                    width: "100%",
                    flex: 1,
                    flexDirection: "column",
                    borderRadius: 5
                }}>
                    <View style={{
                        margin: 10,
                        padding: 10,
                        flex: 1,
                        alignSelf: "center",
                        flexDirection: "row",
                        borderRadius: 5
                    }}>
                        <View style={{ height: 10, width: 110, justifyContent: "center", }}>
                            <TouchableOpacity
                                onPress={updateEtatToContreoffre}
                            >
                                <Text style={{
                                    color: "black",
                                    justifyContent: "center",
                                    backgroundColor: "#ffff1a",
                                    paddingVertical: 20,
                                    textAlign: 'center',
                                    borderRadius: 5
                                }}
                                >contre-offre</Text>

                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 5 }}>
                            <TouchableOpacity
                                onPress={updateEtatToValide}
                            >

                                <Text style={{
                                    color: "white",
                                    justifyContent: "center",
                                    backgroundColor: "#00716F",
                                    paddingVertical: 20,
                                    textAlign: 'center',
                                    borderRadius: 5
                                }}

                                >Valide</Text>

                            </TouchableOpacity>

                        </View>
                        <View style={{ height: 10, width: 110, justifyContent: "center", marginLeft: 5 }}>
                            <TouchableOpacity
                                onPress={updateEtatToRefuser}
                            >

                                <Text style={{
                                    color: "white",
                                    justifyContent: "center",
                                    backgroundColor: "#ff0000",
                                    paddingVertical: 20,
                                    textAlign: 'center',
                                    borderRadius: 5
                                }}

                                >refuser</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View >

            </View >
        );
    };

    return (

        <View style={styles.container}>
            <FlatList
                data={product}
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
        flexDirection: "column",
        borderRadius: 5
    },
    listItem1: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }

});

//make this component available to the app
export default Details;
