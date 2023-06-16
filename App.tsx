import React, { useState } from "react";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";
import { LogBox} from "react-native";
import { useInitialRootStore } from "./src/stores/useStores";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const images = [
    require("./assets/images/login.png"),
    require("./assets/images/register.png"),
    require("./assets/images/forget.png"),
  ];

  React.useEffect(() => {
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
  }, []);

  const fetchFonts = () => {
    return Font.loadAsync({
      'Ubuntu_700Bold': require('./fonts/Ubuntu-Bold.ttf'),
    });
  }
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);


  const { rehydrated } = useInitialRootStore(() => {});
  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <ThemeProvider theme="dark" images={images}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
