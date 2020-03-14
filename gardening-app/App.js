import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as PlantProvider } from "./src/context/PlantContext";
import AccountScreen from "./src/screens/AccountScreen";
import PlantCreateScreen from "./src/screens/PlantCreateScreen";
import PlantDetailScreen from "./src/screens/PlantDetailScreen";
import PlantEditScreen from "./src/screens/PlantEditScreen";
import PlantListScreen from "./src/screens/PlantListScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SoilbedCreateScreen from "./src/screens/SoilbedCreateScreen";
import SoilbedDetailScreen from "./src/screens/SoilbedDetailScreen";
import SoilbedEditScreen from "./src/screens/SoilbedEditScreen";
import SoilbedListScreen from "./src/screens/SoilbedListScreen";
import WeatherMainScreen from "./src/screens/WeatherMainScreen";
import CompostListScreen from "./src/screens/CompostListScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    plantListFLow: createStackNavigator({
      PlantList: PlantListScreen,
      PlantDetail: PlantDetailScreen,
      PlantCreate: PlantCreateScreen,
      PlantEdit: PlantEditScreen
    }),
    soilbedListFlow: createStackNavigator({
      SoilbedList: SoilbedListScreen,
      SoilbedDetail: SoilbedDetailScreen,
      SoilbedCreate: SoilbedCreateScreen,
      SoilbedEdit: SoilbedEditScreen
    }),
    CompostList: CompostListScreen,
    WeatherMain: WeatherMainScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <PlantProvider>
      <AuthProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </PlantProvider>
  );
};
