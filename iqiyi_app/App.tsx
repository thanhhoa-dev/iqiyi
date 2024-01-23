import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';
import AppNavigation from './src/components/navigations/AppNavigation';
import { HomeProvider } from './src/components/home/HomeContext';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden
      />
      <AppNavigation />

    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})