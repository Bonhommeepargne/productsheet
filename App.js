import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TermSheetAutocall from './src/TermSheetAutocall';
import TermSheetAutocallAirbag from './src/TermSheetAutocallAirbag';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={{
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      paddingTop: Constants.statusBarHeight,
    }}>
      <TermSheetAutocall />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
});
