import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/screens/Login';
import Register from './App/screens/Register';
import ProductCreate from './App/screens/ProductCreate';
import Products from './App/screens/products';
import Details from './App/screens/details';
import Productclient from './App/screens/Productclient';
import Detailsclient from './App/screens/detailsclient';
import Productvalide from './App/screens/productvalide';
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ProductCreate" component={ProductCreate} />
          <Stack.Screen name="Productsvalide" component={Productvalide} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Productclient" component={Productclient} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Detailsclient" component={Detailsclient} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;