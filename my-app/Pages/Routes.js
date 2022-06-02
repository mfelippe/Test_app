import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Index from "./Index";
import Menu from "./Menu";
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen
          options={{ headerShown: false }}
          name="index"
          component={Index}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Menu"
          component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
