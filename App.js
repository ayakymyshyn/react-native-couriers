import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';


// other screens
import { HomeScreen } from './screens/HomeScreen';
import { OrderDetails } from './screens/OrderDetails';
import {ProductsList} from './screens/ProductsList';

const Stack = createStackNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    async function loadDataAndResources() {
      try {
        SplashScreen.preventAutoHide();
        await Font.loadAsync({
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf")
        });
      }
      catch (err) {
        console.warn(err);
      }
      finally {
        setIsLoaded(true);
        SplashScreen.hide();
      }
    }
    loadDataAndResources();
  }, []);
  if (!isLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="ProductsList" component={ProductsList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


