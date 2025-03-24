import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text } from 'react-native';
import { View } from 'react-native';
export default function HomeScreen() {
  return (
    <View>
    <Text> Oh denise! sai da live filha ninguém te chamou aqui caralho!!
    </Text>
    <Image 
      style={{ width: 300 , height: 300 }}
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlq4cbufw6RSTbXBSZ9WQXFcbX6CTV-dGnxw&s'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 View: {
    backgroundColor: 'white',
  },
});

