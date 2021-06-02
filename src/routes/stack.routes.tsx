import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import Welcome from "../pages/Welcome";
import Confirmation from "../pages/Confirmation";
import UserIdentification from "../pages/UserIdentification";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome}></stackRoutes.Screen>
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    ></stackRoutes.Screen>
    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    ></stackRoutes.Screen>
  </stackRoutes.Navigator>
);

export default AppRoutes;
