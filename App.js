import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";
// import registerNNPushToken from "native-notify";

const PAGE = "http://211.34.80.52:3005";

export default function App() {
  // registerNNPushToken(20286, "vByY6C1zbKzyO9kd9WqbQA");
  useEffect(() => {
    async function allowScreenRotation() {
      await ScreenOrientation.unlockAsync();
    }
    allowScreenRotation();
  }, []);

  const handleLoad = () => {
    console.log("Loaded!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.webViewContainer}>
        <WebView source={{ uri: PAGE }} onLoad={handleLoad} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  webViewContainer: {
    flex: 1,
    width: "100%",
  },
});
