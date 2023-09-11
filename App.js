import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import React, { useState } from "react";

import Home from "./Screeens/Home";
import Setting from "./Screeens/Setting";
import Notification from "./Screeens/Notification";
import SignOut from "./Screeens/SignOut";
import Profile from "./Screeens/Profile";
import SideMenu from "./Screeens/SideMenu";
import Bookmarks from "./Screeens/Bookmarks";
import Support from "./Screeens/Support";

const Drawer = createDrawerNavigator();

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  // const CustomDefaultTheme = {
  //   ...NavigationDefaultTheme,
  //   ...PaperDefaultTheme,
  //   colors: {
  //     ...NavigationDefaultTheme.colors,
  //     ...PaperDefaultTheme.colors,
  //     background: "ffffff",
  //     text: "#333333"
  //   }
  // }
  // const CustomDarkTheme = {
  //   ...NavigationDarkTheme,
  //   ...PaperDarkTheme,
  //   colors: {
  //     ...NavigationDarkTheme.colors,
  //     ...PaperDarkTheme.colors,
  //     background: "#333333",
  //     text: "#ffffff"
  //   }
  // }

  // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider >
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <SideMenu {...props} />}
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Setting" component={Setting} />
          <Drawer.Screen name="Notification" component={Notification} />
          <Drawer.Screen name="SignOut" component={SignOut} />
          <Drawer.Screen name="Bookmarks" component={Bookmarks} />
          <Drawer.Screen name="Support" component={Support} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
