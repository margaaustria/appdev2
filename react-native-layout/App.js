import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigationProps = {
    navigate: (screen) => setCurrentScreen(screen),
    goBack: () => setCurrentScreen('Login'),
  };

  return (
    <>
      {currentScreen === 'Login' ? (
        <Login navigation={navigationProps} />
      ) : (
        <Signup navigation={navigationProps} />
      )}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
