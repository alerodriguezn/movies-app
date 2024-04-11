import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';

export default function TabTwoScreen() {
  useEffect(() => {
    console.log("Tab Two Mounted");
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola</Text>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
