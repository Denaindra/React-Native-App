import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusbar}></View>
      <Text>Hellow gayan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff',
  },
  statusbar:{
    backgroundColor:'#ffce00',
    height:25
  }
});
