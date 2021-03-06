import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TermSheetAutocall from './src/TermSheetAutocall';
import TermSheetAutocallAirbag from './src/TermSheetAutocallAirbag';
import TermSheetPhoenix from './src/TermSheetPhoenix'
import TermSheetPhoenixMem from './src/TermSheetPhoenixMem'
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
      {/* <TermSheetAutocallAirbag 
        coupon={5}
        ymin={40}
        ymax={130}
        xmax={10}
        barr_capital={60}
        barr_anticipe={100}
        airbag={1}
        disable={false}
      /> */}
      {/* <TermSheetPhoenixMem
        coupon={5}
        ymin={40}
        ymax={130}
        xmax={10}
        barr_capital={60}
        barr_coupon={80}
        barr_anticipe={100}
      /> */}
      <TermSheetPhoenixMem
        coupon={5}
        ymin={40}
        ymax={130}
        xmax={10}
        barr_capital={60}
        barr_coupon={80}
        barr_anticipe={100}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
});
